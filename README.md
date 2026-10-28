# Research Atlas

Website: https://devkyber.github.io/research-atlas/

GitHub Pages validates the canonical data and deploys `dist/` after each push to `main`.

A static, searchable encyclopedia of control, autonomy and robot learning. Built in response to a request for a field overview, scholarly connections, notable papers and a graduate-research directory.

## Run locally

Serve `dist/` with any static HTTP server. The generated site also supports opening `dist/index.html` directly; all research data and the font are local. No account, API key, analytics service or database is needed for the website itself. Hosted access is managed separately by Sites.

The canonical content is `content/research-data.json`. After editing it, run `node scripts/build-data.mjs` to validate IDs and references and regenerate `dist/data.js` and the downloadable JSON. Interface source is `dist/app.js`, `dist/style.css` and `dist/index.html`. No dependency installation or framework build is required.

## What is included

- Eighteen explanatory chapters with method comparisons, assumptions, open questions, pitfalls, projects and primary-source links.
- Seventy-three selected landmark reading records and the recent-publication associations from the application directory. Journal extensions are linked to their conference versions rather than silently collapsed.
- Sixty-nine glossary entries and six learning routes.
- A conceptual field map and a separately sourced training-relationship map.
- The existing 70-university, 787-record application directory, with its evidence gaps preserved.
- Browser-local saved papers, chapters, paths, scholar shortlists, review marks and notes; JSON backup/import, including the earlier atlas checklist format.

## Scope and evidence

Snapshot: 29 October 2026. The encyclopedia is an editorial learning resource, not an exhaustive history of every contribution. A selected paper's note distinguishes metadata, abstract and selected-section review from full verification. None of the experiments has been independently reproduced by this atlas.

Application universe: KAIST, SNU, POSTECH and Yonsei; US and European universities with QS overall 2027 rank at least as high as POSTECH (#106). Historical scholars, important papers and conceptual references can be outside that universe without becoming application targets.

Directory status remains 262 profiles with an attached selected paper, 136 profile-verified records without an attached paper, and 389 directory leads. There are 53 dated citation snapshots. Counts from different providers are not interchangeable. A missing count is not zero. Incoming, historical and adjacent-methodology records are labeled, and current supervision availability is not inferred from a faculty page.

Conceptual links do not assert personal relationships. Human edges cite explicit PhD, postdoctoral or named-lab evidence. A source describing a lab affiliation is not silently promoted to direct personal mentorship. The displayed graph is a documented subset, not a complete genealogy. Topic matches and paper associations do not imply equal contribution or a collaboration between every displayed person.

Personal notes remain in browser local storage. Export a backup before moving devices or clearing storage. The HTML reading desk and the downloaded Excel checklist do not automatically synchronize. No emails or applications are sent by the site.

## Design and attribution

Design references supplied by the user:

- https://github.com/postech-psi/test-results
- https://github.com/postech-psi/postech-psi.github.io

The implementation follows their large Pretendard typography, generous spacing, restrained report controls, substantive diagrams and explicit evidence status. The palette is white and pastel blue. This is an independent resource, not an official PSI or POSTECH publication; no affiliation marks or photography were reused.

Pretendard is distributed under the SIL Open Font License; see `dist/assets/OFL.txt`. Scientific claims and paper metadata are attributed within their records. The website links to papers; it does not redistribute their full text.

## Validation

Content IDs, chapter-paper references and sourced graph edges are validated by the data build. Browser checks cover navigation, map selection, search, filters, scholar and paper details, reading-desk persistence and backup/import, and mobile width. A separate targeted content review corrected three conceptual ambiguities; it is not a proof audit or exhaustive verification of every record.
