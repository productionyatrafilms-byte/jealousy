# pranam.html — Build Instructions

Source: the pranam page of the `idontcare` project (`projects/idontcare/projects/idontcare/pranam.html`, `assets/css/pranam.css`, `assets/js/pranam.js`) — same card, circular masked video, Home button and sound — placed on this project's brick-wall background (`bginside.png`) instead of that project's pink one.
Base template: `basic-template.html` shell (`.main-container > .stage`), global language toggle `#langSelect`.

**STATUS: built**

## Navigation

← from: the "Pranam" arrow on the last slide of `how.html` (`endLink` in `data.js`)
→ to: `index.html` (the Home button on the card)
The round back button (top left, same `replay.png` as the other pages, level with the language toggle) returns to `how.html`.

## 0. Assets

| File | Use |
|---|---|
| assets/images/bginside.png | page background (`.page-bg`, outside the container, `object-fit: cover`) |
| assets/images/pranam-img.png | the framed orange card (882x883) |
| assets/images/pranam-bg-1.png | white studio backdrop inside the round video window |
| assets/images/home-btn-1.png | the Home button (421x131) |
| assets/images/replay.png | back button |
| assets/videos/pranam.mp4 | the namaste video (muted, looping, autoplay) |
| assets/audio/pranam.mp3 | plays once on arrival; if the browser blocks it, on the first click / key / touch |

All copied from the idontcare project. Fonts: Baloo (English), ITF Devanagari (Hindi), Noto Sans Gujarati (Gujarati), same files as the rest of this project.

## 1. Structure

```
body
├── img.page-bg (bginside.png)
├── a.back-btn
└── .main-container
    └── .stage
        ├── img.stage-spacer
        └── .pranam-container   45vw, centred
            ├── .pranam-img      85% wide card
            │   ├── .pranam-video   28vw circle, masked video
            │   ├── .pranam-title   Pranam / प्रणाम / પ્રણામ
            │   └── img
            └── a.home-btn-1     15vw, grows to 1.15 on hover, label Home / होम / ઘર
```

## 5. Open questions

1. "My current bg" was read as the brick wall used on the topic pages; the classroom (`bg.png`) is the other option.
