# index.html — Build Instructions

Source: Jealousy — file key `ZsJukAi2chACVy6Msof23s`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built — back button and translations are provisional (see section 5)**

---

## Navigation

← from: none (entry page)
→ to: `define.html` — click the "What is Jealousy ?" notebook (the other three notebooks have no designed page yet)

Students slide in layer by layer while the camera zooms out (no fade): the inner two (girl-left, boy-right) slide during the first zoom leg, the outer two (boy-left, girl-right) during the second.

| Frame | Node | State |
|---|---|---|
| Frame 9 | 122:9416 | intro — world zoomed 2x on the angry girl, ENTER button |
| Frame 6 | 122:9308 | intro mid zoom-out (1.236x) |
| Frame 1 | 122:2000 | full classroom, girl looks straight ahead (`centergirl.png`) |
| Frame 4 | 122:9528 | girl looks at boy 1 (`centergirl1.png`) |
| Frame 8 | 122:9844 | girl looks at girl 2 (`centergirl2.png`) |
| Frame 2 | 122:10160 | girl looks at boy 3 (`centergirl3.png`) |
| Frame 7 | 122:10476 | girl looks at girl 4 (`centergirl4.png`) |

The frame → character mapping for 4/8/2/7 is inferred (left-looking eyes for the
two left characters, right-looking for the two right ones). Confirm in Figma
prototype wiring.

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bg.png | classroom3bg, shown whole at 100% width (Figma crops it; whole image requested) | 1920x1080 |
| background.png | `.page-bg` (transparent) | 1920x1080 |
| title.png | starburst behind the title | 736x304 |
| centergirl.png | center girl, straight | 574x648 |
| centergirl1-4.png | center girl, eye states | 467x527 |
| thirdboyleft1.png / thirdboyleft.png | boy 1 body / face | 634x756 / 250x244 |
| secondleftgirl1.png / secondleftgirl.png | girl 2 body / face | 553x713 / 275x242 |
| secondboyright1.png / secondboyright.png | boy 3 body / face | 639x712 / 247x240 |
| thirdgirlright1.png / thirdgirlright.png | girl 4 body / face | 469x754 / 324x249 |
| replay.png | replay button (88x88): resets the page to the intro zoom with ENTER | 88x88 |
| centergirlbody.png + centergirl*.png | centre girl body and separate face states | 321x394 / ~180x160 |
| shadow.png | desk shadows — **placeholder generated locally**, Figma shadow vectors were not exported | 619x87 |
| emoji.png | pops up from behind the ENTER button on hover at 3.8vw wide, and settles pushed up a little (62% of its height above the pill top) so a bit over half of it shows | 111x130 |
| stage-spacer.png | transparent, 1920x1080 (content fills the whole frame) | 1920x1080 |

Missing: real back button art, ENTER button art (built in CSS), notebook text is live text.

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Baloo | all English text | Baloo Regular 400.ttf |
| ITF Devanagari | Hindi text | ITFDevanagari.ttc |
| Noto Sans Gujarati | Gujarati text | NotoSansGujarati-Regular.ttf |

Single weight (400) each, so nothing is bold. Sizes, line heights and colours are still eyeballed from the screenshots.

---

## 1. Palette

```
--page-bg:      #f4dfe3    body colour behind the artwork
--title-fill:   #8a3a7a    "Jealousy" letters (approximate)
--title-shade:  #e0443c    "Jealousy" letter shadow
--note-blue:    #1a3fb8    notebook handwriting
--enter-red:    #e0443c    ENTER pill
--lang-red:     #e0503c    language switch pill
```

All values eyeballed from the screenshots, not read from Figma.

---

## 2. Structure

```
.main-container
└── .stage
    ├── img.stage-spacer
    ├── .world            zoom layer (transform: translate % + scale), origin top-left
    │   ├── img.classroom-bg
    │   ├── .student.boy-left / .girl-left / .girl-center / .boy-right / .girl-right
    │   └── notebook text per student
    ├── .title-wrap       starburst + "Jealousy" (static, top animates per state)
    ├── .back-btn
    └── .enter-btn        intro only
```

Content extent: y 0 .. 1080 of the frame -> spacer 1920x1080.
Positions are frame-relative, taken from Figma metadata raw x/y.

---

## 3. Frame 122:9416 / 122:9308 / 122:2000 — zoom states

  3.1- `.world` transform (origin top-left), frame 1 is identity
    3.1.1- frame 9: scale 1.5 (Figma is 1.9977, zoomed out on request), translate `-24.9% -23%` keeping the girl in the same spot
    3.1.2- frame 6: scale 1.25 (Figma is 1.2363, lowered so the zoom still only goes out), translate `-12.4% -9.11%`
    3.1.3- frame 1: scale 1, translate 0
  3.2- title top: frame 9 `1.11%` (12px), frame 6 `3.70%` (40px), frame 1 `7.22%` (78px)
  3.3- on click of ENTER → frame 9 → frame 6 → frame 1, ENTER fades out, back button fades in
  3.4- LANG switch (1642, 25) 223x70 on every state; back button (52, 23) 80x80 from frame 1 on

## 4. Frame 122:2000 etc. — characters (frame-relative px)

    4.1- girl-center: body 321 wide at left 800; face images at left 45%, top 428 (eye states 426)
    4.2- boy-left body (-20, 305) 647 wide, face (101, 307) 244 wide
    4.3- girl-left body (418, 415) 427 wide, face (495, 415) 211 wide
    4.4- boy-right body (1134, 416) 494 wide, face (1213, 415) 189 wide
    4.5- girl-right body (1458, 309) 822 wide, face (1530, 309) 318 wide
    4.6- notebook text, Ink Free, blue, left-aligned on the open book of each student
    4.7- on hover the active student's head dips 12% of their own height (faces sit behind the desk image)
    4.8- hover / click on a student → girl-center swaps to the matching eye-state image

---

## 5. Open questions

1. Real fonts, sizes, letter-spacing and line-height for title, notebook text and ENTER.
2. The four notebook texts now use the Hindi and Gujarati labels from `assets/js/data.js` (same as the side navbar pills). Jealousy (title) and ENTER still repeat their English text in the Hindi and Gujarati spans.
3. Where do the four notebooks navigate? Topic pages are off-canvas ("point page", 5337x3499) — build them?
4. Exact frame → character mapping for the eye states, and click vs hover.
5. Blur on the zoomed background in frame 9 (Figma blurs it) — not replicated.
6. Back button and ENTER artwork.

6. Clicking the first notebook plays the exit animation on this page: the classroom (`room-scene.png`) zooms out and blurs to 0.6x, the brick wall with a window-shaped hole fades in over it, the shutters close, then `define.html` loads (~3.2s). `define.html` is prefetched so the load at the end is quick.

7. All four notebooks now open their page after the exit animation: boy-left `define.html`, girl-left `when.html`, boy-right `adverse.html`, girl-right `how.html`.

8. The round replay button (top left, from the last frame on) resets the animation: the camera zooms back in, the students slide out and ENTER returns.
