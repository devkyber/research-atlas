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
await fs.writeFile(path.join(root,'dist/data.js'),'window.RESEARCH = '+JSON.stringify(d).replaceAll('</','<\\/')+';\n');
await fs.writeFile(path.join(root,'dist/downloads/research-data.json'),JSON.stringify(d,null,2)+'\n');
console.log(JSON.stringify({status:'validated',...d.stats}));
