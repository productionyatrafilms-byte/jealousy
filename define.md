# define.html — Build Instructions

Source: Jealousy — file key `ZsJukAi2chACVy6Msof23s`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

Text, titles, captions and media now come from `assets/js/data.js` and are rendered by `assets/js/topic.js` (shared with `when.html`, `adverse.html`, `how.html`), so the markup of the title, number buttons, slides and captions is generated.

**STATUS: built — wooden window frame, home button, arrows and number buttons are provisional (see section 5)**

---

## Navigation

← from: `index.html` (the "What is Jealousy ?" notebook)
→ to: topics 2, 3, 4 (side number buttons) — not designed yet, links are `#`; home button → `index.html`

Three frames are **states of one page**:

| Frame | Node | State |
|---|---|---|
| Frame 10 | 122:2321 | window shutters closed, blurred classroom behind the glass, both arrows visible |
| Frame 11 | 122:3585 | shutters squeezed open, slide 1 (`define/1.png`), next arrow, dots, WATCH VIDEO |
| Frame 12 | 122:9093 | slide 2 (`define/2.png`), previous arrow, second text |

The page loads in Frame 10 (closed, blurred room behind the glass). The enter animation: ~0.5s after load the shutters open on their own (opening animation, slide 1 and the dots fade in). Before this change it waited for a click on the next arrow, which still works as a fallback. The open animation (shutters scaleX to 0.0977 / 0.0882, slide and dots fade in) = Frame 11. Frame 11 ↔ 12 is a Swiper slide.

Entry: the exit animation on `index.html` ends on this page's first frame (closed window over the brick wall).

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bginside.png | brick wall with leaves (`WALL 1` / `POT 1-4`), inside `.stage` | 1920x1080 |
| leftwindow.png / rightwindow.png | shutters (`window slides` groups) | 430x608 / 431x608 |
| videos/1/1.mp4, videos/1/2.mp4 | slider videos (muted, looping, autoplay on the active slide); define/1.png and define/2.png are their posters | — |
| watchvideo.png | WATCH VIDEO button | 200x67 |
| room-scene.png | composite of bg.png + all students (built locally from the exported layers); the classroom seen through the window, blurred | 1920x1080 |
| home-btn.png | `home button` — **placeholder drawn locally** | 160x144 |
| arrow-next.png | `Polygon 1/2` — **placeholder drawn locally**, prev is mirrored | 136x210 |
| glass-tint.png | pale backing behind the blurred room so the closed glass is less see-through — **placeholder generated locally** | 886x621 |
| window-frame.png | wooden `window` frame `Layer 1` — **placeholder drawn locally** | 909x648 |

Missing from the export: number buttons 1-4 (`Component 3-6`, built in CSS), the real home button, arrows and window frame.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Baloo | all English text | Baloo Regular 400.ttf |
| ITF Devanagari | Hindi text | ITFDevanagari.ttc |
| Noto Sans Gujarati | Gujarati text | NotoSansGujarati-Regular.ttf |

Single weight (400) each; the title bar Hindi and Gujarati use a browser-drawn bold (font-weight 700). Sizes, line heights and colours are still eyeballed from the screenshots.

---

## 1. Palette

```
--page-bg:     #d9774a    brick colour behind the stage
--pill-fill:   #fbe0da    title and note pills
--pill-border: #f48373    pill border and glow
--title-red:   #b3221b    "1. WHAT IS JEALOUSY ?"
--note-blue:   #0f33c0    note text
--num-fill:    #fbe38c    number buttons
--num-border:  #f2b049
--num-active:  #f2a3a3    selected number
--num-text:    #b0231a
```

Eyeballed from screenshots, not read from Figma.

---

## 2. Structure

```
.main-container
└── .stage (.state-closed -> .state-open)
    ├── img.stage-spacer
    ├── img.define-bg
    ├── a.home-btn, .title-pill, nav.num-list
    ├── .window-frame, .window-mask (blurred room + Swiper slider)
    ├── .shutter-left, .shutter-right
    ├── .arrow-prev, .arrow-next, .define-dots, .watch-btn
    └── .note-pill (two stacked .note-text, active one visible)
```

Content extent: y 0 .. 1080 -> spacer 1920x1080. Positions are frame-relative.

---

## 3. Frames 122:2321 / 122:3585 / 122:9093 (frame-relative px)

    3.1- home-btn (49, 30) 62 wide (slimmed from Figma's 80), centred on the same line as the toggle and title
    3.2- title-pill (532, 17) 842 wide, ~81 tall (slimmed from Figma's 105 to leave space above), vertically centred on the language toggle and home button (centre line y≈58; Figma has it at y=53); text centred
    3.3- num-btn x=7, y=388 / 477 / 566 / 655, 77x77; number 1 selected; on hover a pill (Figma `Rectangle 19`, hidden behind the square at rest) expands to the right to ~283 wide (wider than Figma so the larger text fits) and the topic name appears in it: 1 What is Jealousy ?, 2 When are we Jealous ?, 3 Adverse effects of Jealousy, 4 How to handle Jealousy?
    3.4- window-frame (505, 216) 909x648; window-mask (517, 229) 886x621
    3.5- the shutters are drawn 2% taller than the Figma 608px (translateY -7px, scaleY 1.0214) so they cover the whole 621px window opening with no gap above or below; after the open animation finishes (1.4s) the shutters swing outwards on their outer edges (rotateY +-105deg (past 90°, so they fold back flat against the wall beside the window) with a 260vw perspective) and stay open beside the video; shutters left (529, 236) 430 wide, right (959, 236) 431 wide; open state squeezes to 42 and 38 wide against the frame edges
    3.6- arrows prev (300, 487), next (1552, 487), 68x105, pushed ~70px outwards so they clear the open shutters (Figma metadata says prev x=439 but that is a mirrored polygon; the screenshot shows it symmetric with next about the window centre x=960); hidden at the ends of the slider
    3.7- WATCH VIDEO is shown only on this page and on how.html (`watchVideo` in data.js holds the video path; removed from when.html and adverse.html). Clicking it opens a pop-up player (`.video-modal`, dark backdrop, controls, `close.png` button, Esc or backdrop click also close): `assets/videos/1.mp4` on this page, `assets/videos/2.mp4` on how.html. The slide video pauses while it plays and resumes on close. The pop-up video uses `preload="none"`; slide videos use `preload="auto"` for the active slide only and `none` for the rest (switched on every slide change). dots (950, 785) and (974, 785), 20x20; watch-btn left 80% top 73.8889% (as specified; Figma had 1489, 798) 199x63 — both appear after the shutters open
    3.8- note-pill (510, 883) 900x147; slide 1 text "Jealousy is the feeling of sadness upon seeing another's happiness", slide 2 text "Jealousy is the feeling of anger or bitterness upon seeing another's qualification or possessions"
    3.9- slides are videos (`assets/videos/1/`), the active one plays from the start, the other is paused. slider: Swiper, 2 slides, custom arrows, custom dots, no loop

---

## 5. Open questions

1. Real fonts and sizes; real wooden window frame, home button, arrows, number buttons (export them).
2. Hindi and Gujarati text for the title and both notes — currently the English text is repeated.
3. What does WATCH VIDEO open? No video file or frame was provided; the button is inert.
4. What do number buttons 2, 3, 4 open? Designs for topics 2-4 were not provided.
5. The blurred room behind the closed shutters is `bg.png` blurred, not the exact Figma view.

## 6. Entry

The page opens on the last frame of the exit animation from `index.html` (closed window over the brick wall, Frame 10), then automatically plays the window-open animation about 0.7s after everything has loaded (the stage is held invisible until the window `load` event, 3s fallback, so nothing jumps into place) and shows `define/1.png` (Frame 11). No other start animation.
