/* The four dashboard views. Content is abbreviated (a handful of rows standing in for many)
   but every treatment comes from the design system. */

const { Button, Badge, CardHeader, Icon, IconCopy, IconInfoTooltip, IconLoaderCircle, CryptoIcon, Input, CTATertiary } = window.DFNSDesignSystem_86e15f;
const { Card, SectionLabel } = window;

const num = { fontVariantNumeric: 'tabular-nums' };
const th = { font: 'var(--weight-medium) var(--text-s)/var(--line-base) var(--font-core)', color: 'var(--colors-cold-grey-600)', padding: '0 0 var(--space-300)', textAlign: 'left', whiteSpace: 'nowrap' };
const td = { font: 'var(--weight-base) var(--text-base)/var(--line-m) var(--font-core)', color: 'var(--colors-cold-grey-900)', padding: 'var(--space-300) 0', borderTop: '1px solid var(--colors-border-light)' };

const WALLETS = [
  { name: 'Northwind Treasury', symbol: 'Bitcoin', network: 'Bitcoin', asset: '12.54 BTC', value: 'US$1,215,400', address: '0xd6…34e5…1a85', status: ['green', 'Active'] },
  { name: 'Ops Hot Wallet', symbol: 'Ethereum', network: 'Ethereum', asset: '184.2 ETH', value: 'US$612,800', address: '0x91…7c02…44b9', status: ['green', 'Active'] },
  { name: 'Settlement USDC', symbol: 'USDCoin', network: 'Polygon', asset: '1.2M USDC', value: 'US$1,200,000', address: '0x4f…9ad1…0c73', status: ['yellow', 'Pending'] },
  { name: 'Payroll Escrow', symbol: 'Solana', network: 'Solana', asset: '8,940 SOL', value: 'US$1,171,800', address: 'KRAK…2942…0320', status: ['grey', 'Archived'] },
];

const TRANSFERS = [
  { date: '2024-08-17 17:24', wallet: 'Northwind Treasury', to: '0xd6…34e5…1a85', amount: '-0.85 BTC', fiat: '-US$82,340', status: ['green', 'Completed'] },
  { date: '2024-08-17 14:02', wallet: 'Settlement USDC', to: '0x4f…9ad1…0c73', amount: '250,000 USDC', fiat: 'US$250,000', status: ['blue', 'Broadcasted'] },
  { date: '2024-08-17 09:41', wallet: 'Ops Hot Wallet', to: '0x91…7c02…44b9', amount: '-12.4 ETH', fiat: '-US$41,200', status: ['yellow', 'Pending'] },
  { date: '2024-08-16 22:15', wallet: 'Payroll Escrow', to: 'KRAK…2942…0320', amount: '-1,200 SOL', fiat: '-US$157,200', status: ['red', 'Failed'] },
  { date: '2024-08-16 18:30', wallet: 'Northwind Treasury', to: '0xab…11f4…88d0', amount: '2.05 BTC', fiat: 'US$198,600', status: ['green', 'Completed'] },
];

const POLICIES = [
  { name: 'Transfer Approval Over US$100,000', scope: 'All wallets', rule: 'Two of four approvers', status: ['green', 'Active'] },
  { name: 'Allowlist Only', scope: 'Settlement USDC', rule: 'Address book destinations', status: ['green', 'Active'] },
  { name: 'Daily Outbound Cap', scope: 'Ops Hot Wallet', rule: 'US$500,000 per day', status: ['yellow', 'Pending'] },
];

const APPROVALS = [
  { wallet: 'Northwind Treasury', amount: '0.85 BTC', requester: 'Jane Smith', age: 'Today', policy: 'Transfer Approval Over US$100,000' },
  { wallet: 'Settlement USDC', amount: '250,000 USDC', requester: 'Marc Dupont', age: 'Yesterday', policy: 'Allowlist Only' },
];

function Metric({ label, value, delta, tooltip }) {
  return (
    <Card style={{ flex: 1, gap: 'var(--space-300)' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)', font: 'var(--weight-medium) var(--text-m)/1 var(--font-core)', letterSpacing: 'var(--tracking-tight)', color: 'var(--colors-dark-purple-900)' }}>
        {label}{tooltip && <IconInfoTooltip content={tooltip} />}
      </span>
      <span style={{ ...num, font: 'var(--weight-base) var(--text-4xl)/1 var(--font-core)', color: 'var(--colors-dark-purple-900)' }}>{value}</span>
      {delta && <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)' }}>
        <Badge color={delta.startsWith('-') ? 'red' : 'green'}>{delta}</Badge>
        <span style={{ font: 'var(--weight-base) var(--text-s)/1 var(--font-core)', color: 'var(--colors-cold-grey-600)' }}>Past week</span>
      </span>}
    </Card>
  );
}

function Overview({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-600)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-400)' }}>
        <Metric label="Total Balance" value="US$4,200,000" delta="+2.4%" tooltip="The combined fiat value of every asset held across the wallets in this organisation." />
        <Metric label="Wallets" value="24" />
        <Metric label="Pending Approvals" value="2" />
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-400)', alignItems: 'flex-start' }}>
        <Card style={{ flex: 1 }}>
          <CardHeader title="Recent Transfers" description="Activity across all wallets in this organisation."
            trailing={<Button variant="ghost" size="sm" onClick={() => onNavigate('Transfers')}>View All Activities</Button>} />
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Date</th><th style={th}>Wallet</th><th style={{ ...th, textAlign: 'right' }}>Amount</th><th style={{ ...th, textAlign: 'right' }}>Status</th></tr></thead>
            <tbody>{TRANSFERS.slice(0, 4).map(t => (
              <tr key={t.date}>
                <td style={td}>{t.date}</td>
                <td style={{ ...td, color: 'var(--colors-cold-grey-700)' }}>{t.wallet}</td>
                <td style={{ ...td, ...num, textAlign: 'right' }}>{t.amount}</td>
                <td style={{ ...td, textAlign: 'right' }}><Badge color={t.status[0]}>{t.status[1]}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
        <Card style={{ width: 320, flex: 'none' }}>
          <CardHeader title="Get to Know DFNS" description="Complete the onboarding to learn how to use DFNS." />
          <div style={{ padding: 'var(--space-500)', borderRadius: 'var(--radius-large)', background: 'rgb(252,252,253)', boxShadow: 'var(--ring-card)', display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
            <span style={{ font: 'var(--weight-base) var(--text-xl)/1.05 var(--font-core)', letterSpacing: 'var(--tracking-tight)', color: 'var(--colors-dark-purple-900)' }}>New Wallet</span>
            <span style={{ font: 'var(--weight-base) var(--text-base)/var(--line-l) var(--font-core)', color: 'var(--colors-cold-grey-600)' }}>Take your first step with DFNS by creating a wallet.</span>
            <div style={{ display: 'flex', gap: 'var(--space-300)' }}>
              <Button leadingIcon={<Icon name="HeroiconsMiniWallet" size={16} />} onClick={() => onNavigate('Wallets')}>Create Wallet</Button>
              <Button variant="secondary" trailingIcon={<Icon name="HeroiconsMiniArrowTopRight" size={16} />}>Read Docs</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Wallets({ onCreate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-400)' }}>
        <CardHeader title="Wallets" description="24 wallets across 7 networks." />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-300)' }}>
          <Button variant="outline" leadingIcon={<Icon name="HeroiconsMiniFunnel" size={16} />}>Filter</Button>
          <Button leadingIcon={<Icon name="HeroiconsMiniPlus" size={16} />} onClick={onCreate}>Create Wallet</Button>
        </div>
      </div>
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Wallet</th><th style={th}>Network</th><th style={th}>Address</th><th style={{ ...th, textAlign: 'right' }}>Asset</th><th style={{ ...th, textAlign: 'right' }}>Value</th><th style={{ ...th, textAlign: 'right' }}>Status</th></tr></thead>
          <tbody>{WALLETS.map(w => (
            <tr key={w.name}>
              <td style={td}><span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-250)' }}><CryptoIcon symbol={w.symbol} size={24} />{w.name}</span></td>
              <td style={td}><span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)', color: 'var(--colors-cold-grey-700)' }}><CryptoIcon symbol={w.symbol} shape="square" size={20} />{w.network}</span></td>
              <td style={td}><span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-s)', color: 'var(--colors-cold-grey-700)' }}>{w.address}<IconCopy size={16} style={{ color: 'var(--colors-cold-grey-500)' }} /></span></td>
              <td style={{ ...td, ...num, textAlign: 'right' }}>{w.asset}</td>
              <td style={{ ...td, ...num, textAlign: 'right' }}>{w.value}</td>
              <td style={{ ...td, textAlign: 'right' }}><Badge color={w.status[0]}>{w.status[1]}</Badge></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

function Transfers({ loading }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-400)' }}>
        <CardHeader title="Transaction History" description="Every inbound and outbound transfer, newest first." />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-300)' }}>
          <Button variant="ghost" leadingIcon={<Icon name="HeroiconsMiniArrowDownTray" size={16} />}>Export History</Button>
          <Button leadingIcon={<Icon name="HeroiconsMiniArrowUpRight" size={16} />}>Send</Button>
        </div>
      </div>
      <Card>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-250)', padding: 'var(--space-600) 0', color: 'var(--colors-cold-grey-600)' }}>
            <IconLoaderCircle size={20} style={{ color: 'var(--colors-ultra-purple-500)' }} />
            <span style={{ font: 'var(--weight-base) var(--text-base)/1 var(--font-core)' }}>Fetching transactions…</span>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Date</th><th style={th}>Wallet</th><th style={th}>Destination</th><th style={{ ...th, textAlign: 'right' }}>Amount</th><th style={{ ...th, textAlign: 'right' }}>Value</th><th style={{ ...th, textAlign: 'right' }}>Status</th></tr></thead>
            <tbody>{TRANSFERS.map(t => (
              <tr key={t.date}>
                <td style={td}>{t.date}</td>
                <td style={{ ...td, color: 'var(--colors-cold-grey-700)' }}>{t.wallet}</td>
                <td style={{ ...td, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-s)', color: 'var(--colors-cold-grey-700)' }}>{t.to}</td>
                <td style={{ ...td, ...num, textAlign: 'right' }}>{t.amount}</td>
                <td style={{ ...td, ...num, textAlign: 'right', color: t.fiat.startsWith('-') ? 'var(--colors-error-text)' : 'var(--colors-success-text)' }}>{t.fiat}</td>
                <td style={{ ...td, textAlign: 'right' }}><Badge color={t.status[0]}>{t.status[1]}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </Card>
    </div>
  );
}

function Policies({ onApprove, approved }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-600)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-400)' }}>
          <CardHeader title="Policies" description="Rules evaluated before any transfer leaves a wallet." />
          <Button style={{ marginLeft: 'auto' }} leadingIcon={<Icon name="HeroiconsMiniPlus" size={16} />}>Create Policy</Button>
        </div>
        <Card>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th style={th}>Policy</th><th style={th}>Scope</th><th style={th}>Rule</th><th style={{ ...th, textAlign: 'right' }}>Status</th></tr></thead>
            <tbody>{POLICIES.map(p => (
              <tr key={p.name}>
                <td style={td}><span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-250)' }}><Icon name="Governance" size={22} />{p.name}</span></td>
                <td style={{ ...td, color: 'var(--colors-cold-grey-700)' }}>{p.scope}</td>
                <td style={{ ...td, color: 'var(--colors-cold-grey-700)' }}>{p.rule}</td>
                <td style={{ ...td, textAlign: 'right' }}><Badge color={p.status[0]}>{p.status[1]}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}>
        <SectionLabel>Pending Approvals</SectionLabel>
        <div style={{ display: 'flex', gap: 'var(--space-400)' }}>
          {APPROVALS.map(a => (
            <Card key={a.wallet} style={{ flex: 1 }}>
              <CardHeader title={a.amount + ' from ' + a.wallet} description={a.policy + ' · Requested by ' + a.requester + ' · ' + a.age} />
              {approved.includes(a.wallet) ? (
                <Badge color="green">Approved</Badge>
              ) : (
                <div style={{ display: 'flex', gap: 'var(--space-300)' }}>
                  <Button size="sm" onClick={() => onApprove(a.wallet)}>Approve</Button>
                  <Button size="sm" variant="ghost">Reject</Button>
                  <CTATertiary style={{ alignSelf: 'center' }}>Review Policies Approvals</CTATertiary>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const SETTINGS_CATEGORIES = [
  {
    label: 'Security',
    description: 'Control how members authenticate into this organisation.',
    items: [
      { icon: 'HeroiconsMiniFingerPrint', title: 'WebAuthn', description: 'Require a hardware key or platform passkey to sign in.', view: 'WebAuthn' },
      { icon: 'HeroiconsMiniIdentification', title: 'Single Sign-On', description: 'Let members sign in through your identity provider.' },
      { icon: 'HeroiconsMiniLockClosed', title: 'Manage Tokens', description: 'Add, price and verify the custom tokens this organisation supports.', view: 'ManageTokens' },
    ],
  },
  {
    label: 'Developers',
    description: 'Programmatic access to this organisation.',
    items: [
      { icon: 'HeroiconsMiniBolt', title: 'Webhooks', description: 'Receive events for wallets, transfers and policies.' },
      { icon: 'HeroiconsMiniKey', title: 'Personal Access Tokens', description: 'Generate tokens to authenticate API requests.' },
      { icon: 'HeroiconsMiniReceiptPercent', title: 'Fee Sponsorship', description: 'Cover network fees on behalf of your wallets.' },
      { icon: 'HeroiconsMiniServerStack', title: 'Canton Validators', description: 'Manage the validator nodes securing your Canton network.' },
    ],
  },
  {
    label: 'Compliance',
    description: 'Records kept for review and reporting.',
    items: [
      { icon: 'HeroiconsMiniClipboardDocumentList', title: 'Audit Logs', description: 'Every action taken across this organisation, exportable for review.' },
    ],
  },
];

function SettingsRow({ icon, title, description, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-300)', width: '100%',
      padding: 'var(--space-400) 0', border: 'none', borderTop: '1px solid var(--colors-border-light)',
      background: 'none', cursor: onClick ? 'pointer' : 'default', textAlign: 'left', font: 'inherit',
    }}>
      <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, flex: 'none', borderRadius: 'var(--radius-base)', background: 'var(--colors-ultra-purple-50)', color: 'var(--colors-ultra-purple-700)' }}>
        <Icon name={icon} size={20} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ font: 'var(--weight-medium) var(--text-base)/var(--line-m) var(--font-core)', color: 'var(--colors-dark-purple-900)' }}>{title}</span>
        <span style={{ font: 'var(--weight-base) var(--text-s)/var(--line-base) var(--font-core)', color: 'var(--colors-cold-grey-600)' }}>{description}</span>
      </span>
      <Icon name="HeroiconsMiniChevronRight" size={16} style={{ marginLeft: 'auto', flex: 'none', color: 'var(--colors-cold-grey-500)' }} />
    </button>
  );
}

function SettingsCategory({ label, description, items, onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}>
      <CardHeader title={label} description={description} />
      <Card style={{ gap: 0 }}>{items.map(item => (
        <SettingsRow key={item.title} {...item} onClick={item.view ? () => onNavigate(item.view) : undefined} />
      ))}</Card>
    </div>
  );
}

const PASSKEY_DOMAINS = [
  { rp: 'app.dfns.co', origin: 'https://app.dfns.co' },
  { rp: 'northwind.dfns.co', origin: 'https://northwind.dfns.co' },
  { rp: 'staging.dfns.co', origin: 'https://staging.dfns.co' },
  { rp: 'localhost', origin: 'http://localhost:3000' },
];

function SettingsBackLink({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-150)', alignSelf: 'flex-start',
      border: 'none', background: 'none', cursor: 'pointer', padding: 0,
      font: 'var(--weight-medium) var(--text-s)/1 var(--font-core)', color: 'var(--colors-cold-grey-600)',
    }}><Icon name="HeroiconsMiniArrowLeft" size={16} />{children}</button>
  );
}

function WebAuthnDetail({ onBack }) {
  const [domains, setDomains] = React.useState(PASSKEY_DOMAINS);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <SettingsBackLink onClick={onBack}>Settings</SettingsBackLink>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-400)' }}>
        <CardHeader title="WebAuthn" description="Domains allowed to register and authenticate passkeys for this organisation." />
        <Button style={{ marginLeft: 'auto' }} leadingIcon={<Icon name="HeroiconsMiniPlus" size={16} />}>Add Domain</Button>
      </div>
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Relying Party ID</th><th style={th}>Origin</th><th style={{ ...th, textAlign: 'right' }}>Actions</th></tr></thead>
          <tbody>{domains.map(d => (
            <tr key={d.rp}>
              <td style={td}>{d.rp}</td>
              <td style={{ ...td, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-s)', color: 'var(--colors-cold-grey-700)' }}>{d.origin}</td>
              <td style={{ ...td, textAlign: 'right' }}>
                <div style={{ display: 'flex', gap: 'var(--space-200)', justifyContent: 'flex-end' }}>
                  <Button variant="ghost" size="icon" aria-label={'Edit ' + d.rp} leadingIcon={<Icon name="HeroiconsMiniPencil" size={16} />} />
                  <Button variant="ghost" size="icon" aria-label={'Delete ' + d.rp}
                    onClick={() => setDomains(domains.filter(x => x.rp !== d.rp))}
                    leadingIcon={<Icon name="HeroiconsMiniTrash" size={16} style={{ color: 'var(--colors-error-text)' }} />} />
                </div>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

const INITIAL_TOKENS = [
  { id: 1, name: 'Northwind Points', symbol: 'NWP', network: 'Polygon', address: '0x4f…9ad1…0c73', price: 'US$0.42' },
  { id: 2, name: 'Treasury Share', symbol: 'TRS', network: 'Ethereum', address: '0x91…7c02…44b9', price: 'US$12.5' },
  { id: 3, name: 'Settlement Credit', symbol: 'STLC', network: 'Solana', address: 'KRAK…2942…0320', price: 'US$1' },
];

function TokenDialog({ open, initial, onClose, onSubmit }) {
  const [form, setForm] = React.useState({ name: '', symbol: '', network: '', address: '', price: '' });
  React.useEffect(() => { if (open) setForm(initial || { name: '', symbol: '', network: '', address: '', price: '' }); }, [open, initial]);
  if (!open) return null;
  const isEdit = !!initial;
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(23,12,51,0.4)', display: 'grid', placeItems: 'center', zIndex: 40 }}>
      <div style={{ width: 440, padding: 'var(--space-600)', borderRadius: 'var(--radius-xl)', background: 'var(--colors-steel-grey-white)', boxShadow: 'var(--shadow-bold)', display: 'flex', flexDirection: 'column', gap: 'var(--space-500)' }}>
        <CardHeader title={isEdit ? 'Edit Token' : 'Add Token'}
          description={isEdit ? 'Update this token’s details.' : 'Register a custom token for wallets in this organisation.'} />
        <Input label="Name" required placeholder="Northwind Points" value={form.name} onChange={set('name')} />
        <Input label="Symbol" required placeholder="NWP" value={form.symbol} onChange={set('symbol')} />
        <Input label="Network" placeholder="Polygon" trailingIcon={<Icon name="HeroiconsMiniChevronUpDown" size={16} />} value={form.network} onChange={set('network')} />
        <Input label="Contract address" placeholder="0x4f…9ad1…0c73" value={form.address} onChange={set('address')} />
        <Input label="Price" placeholder="US$0.42" value={form.price} onChange={set('price')} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-300)' }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={() => { onSubmit(form); onClose(); }}>{isEdit ? 'Save Changes' : 'Add Token'}</Button>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, tone, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-200)', width: '100%',
      padding: 'var(--space-200) var(--space-250)', border: 'none', borderRadius: 'var(--radius-base)',
      background: hover ? 'var(--colors-steel-grey-200)' : 'transparent', cursor: 'pointer', textAlign: 'left',
      font: 'var(--weight-base) var(--text-base)/var(--line-m) var(--font-core)',
      color: tone === 'danger' ? 'var(--colors-error-text)' : 'var(--colors-cold-grey-700)',
    }}>
      <Icon name={icon} size={16} />{label}
    </button>
  );
}

function RowActionsMenu({ label, onEdit, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <Button variant="ghost" size="icon" aria-label={label + ' actions'} onClick={() => setOpen(o => !o)}
        leadingIcon={<Icon name="HeroiconsMiniEllipsisHorizontal" size={16} />} />
      {open && (
        <div style={{
          position: 'absolute', right: 0, top: 'calc(100% + var(--space-100))', zIndex: 10, width: 160,
          background: 'var(--colors-steel-grey-white)', borderRadius: 'var(--radius-large)',
          boxShadow: 'var(--ring-card), var(--shadow-large)', padding: 'var(--space-100)',
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          <MenuItem icon="HeroiconsMiniPencil" label="Edit" onClick={() => { setOpen(false); onEdit(); }} />
          <MenuItem icon="HeroiconsMiniTrash" label="Delete" tone="danger" onClick={() => { setOpen(false); onDelete(); }} />
        </div>
      )}
    </div>
  );
}

function ManageTokensDetail({ onBack }) {
  const [tokens, setTokens] = React.useState(INITIAL_TOKENS);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(null);
  const openAdd = () => { setEditing(null); setDialogOpen(true); };
  const openEdit = t => { setEditing(t); setDialogOpen(true); };
  const submit = form => {
    if (editing) {
      setTokens(ts => ts.map(x => x.id === editing.id ? {
        ...x, name: form.name || x.name, symbol: (form.symbol || x.symbol).toUpperCase(),
        network: form.network || x.network, address: form.address || x.address, price: form.price || x.price,
      } : x));
    } else {
      setTokens(ts => [...ts, {
        id: Date.now(), name: form.name || 'Untitled Token', symbol: (form.symbol || '—').toUpperCase(),
        network: form.network || '—', address: form.address || '—', price: form.price || '—',
      }]);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <SettingsBackLink onClick={onBack}>Settings</SettingsBackLink>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-400)' }}>
        <CardHeader title="Manage Tokens" description="Custom tokens available to wallets in this organisation." />
        <Button style={{ marginLeft: 'auto' }} leadingIcon={<Icon name="HeroiconsMiniPlus" size={16} />} onClick={openAdd}>Add Token</Button>
      </div>
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr>
            <th style={th}>Token</th><th style={th}>Network</th><th style={th}>Contract Address</th>
            <th style={{ ...th, textAlign: 'right' }}>Price</th><th style={{ ...th, textAlign: 'right' }}>Verified</th>
            <th style={{ ...th, textAlign: 'right' }}>Actions</th>
          </tr></thead>
          <tbody>{tokens.map(t => (
            <tr key={t.id}>
              <td style={td}>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>{t.name}</span>
                  <span style={{ font: 'var(--weight-base) var(--text-s)/var(--line-base) var(--font-core)', color: 'var(--colors-cold-grey-600)' }}>{t.symbol}</span>
                </span>
              </td>
              <td style={{ ...td, color: 'var(--colors-cold-grey-700)' }}>{t.network}</td>
              <td style={{ ...td, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-s)', color: 'var(--colors-cold-grey-700)' }}>{t.address}</td>
              <td style={{ ...td, ...num, textAlign: 'right' }}>{t.price}</td>
              <td style={{ ...td, textAlign: 'right' }}>
                <Icon name="HeroiconsMiniCheckCircle" size={20} aria-label="Verified" style={{ color: 'var(--colors-success-base)' }} />
              </td>
              <td style={{ ...td, textAlign: 'right' }}>
                <RowActionsMenu label={t.name} onEdit={() => openEdit(t)} onDelete={() => setTokens(ts => ts.filter(x => x.id !== t.id))} />
              </td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
      <TokenDialog open={dialogOpen} initial={editing} onClose={() => setDialogOpen(false)} onSubmit={submit} />
    </div>
  );
}

function Settings() {
  const [view, setView] = React.useState('index');
  if (view === 'WebAuthn') return <WebAuthnDetail onBack={() => setView('index')} />;
  if (view === 'ManageTokens') return <ManageTokensDetail onBack={() => setView('index')} />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-600)' }}>
      <CardHeader title="Settings" description="Manage authentication, developer access and network configuration for this organisation." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-500)' }}>
        {SETTINGS_CATEGORIES.map(cat => <SettingsCategory key={cat.label} {...cat} onNavigate={setView} />)}
      </div>
    </div>
  );
}

function CreateWalletDialog({ open, onClose, onCreate }) {
  const [name, setName] = React.useState('');
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(23,12,51,0.4)', display: 'grid', placeItems: 'center', zIndex: 40 }}>
      <div style={{ width: 440, padding: 'var(--space-600)', borderRadius: 'var(--radius-xl)', background: 'var(--colors-steel-grey-white)', boxShadow: 'var(--shadow-bold)', display: 'flex', flexDirection: 'column', gap: 'var(--space-500)' }}>
        <CardHeader title="Create Wallet" description="Choose a name and network. The wallet's keys are generated inside DFNS." />
        <Input label="Wallet name" required placeholder="Northwind Treasury" value={name} onChange={e => setName(e.target.value)} />
        <Input label="Network" placeholder="Bitcoin" trailingIcon={<Icon name="HeroiconsMiniChevronUpDown" size={16} />} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-300)' }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={() => { onCreate(name || 'Northwind Treasury'); onClose(); }}>Create Wallet</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Overview, Wallets, Transfers, Policies, Settings, CreateWalletDialog });
