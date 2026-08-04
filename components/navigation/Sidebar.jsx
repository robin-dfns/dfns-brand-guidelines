import React from 'react';

/* ============================================================
   DFNS Sidebar — atomic navigation components (shadcn structure)
   Reproduced from the product dashboard ("Organisation Sidebar").
   Token-driven: colors come from tokens/*.css (fig-tokens / colors).
   Compose: Sidebar > SidebarHeader | SidebarContent (SidebarGroup >
   SidebarMenu > SidebarMenuItem > SidebarMenuButton [+ SidebarMenuSub])
   | SidebarFooter.
   ============================================================ */

const T = {
  page: 'var(--steel-grey-100, #f0f1f4)',
  card: 'var(--steel-grey-300, #e3e4eb)',
  activeBg: 'var(--steel-grey-400, #d7d8e1)',
  hoverBg: 'var(--steel-grey-400, #d7d8e1)',
  selectedBg: 'var(--ultra-purple-50, #e6deff)',
  label: 'var(--ultra-purple-800, #2d1866)',
  labelActive: 'var(--ultra-purple-900, #170c33)',
  muted: 'var(--cold-grey-600, #575c7b)',
  border: 'var(--cold-grey-300, #c5c9de)',
  badgeBg: '#e1e4ec',
  badgeFg: 'var(--ultra-purple-700, #442599)',
  font: 'var(--font-sans)',
};

const ChevronRight = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 6l6 6-6 6" /></svg>;
const ChevronsUpDown = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 9l4-4 4 4M8 15l4 4 4-4" /></svg>;

/* ── atom: the menu button (icon + label + optional badge / chevron) ── */
export function SidebarMenuButton({ icon, children, active = false, state, badge, expandable = false, expanded = false, sub = false, style, ...rest }) {
  const s = state || (active ? 'active' : 'default'); // default | hover | active | focused
  const bg = s === 'hover' ? T.hoverBg : s === 'active' ? T.selectedBg : 'transparent';
  const ring = s === 'focused' ? 'inset 0 0 0 1.5px var(--system-blue-300, #8097ff)' : 'none';
  const isActive = s === 'active';
  return (
    <button type="button" data-state={s} data-active={isActive || undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 8, width: sub ? 172 : 220, height: 32, padding: 8,
        borderRadius: 6, border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: T.font, fontSize: 14,
        fontWeight: isActive ? 500 : 400, color: isActive ? T.labelActive : T.label,
        background: bg, boxShadow: ring, boxSizing: 'border-box', ...style,
      }} {...rest}>
      {icon && <span style={{ width: 16, height: 16, flex: 'none', display: 'inline-flex' }}>{icon}</span>}
      <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>
      {badge != null && <SidebarBadge>{badge}</SidebarBadge>}
      {expandable && <ChevronRight style={{ opacity: 0.7, transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }} />}
    </button>
  );
}

/* ── atom: count / status badge ── */
export function SidebarBadge({ children }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 8px', borderRadius: 6, background: T.badgeBg, color: T.badgeFg, fontFamily: T.font, fontSize: 14, fontWeight: 500, lineHeight: 1 }}>{children}</span>;
}

/* ── atom: section label ── */
export function SidebarGroupLabel({ children }) {
  return <div style={{ fontFamily: T.font, fontSize: 12, color: T.muted, padding: 8, height: 32, display: 'flex', alignItems: 'center' }}>{children}</div>;
}

/* ── layout molecules ── */
export function SidebarMenu({ children }) { return <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</div>; }
export function SidebarMenuItem({ children }) { return <div>{children}</div>; }
export function SidebarGroup({ children }) { return <div>{children}</div>; }
export function SidebarMenuSub({ children }) {
  return <div style={{ margin: '2px 0 2px 15px', paddingLeft: 9, borderLeft: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column' }}>{children}</div>;
}

/* ── molecule: org switcher (header card) ── */
export function OrgSwitcher({ avatar, org, name, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderRadius: 6, background: 'var(--steel-grey-white,#fff)', boxShadow: `inset 0 0 0 1px ${T.activeBg}`, width: 220, boxSizing: 'border-box', cursor: 'pointer', border: 'none' }}>
      <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--ultra-purple-200,#c4aeff)', flex: 'none', overflow: 'hidden' }}>{avatar}</span>
      <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.2, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: T.font, fontSize: 12, color: T.muted }}>{org}</span>
        <span style={{ display: 'block', fontFamily: T.font, fontSize: 14, fontWeight: 600, color: T.labelActive }}>{name}</span>
      </span>
      <ChevronsUpDown style={{ opacity: 0.6, color: T.muted, flex: 'none' }} />
    </button>
  );
}

/* ── molecule: user tile (footer) ── */
export function UserTile({ avatar, name, email, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 8, borderRadius: 6, width: 236, boxSizing: 'border-box', cursor: 'pointer', border: 'none', background: 'transparent' }}>
      <span style={{ width: 32, height: 32, borderRadius: '50%', flex: 'none', overflow: 'hidden', background: 'linear-gradient(135deg,#aa8bff,#8860f7)' }}>{avatar}</span>
      <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.25, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: T.font, fontSize: 14, fontWeight: 600, color: T.labelActive }}>{name}</span>
        <span style={{ display: 'block', fontFamily: T.font, fontSize: 12, color: T.muted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</span>
      </span>
      <ChevronsUpDown style={{ opacity: 0.6, color: T.muted, flex: 'none' }} />
    </button>
  );
}

/* ── layout regions + organism ── */
export function SidebarHeader({ children }) { return <div style={{ display: 'flex', alignItems: 'center', padding: '8px 8px 16px' }}>{children}</div>; }
export function SidebarContent({ children }) { return <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>{children}</div>; }
export function SidebarFooter({ children }) { return <div style={{ paddingTop: 8 }}>{children}</div>; }

export function Sidebar({ children, style, ...rest }) {
  return (
    <div style={{ width: 256, background: T.page, borderRadius: 14, padding: 10, ...style }} {...rest}>
      <div style={{ background: T.card, borderRadius: 12, padding: 10, display: 'flex', flexDirection: 'column', minHeight: 480 }}>
        {children}
      </div>
    </div>
  );
}
