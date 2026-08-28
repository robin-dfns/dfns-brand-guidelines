import React from 'react';

/* Figma: Icon Info with Tooltip — Showing (Top/Bottom) x Open (True/False), node 890:12157.
   Closed state is an 18px info glyph (15px artwork inset 1.5px) in Dark Purple 900. The open
   state reveals a panel above or below; the file carries no panel geometry, so it follows the
   product's card treatment: white, radius 8, 1px border, --shadow-base, 240-char maximum. */

export function IconInfoTooltip({ showing = 'Top', open, content, size = 18, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isOpen = open ?? hover;
  const top = showing === 'Top';
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-flex', width: size, height: size, color: 'var(--colors-dark-purple-900)', ...style }}
      {...rest}
    >
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 8.1v4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="9" cy="5.7" r="0.85" fill="currentColor" />
      </svg>
      {isOpen && content && (
        <span style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          [top ? 'bottom' : 'top']: size + 8,
          width: 260, padding: 'var(--space-250) var(--space-300)',
          borderRadius: 'var(--radius-large)',
          background: 'var(--colors-steel-grey-white)',
          boxShadow: 'var(--ring-card), var(--shadow-base)',
          fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-base)',
          fontSize: 'var(--text-s)', lineHeight: 'var(--line-base)',
          color: 'var(--colors-cold-grey-700)', zIndex: 20,
        }}>{content}</span>
      )}
    </span>
  );
}
export default IconInfoTooltip;
