DFNS Button — the canonical CTA (marketing design): 36px pill, radius 12, Suisse Intl 500 Medium 14px.

```jsx
import { Button } from './Button.jsx';
import { WalletIcon } from '@heroicons/react/24/solid';

<Button variant="primary">Create wallet</Button>
<Button variant="primary" icon={<WalletIcon />}>Create wallet</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Learn more</Button>
```

Three variants only (no exceptions): `primary` (purple relief pill — bg #2d1866 + white overlay .12, border #170c33, text #e0e3f0), `secondary` (bg Cold Grey 100 #e0e3f0, text #442599), `tertiary` (transparent text link, #442599). Optional leading `icon` (any 16px node — swap freely). Animated trailing `arrow` is on by default except `secondary`. `disabled` → bg #e8eaf0 / text #aeb1c9. Hover is built in: primary → bg #442599 / border #442599 / text #fff; secondary → bg #e8eaf0 / text #5123ce; tertiary → text #5123ce. Icons: Heroicons **solid** only, never outline.
