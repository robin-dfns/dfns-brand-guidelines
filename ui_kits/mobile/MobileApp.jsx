/* Recreation of "iPhone 16 Pro Max - 1" (node 110:120) from DFNS DS.fig — the Mobile page
   the file marks TO-MIGRATE. Geometry, type and colour are transcribed from the source.
   The source sets this screen's labels in Inter; Suisse Intl is substituted because Inter is
   not part of this system. Sizes, weights and colours are unchanged. */

const { useState } = React;
const { Logotype, MobileMenu, IconCopy, Icon, CryptoIcon } = window.DFNSDesignSystem_86e15f;

/* The source frame sets Inter here; Inter is not part of this system, so the screen
   renders in Suisse Intl. Sizes and weights are unchanged. */
const I = { fontFamily: 'var(--font-core)' };

function OrgLine() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 305 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 18 }}>
        <span style={{ fontWeight: 600, fontSize: 16, lineHeight: 1, letterSpacing: '-0.4px', color: 'var(--colors-cold-grey-600)' }}>Org ID:</span>
        <span style={{ fontWeight: 400, fontSize: 14, lineHeight: 1, letterSpacing: '-0.4px', color: 'var(--colors-cold-grey-600)' }}>93540580980203458590345</span>
        <IconCopy size={18} style={{ color: 'var(--colors-cold-grey-600)', flex: 'none' }} />
      </div>
      <span style={{
        fontFamily: '"Suisse Intl", var(--font-core)', fontWeight: 300, fontSize: 50,
        lineHeight: 1.1, letterSpacing: '-0.98px', whiteSpace: 'nowrap',
        color: 'var(--colors-ultra-purple-700)',
      }}>Northwind Group</span>
    </div>
  );
}

function BalanceCard({ hidden, onToggle }) {
  return (
    <div style={{
      alignSelf: 'stretch', height: 136, padding: 24, borderRadius: 16, overflow: 'hidden',
      background: 'var(--colors-ultra-purple-800)',
      display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, alignSelf: 'stretch' }}>
        <span style={{ ...I, fontWeight: 400, fontSize: 13, lineHeight: 1, color: 'rgb(204,199,235)' }}>Balance</span>
        <button onClick={onToggle} aria-label={hidden ? 'Show Balance' : 'Hide Balance'} style={{
          marginLeft: 'auto', border: 'none', background: 'transparent', cursor: 'pointer', padding: 0,
          color: 'rgb(204,199,235)', display: 'flex',
        }}>
          <Icon name={hidden ? 'HeroiconsMiniEyeSlash' : 'HeroiconsMiniEye'} size={18} />
        </button>
      </div>
      <span style={{ ...I, fontWeight: 300, fontSize: 34, lineHeight: 1, color: 'var(--colors-black-and-white-white)', whiteSpace: 'nowrap' }}>
        {hidden ? 'USD$ ••••••••' : 'USD$ 4,200,000'}
      </span>
    </div>
  );
}

const ACTIONS = [
  { label: 'Send', icon: 'HeroiconsMiniArrowUpRight' },
  { label: 'Receive', icon: 'HeroiconsMiniArrowDownLeft' },
  { label: 'Swap', icon: 'HeroiconsMiniArrowsRightLeft' },
  { label: 'Yield', icon: 'HeroiconsMiniArrowTrendingUp' },
];

function QuickActions({ onPick }) {
  return (
    <div style={{
      alignSelf: 'stretch', height: 107, padding: '16px 20px 12px', borderRadius: 12, overflow: 'hidden',
      background: 'var(--colors-steel-grey-white)', display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'stretch', height: 79 }}>
        {ACTIONS.map(a => (
          <button key={a.label} onClick={() => onPick(a.label)} style={{
            width: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
          }}>
            <span style={{
              width: 56, height: 56, borderRadius: 16, background: 'rgb(244,240,255)',
              display: 'grid', placeItems: 'center', color: 'var(--colors-ultra-purple-700)',
            }}><Icon name={a.icon} size={22} /></span>
            <span style={{ ...I, fontWeight: 400, fontSize: 12, lineHeight: 1, color: 'var(--colors-cold-grey-600)' }}>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const TX = [
  { name: 'Northwind Treasury', meta: 'Transfer out · 2h ago', amount: '-$250,000', tint: 'rgb(255,239,246)', sign: 'out', symbol: 'Bitcoin' },
  { name: 'Acme Corp', meta: 'Transfer in · 5h ago', amount: '+$1,000,000', tint: 'rgb(216,253,223)', sign: 'in', symbol: 'USDCoin' },
  { name: 'Northwind Ops', meta: 'Transfer out · Yesterday', amount: '-$12,400', tint: 'rgb(255,239,246)', sign: 'out', symbol: 'Ethereum' },
  { name: 'Hedge Book 2', meta: 'Transfer in · Yesterday', amount: '+$84,250', tint: 'rgb(216,253,223)', sign: 'in', symbol: 'Solana' },
];

function RecentTransactions() {
  return (
    <div style={{
      width: 390, padding: '20px 20px 4px', borderRadius: 12, overflow: 'hidden',
      background: 'var(--colors-steel-grey-white)', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, alignSelf: 'stretch' }}>
        <span style={{ ...I, fontWeight: 500, fontSize: 14, lineHeight: 1, color: 'var(--colors-cold-grey-700)' }}>Recent transactions</span>
        <a href="#" style={{ ...I, fontWeight: 500, fontSize: 13, lineHeight: 1, color: 'var(--colors-ultra-purple-700)', textDecoration: 'none' }}>See all</a>
      </div>
      {TX.map((t, i) => (
        <React.Fragment key={t.name}>
          {i > 0 && <div style={{ height: 1, background: 'rgb(224,226,233)', alignSelf: 'stretch' }} />}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', alignSelf: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: t.tint, display: 'grid', placeItems: 'center', flex: 'none' }}>
                <CryptoIcon symbol={t.symbol} size={22} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ ...I, fontWeight: 400, fontSize: 13, lineHeight: 1, color: 'var(--colors-cold-grey-700)' }}>{t.name}</span>
                <span style={{ ...I, fontWeight: 400, fontSize: 11, lineHeight: 1, color: 'var(--colors-cold-grey-600)' }}>{t.meta}</span>
              </span>
            </div>
            <span style={{ ...I, fontWeight: 400, fontSize: 13, lineHeight: 1, color: t.sign === 'out' ? 'var(--colors-error-text)' : 'var(--colors-success-text)' }}>{t.amount}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

const NAV = [
  { label: 'Dashboard', icon: 'HeroiconsSolidSquares2x2' },
  { label: 'Transfers', icon: 'HeroiconsMiniArrowsUpDown' },
  { label: 'Approvals', icon: 'HeroiconsSolidCheckCircle' },
  { label: 'Menu', icon: 'HeroiconsSolidCog8Tooth' },
];

function MobileApp() {
  const [tab, setTab] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [toast, setToast] = useState(null);
  const notify = label => { setToast(label + ' — not available in this recreation'); setTimeout(() => setToast(null), 1800); };
  return (
    <div style={{
      position: 'relative', width: 440, height: 956, overflow: 'hidden',
      background: 'var(--colors-steel-grey-100)', padding: 28,
      display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', height: 38 }}>
        <Logotype height={30} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
            <span style={{ ...I, fontWeight: 400, fontSize: 12, lineHeight: 1, color: 'var(--colors-cold-grey-600)' }}>Jane@gmail.com</span>
            <span style={{ ...I, fontWeight: 500, fontSize: 15, lineHeight: 1, color: 'var(--colors-cold-grey-700)' }}>Jane Smith</span>
          </div>
          <span style={{
            width: 38, height: 38, borderRadius: '50%', flex: 'none',
            background: 'url(../../assets/images/avatar-jane.png) 25.767% 16.977% / 637.795% 251.163% no-repeat, rgb(61,41,153)',
          }} />
        </div>
      </div>
      <OrgLine />
      {tab === 0 && <>
        <BalanceCard hidden={hidden} onToggle={() => setHidden(h => !h)} />
        <QuickActions onPick={notify} />
        <RecentTransactions />
      </>}
      {tab === 1 && <RecentTransactions />}
      {tab === 2 && (
        <div style={{ alignSelf: 'stretch', padding: 20, borderRadius: 12, background: 'var(--colors-steel-grey-white)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...I, fontWeight: 500, fontSize: 14, color: 'var(--colors-cold-grey-700)' }}>Pending approvals</span>
          <span style={{ ...I, fontSize: 13, color: 'var(--colors-cold-grey-600)' }}>No data yet</span>
        </div>
      )}
      {tab === 3 && (
        <div style={{ alignSelf: 'stretch', padding: 20, borderRadius: 12, background: 'var(--colors-steel-grey-white)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...I, fontWeight: 500, fontSize: 14, color: 'var(--colors-cold-grey-700)' }}>Menu</span>
          <span style={{ ...I, fontSize: 13, color: 'var(--colors-cold-grey-600)' }}>Not designed in the source file.</span>
        </div>
      )}
      <div style={{ position: 'absolute', left: 30, bottom: 24 }}>
        <MobileMenu items={NAV.map(n => ({ label: n.label, icon: <Icon name={n.icon} size={20} /> }))} activeIndex={tab} onSelect={setTab} />
      </div>
      {toast && (
        <div style={{
          position: 'absolute', left: 28, right: 28, bottom: 92, padding: '10px 14px',
          borderRadius: 12, background: 'var(--colors-cold-grey-900)',
          ...I, fontSize: 13, color: 'var(--colors-cold-grey-100)', textAlign: 'center',
        }}>{toast}</div>
      )}
    </div>
  );
}

Object.assign(window, { MobileApp });
