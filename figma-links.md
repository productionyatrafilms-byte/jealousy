# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## [index].html

| Frame   | Node ID | Figma Link                                                                           |
| ------- | ------- | ------------------------------------------------------------------------------------ |
| Frame 9 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-9416&m=dev  |
| Frame 6 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-9308&m=dev  |
| Frame 1 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-2000&m=dev  |
| Frame 4 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-9528&m=dev  |
| Frame 8 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-9844&m=dev  |
| Frame 2 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-10160&m=dev |
| Frame 7 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-10476&m=dev |



## [define].html

| Frame   | Node ID | Figma Link                                                                           |
| ------- | ------- | ------------------------------------------------------------------------------------ |
| Frame 10 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-2321&m=dev  |
| Frame 11 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-3585&m=dev  |
| Frame 12 |         | https://www.figma.com/design/ZsJukAi2chACVy6Msof23s/Jealousy?node-id=122-9093&m=dev  |


## How to Read Each Frame

For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map

> Fill after reading Figma. Drives click events and navigation.

| Page | Layer Name | Interaction | Target | Animation |
| ---- | ---------- | ----------- | ------ | --------- |
|      |            |             |        |           |

---

## Sliders

> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
| ---- | ------------ | ----------------- | ------ | ----------- |
|      |              |                   |        |             |

---

## Translations

> Figma usually carries English only. Every visible text node needs all three.

| Page | English | Hindi | Gujarati |
| ---- | ------- | ----- | -------- |
|      |         |       |          |
