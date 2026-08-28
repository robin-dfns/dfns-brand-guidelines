# DFNS Design System

The design language of DFNS — a wallets-as-a-service and digital-asset custody platform. DFNS provides programmable wallet infrastructure (keys, policies, governance, treasury) to fintechs, banks and crypto companies. The main product surface is the **DFNS Dashboard** at `app.dfns.co`, a Next.js application for managing wallets, transfers, policies, users and organisation settings.

## Index

| Path | Contents |
| --- | --- |
| `styles.css` | The single entry point consumers link. Imports everything below. |
| `tokens/fig-tokens.css` | All 347 Figma Variables across Base tokens, Ungrouped and Semantic, including the dark theme and the product/landing modes. Generated — do not hand-edit. |
| `tokens/semantic.css` | Length and type aliases resolving the unitless float tokens into CSS lengths (`--text-*`, `--space-*`, `--radius-*`, `--stroke-*`, `--shadow-*`, `--gradient-*`). |
| `tokens/fonts.css` | `@font-face` for nine Suisse Intl weights + italics. No other typeface is loaded. |
| `tokens/base.css` | Element defaults, link colours, the loader keyframe. |
| `components/` | Reusable primitives, grouped by concern. |
| `assets/` | Logotype, app-icon symbol, webfonts, the icon data files, the one bitmap the file contains. |
| `guidelines/` | 22 foundation specimen cards (Colors, Type, Spacing, Effects, Brand). |
| `ui_kits/dashboard/` | Click-through recreation of the desktop DFNS Dashboard. |
| `ui_kits/mobile/` | Recreation of the mobile app dashboard frame. |
| `SKILL.md` | Agent-skill entry point. |
| `init-repo.sh` | One-shot script that turns this folder into a local git repository. |
| `.gitignore` | OS/editor noise and `node_modules`. The generated `_ds_*` files stay tracked. |

## Using this as a local repository

The project downloads as a plain folder — no build step, no dependencies. To version it:

```sh
sh init-repo.sh
```

That runs `git init`, stages everything, makes the first commit and names the branch `main`. To publish it afterwards, add a remote and push:

```sh
git remote add origin git@github.com:<org>/dfns-design-system.git
git push -u origin main
```

Open any `.html` file directly in a browser to view it; every card and UI kit resolves `styles.css` and `_ds_bundle.js` by relative path. Copying the folder into `~/.claude/skills/` registers it as an Agent Skill via `SKILL.md`.

## Components

Grouped by concern under `components/`, plus the two icon components that live beside their data files in `assets/`.

**Actions** — `Button`, `ButtonLegacy`, `CTAPrimary`, `CTASecondary`, `CTATertiary` **Forms** — `Input`, `SelectorBig` **Data** — `Badge`, `CardHeader`, `ProgressBar`, `Slot` **Feedback** — `IconInfoTooltip` **Glyphs** — `IconCircle`, `IconDot`, `IconCopy`, `IconLoaderCircle` **Navigation** — `MobileMenu` **Brand** — `Logotype`, `DFNSLogoColoredLight` **Icons** — `Icon` (`assets/icons/`, 1,269 glyphs), and in `assets/crypto/` (91 marks): `CryptoIcon`, `CryptoIconsRoundCryptocurrencies`, `CryptoIconsSquareNetworks`, plus the short aliases `CryptoIconRound` and `CryptoIconSquare`

Every component has a sibling `.d.ts` props contract and a `.prompt.md` with a usage example.

### Mapping to the Figma component families

| Figma family | Built as |
| --- | --- |
| Button — Variant × State × Size (75 variants) | `Button` |
| Button — State × Variant (12 variants) | `ButtonLegacy` |
| Badge — Color (6) | `Badge` |
| Input — Property 1 | `Input` |
| Selector Big — Property 1 | `SelectorBig` |
| CTA Primary/-V1 | `CTAPrimary` |
| CTA Secondary/Test-V1 | `CTASecondary` |
| CTA Tertiary | `CTATertiary` |
| Icon Info with Tooltip — Showing × Open (two identical sets) | `IconInfoTooltip` |
| Card / Header | `CardHeader` |
| Logotype — Mode × Type | `Logotype` |
| DFNS-Logo/Colored/Light | `DFNSLogoColoredLight` |
| progress-bar/w-50 | `ProgressBar` |
| Slot | `Slot` |
| Crypto Icons Round — Cryptocurrencies (44) | `CryptoIconsRoundCryptocurrencies` — alias `CryptoIconRound`, or `CryptoIcon shape="round"` |
| Crypto Icons Square — Networks (47) | `CryptoIconsSquareNetworks` — alias `CryptoIconSquare`, or `CryptoIcon shape="square"` |
| Icon / Circle, Icon / Dot, Icon / Copy, Icon / LoaderCircle | `IconCircle`, `IconDot`, `IconCopy`, `IconLoaderCircle` |
| Menu (Mobile TO-MIGRATE) | `MobileMenu` |
| heroicons micro / mini / outline / solid (1,263 glyphs) + Asset, Attestation, Audit, Auth, Gate, Governance | `Icon` |

**Known gaps.** `CTAPrimary` and `CTASecondary` are the two families the file defines but never lays out — no instance exists to read fill, padding or radius from. They follow the CTA family's type (Inter 400 12/18, Ultra Purple 700) and the system's radius and spacing. Treat their geometry as provisional until someone confirms it against the live site.

## Content fundamentals

Copy is clear, concise, neutral and instructional. No marketing language, no humour, no exclamation marks, no emotional framing, no emoji anywhere.

> **Good:** Transaction submitted successfully **Bad:** Awesome! Your transaction went through!

**Capitalisation.** Title Case for h1/h2/h3 titles, nav items and CTAs — "Whitelisted Domains for Passkeys", "Address Book", "Learn More", "Create Wallet". Sentence case for subtitles, form labels and any full sentence — "Make sure to store your recovery keys in a secure location."

**Actions.** Buttons carry command verbs: Save, Apply, Send, Create Wallet, Invite User, Download Recovery Codes, Export History, Continue. Never a question ("Are you sure?") and never sensory verbs ("See", "View") — though "View All Activities" is the sanctioned exception in the CTA list.

**Numbers.** Comma thousands separators (12,450 · 1,200,000). Financial values at two decimals with trailing zeros removed — `US$1,234.56`, `$1,234.00 → US$1,234`, `$1,238.70 → US$1,238.7`. Percentages at one decimal, trailing zero removed — 23.4%, 23.0% → 23%. Large numbers abbreviated — 1,215,000 → 1.2M; 1,200,000,000 → 1.2B. Negatives take a minus sign: -US$45.23, -3.4%.

**Currency and crypto.** Never a bare `$` for USD — always `US$1,200`, `AU$1,200`. Symbol placement follows local convention: `US$1,200`, `1,200€`. Cryptocurrencies use uppercase three-letter symbols after the number: 12.54 BTC, 1.23 ETH, 1M23 USDC. Exceptions exist (wBTC).

**Dates.** `YYYY-MM-DD HH:MM` — 2024-08-17 17:24 — left-aligned. Relative time is allowed in activity feeds and graphs: Today, Yesterday, Past week, Past 6 month. Graph labels use Jan/Feb/Mar and Mon/Tue/Wed.

**Tables.** Numbers right-aligned, text and dates left-aligned. Long values truncate with an ellipsis. Wallet addresses show first four, middle four and last four characters: `0xd6…34e5…1a85`, `KRAK…2942…0320`. Addresses of 20 characters or fewer are not truncated.

**Forms.** Labels in Sentence case. Required fields marked with `*`. Placeholders are examples, not instructions — `johndoe@gmail.com`, not "Enter your email".

**Tooltips.** Explain concepts, never actions. 240 characters maximum.

**System feedback.** Never leave a cell blank — use `-` or "No data yet". Loading states use the present continuous: "Loading wallet data…", "Fetching transactions…", "Processing transaction…". Success messages are short and past tense: Wallet Created, Policy Updated, Transaction Sent. Errors give an explanation and then the action: "The network rejected the transaction due to insufficient gas. Increase the gas limit and resend the transaction."

**Status labels.** Title Case, at most two words: Pending, Detected, Broadcasted, Completed, Failed, Expired.

**Dialogs.** Title, explanation, primary CTA, secondary CTA — "Delete Wallet?" / "This action cannot be undone." / Cancel | Delete Wallet.

**Punctuation.** Straight single quotes `'`, never curly `" "`. The single ellipsis character `…`, never three periods.

**Accessibility.** WCAG AA contrast on every colour pair.

## Visual foundations

**Colour.** One brand hue and one neutral family carry the whole system. **Ultra Purple** runs 50 → 900; 700 (`rgb(68,37,153)`) is the workhorse — buttons, links, headings, section labels — and 800 (`rgb(45,24,102)`) is the deep end used for the primary gradient's foot and the mobile balance card. **Cold Grey** (100 → 900) does all text and stroke work; 600 (`rgb(87,92,123)`) is the single most-used colour in the file. **Steel Grey** (white → 600) supplies page and elevation surfaces. **Dark Purple** (100 → 900) is the dark-mode substrate. Four system ramps — red, green, yellow, blue at 100/300/500/700/900 — carry every status. Semantic aliases (`--colors-font-*`, `--colors-background-elevation-*`, `--colors-badge-*`, `--colors-states-*`) sit on top and flip under `[data-theme="dark"]`; use those, not the raw ramps. Two named modes also exist, `[data-mode="product"]` and `[data-mode="mode"]`, which tighten spacing and rounding for dense product screens.

**Type.** Suisse Intl is the only typeface in the system — a neutral Swiss grotesque, set tight. Nine weights ship, but the product uses four — Light 300 for large display numerals and org names, Regular 400 for body and balances, Medium 500 for buttons and nav, Semibold 600 for card titles and uppercase section labels. The scale is 8/10/12/14/16/20/24/28/32/36/48; UI density lives at 12, 14 and 16. Line heights are fixed steps (14/18/20/24/32), and headings usually set solid at `line-height: 1`. Tracking is tight and negative where it matters: -0.4px on card titles and 16px headings, -0.98px on the 50px org display. The uppercase section label is the one place tracking goes positive (+0.02em). Addresses, hashes and amounts use `font-variant-numeric: tabular-nums` rather than a monospace face — there is no mono family (see Typefaces).

**Layout.** Everything sits on cards. A card is white, radius 12, a 1px `--colors-border-light` **inset ring** rather than a border, and `0 8px 11px rgba(145,145,170,0.1)` beneath it. Card padding is 24px, internal stack gap 12px, row gap 8px. Page padding is 32px on desktop and 28px on mobile with a 32px stack gap. Nested cards drop to radius 8 on `rgb(252,252,253)` with no shadow. Bento containers go the other way — radius 16–20 on Cold Grey 100. The dashboard sidebar is 264px, fixed, with an inset right hairline; the mobile tab bar is a 380×51 pill floating over content on `0 8px 11px rgba(87,91,123,0.3)`.

**Radii.** Ten steps: 0, 2, 4, 6, 8, 12, 16, 20, 24, full. Buttons, inputs and cards all take **12**. Badges take 6. Avatars and the tab bar go full. The app icon is a squircle at roughly 22% of its box.

**Borders and strokes.** Six widths: 0, 0.5, 1, 1.5, 2, 4. Hairlines are drawn as `box-shadow: inset 0 0 0 1px` so they never affect layout — that is the house style and it is why `--ring-input` and `--ring-card` exist. Only the outline button uses a real 2px border colour (Ultra Purple 700).

**Shadows.** Six named steps on the Shadow page (None, Button Base, Base, Medium, Large, Bold) and a restrained hand in practice. The primary button carries only `inset 0 0 0 1px` Ultra Purple 800 — no drop shadow. Cards get the soft cool-grey Base shadow. The floating menu and dialogs go heavier. The app icon uses two insets — a dark bottom lip and a white top highlight — to read as a physical tile.

**Gradients.** Exactly one gradient idea, used three ways: a top-down white wash at 18% → 0% laid over a bottom-up Ultra Purple 800 → 700 fill. That is the primary button; hover adds a flat 8% white layer on top. The app icon uses the same purple pair top-down. No other gradients, and specifically no blue-violet marketing gradients.

**Transparency and blur.** Sparing. `--colors-background-transparent` is a 50% purple wash; `--alpha-90` is a 10% white (or near-black in dark mode) veil. Dialog scrims are `rgba(23,12,51,0.4)`. The Quickstart illustration uses a blurred mesh behind a white protection gradient — that treatment belongs to marketing illustrations, not product chrome.

**Imagery.** The file contains almost none: one photographic avatar and a handful of illustration meshes. The illustration palette is cool — purple, cold grey, white — with no warmth and no grain. There are no stock photos, no hand-drawn elements and no repeating patterns. When a product screen needs a mark, it uses a crypto asset glyph or an org tile in a flat brand colour, not a picture.

**Motion.** The file specifies no easing curves or durations; its hover and disabled states are static variants. This system therefore defines a deliberately plain default — `--duration-fast` 120ms, `--duration-base` 180ms, `--ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — applied to colour and background only. No bounces, no scale-in, no slide. The one continuous animation is the loader arc.

**Hover states.** Colour, never movement. Primary adds an 8% white layer. Secondary and outline shift their surface to Ultra Purple 50. Ghost darkens to Steel Grey 200. Nav items pick up the Ultra Purple 50 pill. The tertiary CTA reveals a 0.5px rule under its label. **Press states** are not specified in the file — keep the hover treatment or deepen the fill one ramp step; do not shrink or scale.

**Disabled states.** Steel Grey 200 fill, Cold Grey 500 label, Cold Grey 500 icon, cursor `not-allowed`. Outline keeps its border but drops to Cold Grey 300.

## Iconography

**One primary set: Heroicons, at all four of its weights.** The file carries 1,263 heroicons glyphs — `micro` (16px), `mini` (20px), `outline` (24px stroked) and `solid` (24px filled) — as individual components. They are materialised here as path data in `assets/icons/icon-data.js` and rendered by `Icon`:

```jsx
<Icon name="HeroiconsMiniArrowsUpDown" size={20} />
```

Sizing follows the weight: micro at 16, mini at 20, outline and solid at 24. Solid and mini are the product weights; outline appears on larger buttons and the ghost/outline button variants. Icons inherit `currentColor`.

**Six DFNS product marks.** `Asset`, `Attestation`, `Audit`, `Auth`, `Gate` and `Governance` are bespoke multicolour glyphs on a purple rounded-square field, drawn from the Ultra Purple ramp. They are the only icons that carry their own fills, and they name the platform's capabilities. Rendered through the same `Icon` component.

**91 crypto marks.** `CryptoIcon` covers 44 round cryptocurrency marks and 47 square network marks, each in its own brand colours. Use round for an asset (Bitcoin, USDC) and square for a chain (Polygon, Solana). Never recolour them.

**Four UI glyphs from a second family.** `Icon / Circle`, `Icon / Dot`, `Icon / Copy` and `Icon / LoaderCircle` are Lucide-named symbols in the file, and the `.fig` exported them with empty vector geometry. Their path data here is the matching Lucide glyph at the same 24px box and 2px stroke — flagged as a substitution. Replace with the real artwork when it is available.

**No icon font, no PNG icons, no emoji, no unicode glyphs used as icons.** Everything is SVG path data. `…` and `·` appear as punctuation in copy, never as iconography.

## Brand assets

`assets/logo-symbol.svg` (345.046 × 302) and `assets/logo-type.svg` (755.518 × 205.366) compose the lockup inside a 1173 × 302 box, the wordmark offset x 417.482 / y 48.317. Both are single-colour and tinted through CSS masks by `Logotype`; the file sets them in Cold Grey 700. `assets/appicon-symbol.svg` is the symbol as it appears on the app icon — Steel Grey 100 on the purple squircle. Use `Logotype showType={false}` for the symbol alone. Do not redraw, outline, rotate or add effects to either mark.

## Typefaces

**Suisse Intl is the only typeface in this system.** Nine weights plus matching italics, supplied by the brand as `.woff2`. Nothing else is loaded — no web-font CDN request is made at all.

`--font-display` and `--font-mono` remain declared so existing code keeps working, but both now resolve to Suisse Intl. Prefer `--font-core` in new work.

## Themes and modes

```html
<html data-theme="dark">          <!-- flips every semantic colour -->
<html data-mode="product">        <!-- tightens spacing/rounding for dense screens -->
```

Both are declared in `tokens/fig-tokens.css` exactly as the Figma collections define them.
