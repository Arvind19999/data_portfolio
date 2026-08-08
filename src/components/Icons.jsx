/**
 * Inline stroke icons — one consistent 1.4px-weight set so nothing depends on
 * an icon font or external request.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const Svg = ({ size = 22, children, filled, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...(filled ? { fill: 'currentColor' } : base)}
    {...rest}
  >
    {children}
  </svg>
);

/* -- interface ---------------------------------------------------------- */

export const ChevronDown = (p) => (
  <Svg size={14} {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const ChevronRight = (p) => (
  <Svg size={14} {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const ChevronLeft = (p) => (
  <Svg size={16} {...p}>
    <path d="m15 6-6 6 6 6" />
  </Svg>
);

export const ArrowUp = (p) => (
  <Svg size={18} {...p}>
    <path d="M12 19V5m0 0-6 6m6-6 6 6" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg size={18} {...p}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </Svg>
);

export const DoubleChevron = (p) => (
  <Svg size={14} {...p}>
    <path d="m6 6 5 6-5 6m7-12 5 6-5 6" />
  </Svg>
);

export const Close = (p) => (
  <Svg size={18} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const Download = (p) => (
  <Svg size={17} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </Svg>
);

export const Play = (p) => (
  <Svg size={16} filled {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </Svg>
);

/* corner arrows — "open this at full size" on gallery shots */
export const Expand = (p) => (
  <Svg size={18} {...p}>
    <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
  </Svg>
);

export const Plus = (p) => (
  <Svg size={16} {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const Star = (p) => (
  <Svg size={14} filled {...p}>
    <path d="m12 3.5 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.65l5.9-.85L12 3.5Z" />
  </Svg>
);

export const Quote = (p) => (
  <Svg size={40} filled {...p}>
    <path d="M9.5 6C6.5 7.6 4.5 10.6 4.5 14.2c0 2.4 1.5 3.8 3.4 3.8 1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-.9.1.5-1.7 2-3.2 3.7-4.1L9.5 6Zm9 0c-3 1.6-5 4.6-5 8.2 0 2.4 1.5 3.8 3.4 3.8 1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-.9.1.5-1.7 2-3.2 3.7-4.1L18.5 6Z" />
  </Svg>
);

/* -- contact ------------------------------------------------------------ */

export const Phone = (p) => (
  <Svg size={19} {...p}>
    <path d="M6.2 3.5h3l1.5 3.8-1.9 1.1a11 11 0 0 0 4.8 4.8l1.1-1.9 3.8 1.5v3a1.8 1.8 0 0 1-2 1.8A15 15 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  </Svg>
);

export const Mail = (p) => (
  <Svg size={19} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Svg>
);

export const MapPin = (p) => (
  <Svg size={19} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const Globe = (p) => (
  <Svg size={19} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </Svg>
);

export const FileText = (p) => (
  <Svg size={19} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Svg>
);

/* -- social ------------------------------------------------------------- */

export const LinkedIn = (p) => (
  <Svg size={17} filled {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.2 8.65 22 11 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
  </Svg>
);

export const GitHub = (p) => (
  <Svg size={18} filled {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </Svg>
);

export const Twitter = (p) => (
  <Svg size={17} filled {...p}>
    <path d="M17.7 3h3.3l-7.2 8.24L22.3 21h-6.63l-5.2-6.8L4.53 21H1.2l7.7-8.8L1.7 3h6.8l4.7 6.22L17.7 3Zm-1.16 16h1.83L7.55 4.9H5.58L16.54 19Z" />
  </Svg>
);

export const Facebook = (p) => (
  <Svg size={17} filled {...p}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </Svg>
);

/* Fiverr — the wordmark's lowercase "fi", simplified so it stays legible at
   the 18px the other social glyphs render at. */
export const Fiverr = (p) => (
  <Svg size={18} filled {...p}>
    <path d="M11.9 19H9.3v-6.7H6.6v-2.2h2.7V9c0-2.4 1.4-3.8 3.9-3.8h2v2.2h-1.5c-1.1 0-1.7.5-1.7 1.6v1.1h3.2v2.2h-3.3V19Z" />
    <rect x="16.1" y="10.1" width="2.6" height="8.9" rx="0.4" />
    <circle cx="17.4" cy="6.4" r="1.5" />
  </Svg>
);

/* -- service icons ------------------------------------------------------- */

const svcProps = { ...base, strokeWidth: 1.2 };

const SvcSvg = ({ children }) => (
  <svg width="46" height="46" viewBox="0 0 44 44" aria-hidden="true" {...svcProps}>
    {children}
  </svg>
);

export const ServiceIcon = ({ name }) => {
  switch (name) {
    case 'pipeline':
      return (
        <SvcSvg>
          <ellipse cx="10" cy="10" rx="6.5" ry="3" />
          <path d="M3.5 10v8c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3v-8" />
          <path d="M3.5 14c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3" />
          <path d="M21 26h9m0 0-3-3m3 3-3 3" />
          <rect x="24" y="7" width="16" height="12" rx="2" />
          <path d="M28 12h8M28 15h5" />
          <rect x="4" y="27" width="14" height="12" rx="2" />
          <path d="M8 32h6M8 35h4" />
          <path d="M18 13h4a2 2 0 0 1 2 2v0" />
        </SvcSvg>
      );
    case 'cloud':
      return (
        <SvcSvg>
          <path d="M12 26a6 6 0 0 1 .8-11.95A9 9 0 0 1 30.5 15a6.5 6.5 0 0 1 1 12.9" />
          <path d="M12 26h19.5" />
          <rect x="6" y="31" width="9" height="7" rx="1.5" />
          <rect x="17.5" y="31" width="9" height="7" rx="1.5" />
          <rect x="29" y="31" width="9" height="7" rx="1.5" />
          <path d="M10.5 31v-5M22 31v-5M33.5 31v-5" />
        </SvcSvg>
      );
    case 'migrate':
      return (
        <SvcSvg>
          <ellipse cx="10" cy="9" rx="6.5" ry="2.8" />
          <path d="M3.5 9v10c0 1.55 2.91 2.8 6.5 2.8s6.5-1.25 6.5-2.8V9" />
          <ellipse cx="34" cy="22" rx="6.5" ry="2.8" />
          <path d="M27.5 22v10c0 1.55 2.91 2.8 6.5 2.8s6.5-1.25 6.5-2.8V22" />
          <path d="M18 15h8a4 4 0 0 1 4 4v0" />
          <path d="M26 28h-8a4 4 0 0 1-4-4v0" />
          <path d="M28 17.5 30.5 15 28 12.5M16 26.5 13.5 29l2.5 2.5" />
        </SvcSvg>
      );
    case 'warehouse':
      return (
        <SvcSvg>
          <path d="M4 17 22 6l18 11" />
          <path d="M7 17v20h30V17" />
          <rect x="13" y="24" width="8" height="7" rx="1" />
          <rect x="23" y="24" width="8" height="7" rx="1" />
          <path d="M13 37v-3h18v3" />
        </SvcSvg>
      );
    case 'automation':
      return (
        <SvcSvg>
          <circle cx="22" cy="22" r="6" />
          <path d="M22 6v6M22 32v6M6 22h6M32 22h6M10.7 10.7l4.2 4.2M29.1 29.1l4.2 4.2M33.3 10.7l-4.2 4.2M14.9 29.1l-4.2 4.2" />
        </SvcSvg>
      );
    case 'search':
      return (
        <SvcSvg>
          <circle cx="19" cy="19" r="11" />
          <path d="m27 27 10 10" />
          <path d="M13.5 21.5 17 18l3.5 3.5L26 15" />
        </SvcSvg>
      );
    default:
      return null;
  }
};

/* -- brand mark ---------------------------------------------------------- */

export const LogoMark = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="20" cy="9.5" rx="12" ry="4.6" />
    <path d="M8 9.5v9.2c0 2.54 5.37 4.6 12 4.6s12-2.06 12-4.6V9.5" />
    <path d="M8 18.7v9.2c0 2.54 5.37 4.6 12 4.6s12-2.06 12-4.6v-9.2" />
    <circle cx="20" cy="9.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);
