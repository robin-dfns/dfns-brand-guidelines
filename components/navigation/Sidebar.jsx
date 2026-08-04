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
const ChevronDown = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 9l6 6 6-6" /></svg>;
const ChevronsUpDown = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 9l4-4 4 4M8 15l4 4 4-4" /></svg>;
const Plus = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 5v14M5 12h14" /></svg>;
const Minus = (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14" /></svg>;
const PanelLeft = (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" /></svg>;

/* ── atom: expand/collapse indicator ── variant: chevron | vertical | up-down | plus-minus; active toggles the open/closed glyph ── */
export function CollapseIcon({ variant = 'chevron', active = false, ...p }) {
  if (variant === 'up-down') return <ChevronsUpDown {...p} />;
  if (variant === 'plus-minus') return active ? <Minus {...p} /> : <Plus {...p} />;
  if (variant === 'vertical') return <ChevronDown style={{ transform: active ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} {...p} />;
  return active ? <ChevronDown {...p} /> : <ChevronRight {...p} />; // chevron
}

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

/* ── atom: section label ── action: none | collapsible (chevron) | action (＋); size: sm | xs ── */
export function SidebarGroupLabel({ children, action = 'none', collapsed = false, size = 'sm', onAction }) {
  return (
    <div style={{ fontFamily: T.font, fontSize: size === 'xs' ? 11 : 12, color: T.muted, padding: 8, height: 32, width: 220, boxSizing: 'border-box', display: 'flex', alignItems: 'center' }}>
      <span>{children}</span>
      {action !== 'none' && (
        <span onClick={onAction} style={{ marginLeft: 'auto', opacity: 0.6, display: 'inline-flex', cursor: onAction ? 'pointer' : 'default' }}>
          {action === 'action' ? <Plus width="14" height="14" /> : <ChevronDown width="14" height="14" style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform .2s' }} />}
        </span>
      )}
    </div>
  );
}

/* ── atom: sub-menu leaf row ── state: default | hover | active | focused ── */
export function SidebarMenuSubItem({ children, active = false, state, style, ...rest }) {
  const s = state || (active ? 'active' : 'default');
  const bg = s === 'hover' ? T.hoverBg : s === 'active' ? T.selectedBg : 'transparent';
  const ring = s === 'focused' ? 'inset 0 0 0 1.5px var(--system-blue-300, #8097ff)' : 'none';
  const isActive = s === 'active';
  return (
    <button type="button" data-state={s} data-active={isActive || undefined}
      style={{
        display: 'flex', alignItems: 'center', height: 32, padding: 8, borderRadius: 6, border: 'none', cursor: 'pointer',
        textAlign: 'left', width: 180, boxSizing: 'border-box', fontFamily: T.font, fontSize: 14,
        fontWeight: isActive ? 500 : 400, color: isActive ? T.labelActive : T.label, background: bg, boxShadow: ring, ...style,
      }} {...rest}>{children}</button>
  );
}

/* ── layout molecules ── */
export function SidebarMenu({ children }) { return <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</div>; }
export function SidebarMenuItem({ children }) { return <div>{children}</div>; }
export function SidebarGroup({ children }) { return <div>{children}</div>; }
/* variant: border (rail) | default (flush) | indent (padded, no rail) */
export function SidebarMenuSub({ children, variant = 'border' }) {
  const base = { display: 'flex', flexDirection: 'column' };
  const v = variant === 'border' ? { margin: '2px 0 2px 15px', paddingLeft: 9, borderLeft: `1px solid ${T.border}` }
    : variant === 'indent' ? { paddingLeft: 16 } : {};
  return <div style={{ ...base, ...v }}>{children}</div>;
}

/* ── atom: media slot ── variant: icon (glyph on brand fill) | avatar (image) ── */
export function MediaAsset({ variant = 'icon', src, glyph, size = 32 }) {
  if (variant === 'avatar') return <span style={{ width: size, height: size, borderRadius: 8, display: 'inline-block', overflow: 'hidden', background: 'linear-gradient(135deg,#aa8bff,#8860f7)' }}>{src && <img src={src} alt="" width={size} height={size} style={{ display: 'block', objectFit: 'cover' }} />}</span>;
  return <span style={{ width: size, height: size, borderRadius: 8, background: T.label, color: 'var(--steel-grey-white,#fff)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{glyph}</span>;
}

/* ── atom: sidebar rail toggle (panel-left) ── state: default | hover | focused ── */
export function HeaderButton({ icon, state = 'default', ...rest }) {
  const bg = state === 'hover' ? T.selectedBg : 'transparent';
  const bd = state === 'focused' ? T.labelActive : 'transparent';
  return <button type="button" data-state={state} style={{ width: 32, height: 32, borderRadius: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: T.labelActive, background: bg, border: `1px solid ${bd}`, cursor: 'pointer' }} {...rest}>{icon || <PanelLeft />}</button>;
}

/* ── atom: group-level action (＋) ── state: default | hover | focused ── */
export function SidebarGroupAction({ icon, state = 'default', ...rest }) {
  const bg = state === 'hover' ? 'var(--steel-grey-200,#e8eaf0)' : 'transparent';
  const bd = state === 'focused' ? 'var(--system-blue-300,#8097ff)' : 'transparent';
  return <button type="button" data-state={state} style={{ width: 28, height: 28, borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cold-grey-700,#363a5b)', background: bg, border: `1.5px solid ${bd}`, cursor: 'pointer' }} {...rest}>{icon || <Plus width="16" height="16" />}</button>;
}

/* ── molecule: popover trigger (media + label + chevron) ── state: default | hover ── */
export function PopoverTrigger({ icon, label, state = 'default', onClick }) {
  return (
    <button type="button" onClick={onClick} data-state={state} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, width: 190, boxSizing: 'border-box', border: 'none', cursor: 'pointer', background: state === 'hover' ? 'var(--steel-grey-200,#e8eaf0)' : 'transparent' }}>
      <span style={{ width: 26, height: 26, borderRadius: 7, background: T.label, color: 'var(--steel-grey-white,#fff)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{icon}</span>
      <span style={{ flex: 1, textAlign: 'left', fontFamily: T.font, fontSize: 15, fontWeight: 600, color: T.labelActive }}>{label}</span>
      <ChevronDown style={{ color: 'var(--cold-grey-500,#aeb1c9)' }} />
    </button>
  );
}

/* ── organism: popover menu (list of items + optional footer action) ── items: [{icon, label, shortcut, onClick} | null (separator)] ── */
export function PopoverMenu({ label, items = [], style }) {
  return (
    <div style={{ width: 280, maxWidth: '100%', background: 'var(--steel-grey-white,#fff)', border: `1px solid ${T.card}`, borderRadius: 12, boxShadow: '0 8px 24px rgba(19,22,45,.12)', padding: 8, fontFamily: T.font, boxSizing: 'border-box', ...style }}>
      {label && <div style={{ fontSize: 12, fontWeight: 600, color: T.labelActive, padding: '6px 8px' }}>{label}</div>}
      {items.map((it, i) => it == null
        ? <div key={i} style={{ height: 1, background: 'var(--steel-grey-200,#e8eaf0)', margin: '6px 0' }} />
        : <button key={i} type="button" onClick={it.onClick} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: 8, borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: T.font }}>
            {it.icon && <span style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${T.card}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: T.labelActive, flex: 'none' }}>{it.icon}</span>}
            <span style={{ flex: 1, fontSize: 15, color: T.labelActive }}>{it.label}</span>
            {it.shortcut && <span style={{ fontSize: 12, color: 'var(--cold-grey-500,#aeb1c9)', fontFamily: 'var(--font-mono)' }}>{it.shortcut}</span>}
          </button>
      )}
    </div>
  );
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

/* ── organism: account / popover menu ── items: [{label, onClick}]; header = avatar+name+email; groups separated by null entries ── */
export function AccountDropdown({ avatar, name, email, items = [], style }) {
  return (
    <div style={{ width: 236, background: 'var(--steel-grey-white,#fff)', border: `1px solid ${T.card}`, borderRadius: 10, boxShadow: '0 8px 24px rgba(19,22,45,.14)', padding: 6, fontFamily: T.font, boxSizing: 'border-box', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8 }}>
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg,#aa8bff,#8860f7)', flex: 'none', overflow: 'hidden' }}>{avatar}</span>
        <span style={{ lineHeight: 1.25, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.labelActive }}>{name}</span>
          <span style={{ display: 'block', fontSize: 12, color: T.muted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</span>
        </span>
      </div>
      {items.map((it, i) => it == null
        ? <div key={i} style={{ height: 1, background: 'var(--steel-grey-200,#e8eaf0)', margin: '6px 0' }} />
        : <button key={i} type="button" onClick={it.onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '7px 8px', borderRadius: 6, fontSize: 13, color: 'var(--cold-grey-700,#363a5b)', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: T.font }}>{it.icon}{it.label}</button>
      )}
    </div>
  );
}

/* ── molecule: inbox / notification row ── */
export function InboxItem({ who, time, title, body, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ display: 'block', width: 280, maxWidth: '100%', border: `1px solid ${T.card}`, borderRadius: 8, padding: '12px 14px', background: 'var(--steel-grey-white,#fff)', fontFamily: T.font, cursor: 'pointer', textAlign: 'left' }}>
      <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
        <span style={{ color: T.muted }}>{who}</span>
        <span style={{ color: 'var(--cold-grey-500,#aeb1c9)', fontSize: 12 }}>{time}</span>
      </span>
      <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: T.labelActive, margin: '4px 0 2px' }}>{title}</span>
      <span style={{ display: 'block', fontSize: 12, color: T.muted, lineHeight: 1.4 }}>{body}</span>
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
