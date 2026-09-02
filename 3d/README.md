# `3d/` — live canvases

Three standalone pages that run the **real** dfns.co canvases instead of showing a still.
Linked from the design system at `/#assets` → *Schematics & 3D* (click any visual).

| Page | Canvas | Interaction |
|---|---|---|
| `keys.html` | `GravureCanvas` + `keys.glb` | drag to rotate |
| `stack.html` | `StackSection` (`#stack-canvas`) | scroll to assemble the stack |
| `hex-map.html` | `HeroGlobe` (`#hero-globe-canvas`) | none — re-fits on resize |

## Where the code comes from

`_astro/` holds the **production bundles copied verbatim** from `dfns-website`, hashed
filenames intact, so their relative `import()` calls resolve inside this folder:

- `three.module.CuzN0wor.js`, `GLTFLoader.Daj6mZ2M.js`, `FBXLoader.efWZ4pLK.js`, `preload-helper.CVfkMyKi.js`
- `GravureCanvas.astro_…sUi8WjpV.js`, `StackSection.astro_…Bu7jXtwc.js` — byte-identical to what dfns.co serves
- `HeroGlobe.BwjzwKjc.js` — pulled from the **live** site, whose build was ahead of the local `dist/`

Nothing is re-implemented: no forked shader, no copied GLSL. Refresh a canvas by re-copying
its chunk, not by editing it.

## The two patches (re-apply them when you re-copy)

Both exist because GitHub Pages serves this repo from `/dfns-design-system/`, not from `/`:

1. `preload-helper.CVfkMyKi.js` — `return"/"+l` → `return"./"+l`.
   Vite resolves modulepreload hints against the origin root; without this they 404.
   Harmless (only CSS preloads can reject) but noisy in the console.
2. `HeroGlobe.BwjzwKjc.js` — same resolver fix, plus the hardcoded model path
   `"/three-js/world_map.glb"` → `"./three-js/world_map.glb"`.

`GravureCanvas` and `StackSection` need no patch: their model path comes from the
`data-gravure` attribute, which the pages set relatively.

## Weight

`three.module.js` is 716 KB and the two models are 3.9 MB + 2.6 MB. That cost is the reason
these live on their own pages rather than inside `index.html` — the main page stays a single
static document and downloads none of it.

## `stack.html` is scroll-driven

`StackSection` takes no pointer input. Its whole sequence reads
`p = -rect.top / (rect.height - innerHeight)` off a 400vh section, so the page reproduces
that section for real: scroll down to tilt the middle hexagon, bring the other two in and
reveal the labels. Two deviations from the site, both deliberate:

- `#stack-gravure` gets `overflow: visible` and `cursor: default` — the shared
  `.gravure-wrap` rule in `viewer.css` clips and offers a grab cursor, neither of which
  applies to a stack whose labels sit outside the square.
- labels moved to `left: calc(76% + 12px)` (from `60% + 20px`) because this page centres
  the visual instead of putting it in a right-hand column, and they are hidden under 900px.
