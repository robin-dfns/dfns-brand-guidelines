# DFNS Mobile App — UI kit

A recreation of the single mobile frame the Figma file carries: **iPhone 16 Pro Max - 1** (node `110:120`) on the page the file names `Mobile TO-MIGRATE`.

## Screens
| File | Source |
| --- | --- |
| `MobileApp.jsx` | node `110:120` — header, org line, hero balance card, quick actions, recent transactions, floating tab bar (node `1287:71`) |

## What is interactive
- Tab bar switches between Dashboard, Transfers, Approvals and Menu.
- The eye toggle masks the balance.
- Quick actions raise a toast; no flows behind them are designed in the source.

## Deliberately blank
Transfers, Approvals and Menu have no designs in the file. They render an empty state ("No data yet") rather than invented screens.

## Notes on fidelity
- The source sets this screen's labels in **Inter**. Inter is not part of this design system, so the recreation uses Suisse Intl at the same sizes and weights. The Inter usage is one reason the page is marked TO-MIGRATE.
- The 440x956 frame, 28px page padding, 32px stack gap, 136px balance card at radius 16 on Ultra Purple 800, 56px radius-16 action tiles and 68px transaction rows are all transcribed values.
- Transaction row leading tiles use `CryptoIcon`; the source shows plain tinted squares with no glyph, so the marks are an addition for legibility.
