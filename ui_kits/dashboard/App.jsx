const { useState, useEffect } = React;
const { Sidebar, TopBar, Overview, Wallets, Transfers, Policies, Settings, CreateWalletDialog } = window;
const { Badge } = window.DFNSDesignSystem_86e15f;

const IMPLEMENTED_VIEWS = ['Dashboard', 'Wallets', 'Transfers', 'Policies', 'Approvals', 'Settings'];

function DashboardApp() {
  const [view, setView] = useState('Dashboard');
  const [dialog, setDialog] = useState(false);
  const [approved, setApproved] = useState([]);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (view !== 'Transfers') return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, [view]);

  const notify = msg => { setToast(msg); setTimeout(() => setToast(null), 2200); };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--colors-background-base)' }}>
      <Sidebar active={view} onNavigate={setView} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar onSearch={() => {}} />
        <main style={{ flex: 1, padding: 'var(--space-800)', display: 'flex', flexDirection: 'column', gap: 'var(--space-600)' }}>
          {view === 'Dashboard' && <Overview onNavigate={setView} />}
          {view === 'Wallets' && <Wallets onCreate={() => setDialog(true)} />}
          {view === 'Transfers' && <Transfers loading={loading} />}
          {(view === 'Policies' || view === 'Approvals') && <Policies approved={approved} onApprove={w => { setApproved(a => [...a, w]); notify('Approval Recorded'); }} />}
          {view === 'Settings' && <Settings />}
          {!IMPLEMENTED_VIEWS.includes(view) && (
            <div style={{ padding: 'var(--space-800)', borderRadius: 'var(--radius-xl)', background: 'var(--colors-steel-grey-white)', boxShadow: 'var(--ring-card), var(--shadow-base)', display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}>
              <span style={{ font: 'var(--weight-bold) var(--text-m)/1 var(--font-core)', letterSpacing: 'var(--tracking-tight)', color: 'var(--colors-dark-purple-900)' }}>{view}</span>
              <span style={{ font: 'var(--weight-base) var(--text-base)/var(--line-m) var(--font-core)', color: 'var(--colors-cold-grey-600)' }}>No data yet. This view is not designed in the source Figma file, so it is left blank rather than invented.</span>
            </div>
          )}
        </main>
      </div>
      <CreateWalletDialog open={dialog} onClose={() => setDialog(false)} onCreate={name => notify('Wallet Created — ' + name)} />
      {toast && (
        <div style={{ position: 'fixed', right: 'var(--space-800)', bottom: 'var(--space-800)', padding: 'var(--space-300) var(--space-400)', borderRadius: 'var(--radius-xl)', background: 'var(--colors-cold-grey-900)', boxShadow: 'var(--shadow-large)', display: 'flex', alignItems: 'center', gap: 'var(--space-250)' }}>
          <Badge color="green">Done</Badge>
          <span style={{ font: 'var(--weight-base) var(--text-base)/1 var(--font-core)', color: 'var(--colors-cold-grey-100)' }}>{toast}</span>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { DashboardApp });
