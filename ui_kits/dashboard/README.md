# DFNS Dashboard — UI kit

A click-through recreation of app.dfns.co, composed entirely from this design system's primitives.

## Files
| File | Contents |
| --- | --- |
| `Shell.jsx` | `Sidebar` (flat top-level items, two collapsible groups, connected-integrations list, account row), `TopBar` (org line, search, notifications, avatar), `Card`, `SectionLabel` |
| `Screens.jsx` | `Overview`, `Wallets`, `Transfers`, `Policies` (with pending approvals), `Settings` (categorised settings list), `CreateWalletDialog` |
| `App.jsx` | Routing between views, the create-wallet flow, the loading state and the success toast |

## Sidebar
Reworked to match a supplied product screenshot rather than the Quickstart frame's invented layout: `Dashboard`, `Activity` (badged 3, routes to the Transfers screen) and `Wallets` sit flat; `Operations` (Wallets, Staking, Swaps, Allocations, Smart Contract, Payouts) and `Organization` (Users, Policies badged 3, Roles, Address Book, Billing) are collapsible groups, open by default; `Integrations` and `Settings` sit below them. `Swaps` is rendered disabled (Cold Grey 500, no click). Only `Wallets`, `Policies` and `Settings` map to a real screen — every other destination falls through to the generic "not designed" placeholder in `App.jsx`. A small `INTEGRATIONS` list (Uniswap, Coinbase as letter-mark tiles) and an account row (`Robert` / `robert@dfns.com`) sit below the nav; there is no org selector in this version.

## What is interactive
- Sidebar navigation across every item above; `Operations` and `Organization` expand/collapse independently.
- **Create Wallet** opens a dialog (Title, explanation, Cancel + Create Wallet) and confirms with "Wallet Created".
- **Approve** on a pending approval swaps the row's actions for an Approved badge and raises "Approval Recorded".
- Opening Transfers (via `Wallets` sidebar item is separate; reached through `Activity` or Overview's "View All Activities") shows "Fetching transactions…" with the loader before the table resolves.

## Settings
Not designed in the source Figma file, so it is invented — grouped into three categories the same way Qonto's settings index groups by concern rather than listing everything flat: **Security** (WebAuthn, Single Sign-On, Manage Tokens), **Developers** (Webhooks, Personal Access Tokens, Fee Sponsorship, Canton Validators) and **Compliance** (Audit Logs). Each category is a `CardHeader` (title + description) above a `Card` of hairline-separated rows — icon tile, title, description and a chevron — reusing the same row anatomy as the data tables elsewhere in this kit rather than introducing a new pattern. `WebAuthn` and `Manage Tokens` drill into a detail screen (`SettingsBackLink` back to the index); the rest are visual-only.

**Manage Tokens** lists an organisation's custom tokens — Token (name + symbol), Network, Contract Address, Price, Verified, Actions. Every token is treated as verified: the column shows a green `HeroiconsMiniCheckCircle`, there is no Pending state or Verify step. **Add Token** opens a dialog (Name, Symbol, Network, Contract address, Price) that inserts a new row, already checked. Each row's Actions cell is a `RowActionsMenu` — an ellipsis (`HeroiconsMiniEllipsisHorizontal`) that opens a small popover (closes on outside click) with **Edit** (reopens the same dialog pre-filled, title becomes "Edit Token", button becomes "Save Changes") and **Delete**. No real validation — it is a click-through list, not a working token registry.

## Source of the visual treatment
Card geometry, the uppercase purple section label, the 24px card padding and the balance type come from the **Quickstart Guide** frame (node `890:8772`), which is the only desktop product surface the file contains. Sidebar and top-bar layout are assembled from that frame's parts plus the mobile screen's header — the file has no desktop navigation frame, so that arrangement is the one invention here and is called out in `readme.md`.

## Deliberately blank
Users renders an empty state — it is not designed in the source file.

## Abbreviations
Tables show four or five rows standing in for full datasets. Numbers follow the content rules: commas, two decimals trimmed of trailing zeros, `US$` never bare `$`, crypto symbols after the number, `YYYY-MM-DD HH:MM` timestamps left-aligned, numerals right-aligned.
