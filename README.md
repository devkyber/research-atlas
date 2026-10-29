# Research Atlas

Website: https://devkyber.github.io/research-atlas/

GitHub Pages validates the canonical data and deploys `dist/` after each push to `main`.

A static, searchable encyclopedia of control, autonomy and robot learning. Built in response to a request for a field overview, scholarly connections, notable papers and a graduate-research directory.

## Run locally

Serve `dist/` with any static HTTP server. The generated site also supports opening `dist/index.html` directly; all research data and the font are local. No account, API key, analytics service or database is needed for the website itself. Hosted access is managed separately by Sites.

The canonical content is `content/research-data.json`. After editing it, run `node scripts/build-data.mjs` to validate IDs and references and regenerate `dist/data.js` and the downloadable JSON. Interface source is `dist/app.js`, `dist/career.js`, `dist/style.css` and `dist/index.html`. No dependency installation or framework build is required.

## What is included

- Eighteen explanatory chapters with method comparisons, assumptions, open questions, pitfalls, projects and primary-source links.
- Seventy-three selected landmark reading records and the recent-publication associations from the application directory. Journal extensions are linked to their conference versions rather than silently collapsed.
- Sixty-nine glossary entries and six learning routes.
- A conceptual field map, six scholar-to-method reading guides, and a separately sourced relationship map with adviser, postdoctoral, lab and coauthored-paper links.
- The existing 70-university, 787-record application directory, with its evidence gaps preserved.
- A research-entry comparison view with sourced faculty appointment dates, current institutional appointments, internship/graduate routes and carefully attributed student/alumni evidence.
- Browser-local saved papers, chapters, paths, scholar shortlists, review marks and notes; JSON backup/import, including the earlier atlas checklist format.

## Scope and evidence

Snapshot: 29 October 2026. The encyclopedia is an editorial learning resource, not an exhaustive history of every contribution. A selected paper's note distinguishes metadata, abstract and selected-section review from full verification. None of the experiments has been independently reproduced by this atlas.

Application universe: KAIST, SNU, POSTECH and Yonsei; US and European universities with QS overall 2027 rank at least as high as POSTECH (#106). Historical scholars, important papers and conceptual references can be outside that universe without becoming application targets.

All 787 professor/group records have separate paper, citation and lineage source checks. 787 records have selected papers; 721 have numeric citation evidence (including separate member snapshots for combined groups). 185 records have an explicit doctoral/postdoctoral adviser or mentor link; 209 have at least one sourced training or lab role (coauthored-paper links are counted separately in the graph). The directory represents 791 individual researchers. Unresolved fields remain visible in the evidence checklist and `content/coverage-report.json`; they are not invented or treated as zero. Counts from different providers remain separate. Incoming, historical and adjacent-methodology records are labeled, and current supervision availability is not inferred from a faculty page.



Appointment-history review: 787 of 787 records have source checks or retrieval attempts logged; 532 have an earliest documented faculty year and 577 have a current institutional appointment year. The four combined records retain individual dates in their member profiles. Across 791 individual researchers, 537 have an earliest faculty year and 582 have a current institutional appointment. 27 labs received dedicated recruitment/environment review, including 16 with named student/alumni sources. 6 have actual experience narratives, interviews or thesis acknowledgments; biographies and placements are counted separately. Remaining environment reviews are explicitly pending. `content/career-coverage-report.json` lists every record and its evidence state. 145 career records remain source-screened only, with no resolved appointment dates; this is not an exhaustive CV verification. Appointment dates do not establish admission availability or mentoring quality.

Conceptual links do not assert personal relationships. Training edges cite explicit PhD, postdoctoral or named-lab evidence. Coauthor edges require an individually attributed selected-paper association or a reviewed OpenAlex author ID on the exact indexed work. Author-name substring matches never establish an edge. Coauthored-paper links are undirected, with their identity evidence retained in the data. A source describing a lab affiliation is not silently promoted to direct personal mentorship. The displayed graph is a documented subset, not a complete genealogy. Topic matches and paper associations do not imply equal contribution or a collaboration between every displayed person.

Personal notes remain in browser local storage. Export a backup before moving devices or clearing storage. The HTML reading desk and the downloaded Excel checklist do not automatically synchronize. No emails or applications are sent by the site.

## Design and attribution

Design references supplied by the user:

- https://github.com/postech-psi/test-results
- https://github.com/postech-psi/postech-psi.github.io

The implementation follows their large Pretendard typography, generous spacing, restrained report controls, substantive diagrams and explicit evidence status. The palette is white and pastel blue. This is an independent resource, not an official PSI or POSTECH publication; no affiliation marks or photography were reused.

Pretendard is distributed under the SIL Open Font License; see `dist/assets/OFL.txt`. Scientific claims and paper metadata are attributed within their records. The website links to papers; it does not redistribute their full text.

## Validation

Content IDs, chapter-paper references and sourced graph edges are validated by the data build. Browser checks cover navigation, map selection, search, filters, scholar and paper details, reading-desk persistence and backup/import, and mobile width. Independent targeted reviews checked conceptual claims, namesake contamination, publication status, and graph identity joins; they are not proof audits or exhaustive verification of every work in an author index.
