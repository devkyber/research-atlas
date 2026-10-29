import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const d=JSON.parse(await fs.readFile(path.join(root,'content/research-data.json'),'utf8'));
const unique=(rows,name)=>{if(new Set(rows.map(x=>x.id)).size!==rows.length)throw Error('Duplicate '+name+' IDs')};
unique(d.chapters,'chapter');unique(d.papers,'paper');unique(d.atlas.labs,'scholar');unique(d.people,'person');
const cs=new Set(d.chapters.map(x=>x.id)),ps=new Set(d.papers.map(x=>x.id)),ss=new Set(d.atlas.labs.map(x=>x.id)),persons=new Set(d.people.map(x=>x.id));
for(const c of d.chapters){if(!c.sections.length||!c.sources.length)throw Error('Incomplete chapter '+c.id);for(const id of c.paper_ids)if(!ps.has(id))throw Error('Missing paper '+id);for(const id of c.scholar_ids)if(!ss.has(id))throw Error('Missing scholar '+id)}
for(const e of d.concept_edges)if(!cs.has(e.from)||!cs.has(e.to)||e.kind!=='conceptual')throw Error('Invalid concept edge');
for(const e of d.person_edges)if(!persons.has(e.from_id)||!persons.has(e.to_id)||!/^https?:\/\//.test(e.url))throw Error('Invalid sourced relationship');
for(const p of d.papers){if(!p.title||!p.url)throw Error('Incomplete paper '+p.id);for(const id of p.version_ids||[])if(!ps.has(id))throw Error('Missing paper version '+id)}
for(const x of d.atlas.labs){
 if(!x.career||!x.career_audit?.reason||!x.environment_audit?.reason)throw Error('Missing career/environment audit '+x.id);
 for(const item of [x,...(x.members||[])])for(const field of ['first_faculty','current_institution','full_professor']){
  const e=item.career?.[field];
  if(e?.year!=null&&(!Number.isInteger(e.year)||e.year<1900||e.year>2026||!e.sources?.length))throw Error('Invalid completed appointment '+x.id+' '+field);
 }
 for(const evidence of x.environment?.evidence||[])if(!evidence.claim||!evidence.source_type||!/^https?:\/\//.test(evidence.url))throw Error('Invalid environment evidence '+x.id);
 for(const f of ['papers','citations','lineage'])if(!x.audit?.[f]?.reason||!x.audit[f].sources?.length)throw Error('Missing evidence audit '+x.id+' '+f);
 for(const c of [x.citations,...(x.citations.additional_index_snapshots||[]),...(x.members||[]).map(m=>m.citations)]){
  if(c?.count!=null&&(!Number.isInteger(c.count)||c.count<0||!c.provider||!c.source_url||!(c.checked||c.snapshot_date)))throw Error('Invalid citation snapshot '+x.id);
 }
 for(const id of x.paper_ids||[])if(!ps.has(id))throw Error('Missing scholar paper '+x.id);
}
for(const p of d.papers){
 if(p.citation_count!=null&&(!Number.isInteger(p.citation_count)||p.citation_count<0||!p.citation_provider||!p.citation_checked||!p.metadata_source))throw Error('Invalid paper citation '+p.id);
 for(const id of p.scholar_ids)if(!ss.has(id))throw Error('Missing associated scholar '+p.id);
}
for(const e of d.person_edges)if(e.kind==='Coauthored paper'&&(e.directed!==false||!ps.has(e.paper_id)))throw Error('Invalid coauthorship edge '+e.id);
await fs.writeFile(path.join(root,'dist/data.js'),'window.RESEARCH = '+JSON.stringify(d).replaceAll('</','<\\/')+';\n');
await fs.writeFile(path.join(root,'dist/downloads/research-data.json'),JSON.stringify(d,null,2)+'\n');
console.log(JSON.stringify({status:'validated',...d.stats}));
