DFNS product button (Rubik 2026): 40px pill, radius 12, Suisse Intl Medium 14px.

```jsx
import { Button } from './Button.jsx';
<Button variant="primary">Create wallet</Button>
<Button variant="secondary" iconLeft={<Icon name="HeroiconsMiniArchiveBox" size={20}/>}>Archive</Button>
```

Variants: `primary` (purple gradient, ring #2d1866, text #e0e3f0), `secondary` (bg #e0e3f0, text #442599), `outline` (2px #442599 border), `ghost` (white, 1px #e0e3f0 border). `disabled` renders bg #e8eaf0 / text #aeb1c9 for every variant. Hover states are built in (gradient lighten / text #693aea / grey border / bg #f0f1f4).
