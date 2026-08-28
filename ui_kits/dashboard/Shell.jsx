/* DFNS Dashboard shell — sidebar + top bar. Composed from the design-system primitives.
   Card treatment (white, radius 12, --ring-card, --shadow-base), the uppercase section label
   and the 24px card padding are transcribed from the Quickstart Guide frame (node 890:8772). */

const { Logotype, Icon, IconCopy, Input, Button, Badge } = window.DFNSDesignSystem_86e15f;

const NAV_TOP = [
  { label: 'Dashboard', view: 'Dashboard', icon: 'HeroiconsMiniHome' },
  { label: 'Activity', view: 'Transfers', icon: 'HeroiconsMiniPresentationChartLine', badge: 3 },
  { label: 'Wallets', view: 'Wallets', icon: 'HeroiconsMiniWallet' },
];

const NAV_GROUPS = [
  {
    key: 'Operations', label: 'Operations', icon: 'HeroiconsMiniBookOpen',
    items: [
      { label: 'Wallets', view: 'Wallets' },
      { label: 'Staking', view: 'Staking' },
      { label: 'Swaps', view: 'Swaps', disabled: true },
      { label: 'Allocations', view: 'Allocations' },
      { label: 'Smart Contract', view: 'Smart Contract' },
      { label: 'Payouts', view: 'Payouts' },
    ],
  },
  {
    key: 'Organization', label: 'Organization', icon: 'HeroiconsMiniBookOpen',
    items: [
      { label: 'Users', view: 'Users' },
      { label: 'Policies', view: 'Policies', badge: 3 },
      { label: 'Roles', view: 'Roles' },
      { label: 'Address Book', view: 'Address Book' },
      { label: 'Billing', view: 'Billing' },
    ],
  },
];

const NAV_BOTTOM = [
  { label: 'Integrations', view: 'Integrations', icon: 'HeroiconsMiniLink' },
  { label: 'Settings', view: 'Settings', icon: 'HeroiconsMiniLink' },
];

const CONNECTED_INTEGRATIONS = [
  { label: 'Uniswap', mark: 'U' },
  { label: 'Coinbase', mark: 'C' },
];

function NavRow({ icon, label, active, badge, disabled, indent, trailing, onClick }) {
  return (
    <button type="button" onClick={disabled ? undefined : onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-250)', width: '100%',
      height: 'var(--control-h-9)', padding: `0 var(--space-300) 0 ${indent ? 'calc(var(--space-300) + 30px)' : 'var(--space-300)'}`,
      border: 'none', borderRadius: 'var(--radius-large)', cursor: disabled ? 'default' : 'pointer', textAlign: 'left',
      background: active ? 'var(--colors-ultra-purple-50)' : 'transparent',
      color: disabled ? 'var(--colors-cold-grey-500)' : active ? 'var(--colors-ultra-purple-700)' : 'var(--colors-cold-grey-600)',
      font: `var(--weight-medium) var(--text-base)/var(--line-m) var(--font-core)`,
    }}>
      {icon && <Icon name={icon} size={20} />}
      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      {badge != null && <Badge>{badge}</Badge>}
      {trailing}
    </button>
  );
}

function NavGroup({ icon, label, items, active, onNavigate, open, onToggle }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-50)' }}>
      <NavRow icon={icon} label={label} onClick={onToggle}
        trailing={<Icon name={open ? 'HeroiconsMiniChevronDown' : 'HeroiconsMiniChevronRight'} size={16} />} />
      {open && items.map(it => (
        <NavRow key={it.label} label={it.label} indent disabled={it.disabled} badge={it.badge}
          active={it.view === active} onClick={() => onNavigate(it.view)} />
      ))}
    </div>
  );
}

function IntegrationRow({ label, mark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-250)',
      height: 'var(--control-h-9)', padding: '0 var(--space-300)',
      font: `var(--weight-medium) var(--text-base)/var(--line-m) var(--font-core)`, color: 'var(--colors-cold-grey-600)',
    }}>
      <span style={{
        display: 'grid', placeItems: 'center', width: 20, height: 20, flex: 'none',
        borderRadius: 'var(--radius-base)', background: 'var(--colors-cold-grey-900)', color: 'var(--colors-steel-grey-white)',
        font: `var(--weight-bold) var(--text-xs)/1 var(--font-core)`,
      }}>{mark}</span>
      {label}
    </div>
  );
}

function Sidebar({ active, onNavigate }) {
  const [open, setOpen] = React.useState({ Operations: true, Organization: true });
  const toggle = key => setOpen(o => ({ ...o, [key]: !o[key] }));
  return (
    <aside style={{
      width: 264, flex: 'none', alignSelf: 'stretch',
      background: 'var(--colors-steel-grey-white)',
      boxShadow: 'inset -1px 0 0 var(--colors-border-light)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-500)', padding: 'var(--space-500)',
    }}>
      <Logotype height={26} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-50)' }}>
        {NAV_TOP.map(n => (
          <NavRow key={n.label} icon={n.icon} label={n.label} badge={n.badge} active={n.view === active} onClick={() => onNavigate(n.view)} />
        ))}
        {NAV_GROUPS.map(g => (
          <NavGroup key={g.key} icon={g.icon} label={g.label} items={g.items} active={active}
            onNavigate={onNavigate} open={open[g.key]} onToggle={() => toggle(g.key)} />
        ))}
        {NAV_BOTTOM.map(n => (
          <NavRow key={n.label} icon={n.icon} label={n.label} active={n.view === active} onClick={() => onNavigate(n.view)} />
        ))}
      </nav>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-50)' }}>
        <span style={{
          padding: '0 var(--space-300)', font: 'var(--weight-medium) var(--text-xs)/1.6 var(--font-core)',
          letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--colors-cold-grey-500)',
        }}>Integrations</span>
        {CONNECTED_INTEGRATIONS.map(c => <IntegrationRow key={c.label} {...c} />)}
      </div>
      <button type="button" style={{
        marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-250)',
        border: 'none', background: 'none', cursor: 'pointer', padding: 'var(--space-200) var(--space-300)', textAlign: 'left',
      }}>
        <span style={{
          display: 'grid', placeItems: 'center', width: 32, height: 32, flex: 'none', borderRadius: 'var(--radius-full)',
          background: 'var(--colors-ultra-purple-700)', color: 'var(--colors-steel-grey-white)',
          font: `var(--weight-bold) var(--text-s)/1 var(--font-core)`,
        }}>R</span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0, overflow: 'hidden' }}>
          <span style={{ font: 'var(--weight-medium) var(--text-s)/1.3 var(--font-core)', color: 'var(--colors-dark-purple-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Robert</span>
          <span style={{ font: 'var(--weight-base) var(--text-xs)/1.3 var(--font-core)', color: 'var(--colors-cold-grey-500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>robert@dfns.com</span>
        </span>
        <Icon name="HeroiconsMiniChevronUpDown" size={16} style={{ marginLeft: 'auto', flex: 'none', color: 'var(--colors-cold-grey-500)' }} />
      </button>
    </aside>
  );
}

function TopBar({ title, onSearch }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-400)',
      padding: 'var(--space-400) var(--space-800)',
      background: 'var(--colors-steel-grey-white)',
      boxShadow: 'inset 0 -1px 0 var(--colors-border-light)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }}>
        <span style={{ font: 'var(--weight-bold) var(--text-s)/1 var(--font-core)', letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--colors-ultra-purple-700)' }}>Northwind Group</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-200)', font: 'var(--weight-base) var(--text-s)/1 var(--font-core)', letterSpacing: 'var(--tracking-tight)', color: 'var(--colors-cold-grey-600)' }}>
          Org ID: 93540580980203458590345 <IconCopy size={16} style={{ color: 'var(--colors-cold-grey-600)' }} />
        </span>
      </div>
      <div style={{ marginLeft: 'auto', width: 280 }}>
        <Input placeholder="Search wallets, transfers, users" onChange={e => onSearch(e.target.value)}
          leadingIcon={<Icon name="HeroiconsMiniMagnifyingGlass" size={16} style={{ color: 'var(--colors-cold-grey-500)' }} />} />
      </div>
      <Button variant="ghost" size="icon" leadingIcon={<Icon name="HeroiconsMiniBell" size={20} />} aria-label="Notifications" />
      <span style={{
        width: 36, height: 36, borderRadius: 'var(--radius-full)', flex: 'none',
        background: 'url(../../assets/images/avatar-jane.png) 25.767% 16.977% / 637.795% 251.163% no-repeat, rgb(61,41,153)',
      }} />
    </header>
  );
}

function Card({ children, style, padded = true }) {
  return (
    <section style={{
      background: 'var(--colors-steel-grey-white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--ring-card), var(--shadow-base)',
      padding: padded ? 'var(--space-600)' : 0,
      display: 'flex', flexDirection: 'column', gap: 'var(--space-300)',
      ...style,
    }}>{children}</section>
  );
}

function SectionLabel({ children }) {
  return <span style={{ font: 'var(--weight-bold) var(--text-s)/var(--line-l) var(--font-core)', letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--colors-ultra-purple-700)' }}>{children}</span>;
}

Object.assign(window, { Sidebar, TopBar, Card, SectionLabel });
