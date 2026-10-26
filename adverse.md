# adverse.html — Build Instructions

Same layout, window, slider, side number buttons and behaviour as `define.md` (Frames 10 / 11 / 12 of the Figma file). Only the content differs, and it all comes from `assets/js/data.js` (key `adverse`).

**STATUS: built — captions and Hindi / Gujarati text are drafts (see below)**

## Navigation

← from: the "Adverse effects of Jealousy" notebook on `index.html` (exit animation, then this page)
→ to: the side number buttons: 1 `define.html`, 2 `when.html`, 3 `adverse.html`, 4 `how.html`; home → `index.html`

## Data

| | |
|---|---|
| Script | `assets/js/topic.js` (shared by all four pages; picks the page from `<body data-page="adverse">`) |
| Data | `assets/js/data.js` → `JEALOUSY_DATA.pages.adverse` |
| Title | 3. Adverse effects of Jealousy |
| Videos | `assets/videos/3/1.mp4` … `3.mp4` (7 slides, muted, looping, the active one plays) |

Each slide has a caption (`content`) with `english`, `hindi` and `gujrati` text. The title bar, the expanding side-button pill and the captions are rendered from the data, so edit text in `data.js` only.

## Open questions

1. The captions were written from what each video shows and the Hindi / Gujarati lines were translated without review — check them with a teacher / translator.
2. The Figma file only has designs for the "What is Jealousy ?" page; the other three reuse its layout.
3. WATCH VIDEO is inert (see `define.md`).
