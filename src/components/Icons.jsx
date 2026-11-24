const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

const Svg = ({ children, size = 24, ...props }) => (
  <svg {...base} width={size} height={size} {...props}>
    {children}
  </svg>
)

export const ArrowRight = (props) => (
  <Svg {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
)

export const Check = (props) => (
  <Svg {...props}>
    <path d="m5 13 4 4L19 7" />
  </Svg>
)

export const Phone = (props) => (
  <Svg {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  </Svg>
)

export const Mail = (props) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
)

export const Pin = (props) => (
  <Svg {...props}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)

export const Clock = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
)

export const Shield = (props) => (
  <Svg {...props}>
    <path d="M12 3 5 6v5c0 4.6 3 8.2 7 10 4-1.8 7-5.4 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)

export const Contract = (props) => (
  <Svg {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </Svg>
)

export const Lift = (props) => (
  <Svg {...props}>
    <path d="M4 20h16" />
    <path d="M7 20v-7h10v7" />
    <path d="M12 13V4" />
    <path d="M9 7h6" />
    <path d="m9 10 3 3 3-3" />
    <circle cx="9" cy="20" r="1.6" />
    <circle cx="17" cy="20" r="1.6" />
  </Svg>
)

export const Truck = (props) => (
  <Svg {...props}>
    <path d="M3 7h11v9H3z" />
    <path d="M14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17.5" cy="18" r="1.8" />
  </Svg>
)

export const Compressor = (props) => (
  <Svg {...props}>
    <rect x="4" y="8" width="12" height="9" rx="2" />
    <path d="M16 11h2l2-2v7l-2-2h-2" />
    <path d="M8 8V6h4v2" />
    <circle cx="8" cy="17" r="1.4" />
    <circle cx="13" cy="17" r="1.4" />
  </Svg>
)

export const Bolt = (props) => (
  <Svg {...props}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Svg>
)

export const Menu = (props) => (
  <Svg {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const Close = (props) => (
  <Svg {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
)

export const Telegram = (props) => (
  <Svg {...props}>
    <path d="M21 4 3 11l5 2 2 6 3-4 5 4 3-15Z" fill="currentColor" stroke="none" />
    <path d="m8 13 10-7-6 9" stroke="white" strokeWidth="1.4" />
  </Svg>
)

export const WhatsApp = (props) => (
  <Svg {...props}>
    <path
      d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.3A8 8 0 1 1 20 12Z"
      fill="currentColor"
      stroke="none"
    />
    <path
      d="M9 9.2c.2-.5.4-.5.7-.5h.5c.2 0 .5 0 .7.5l.6 1.4c.1.3 0 .5-.1.7l-.4.5c.3.6.8 1.1 1.4 1.4l.5-.4c.2-.2.4-.2.7-.1l1.4.6c.3.1.5.3.5.6v.5c0 .3-.3.6-.7.7-.9.3-1.9.1-2.8-.4a7 7 0 0 1-2.6-2.7c-.5-.9-.6-1.8-.4-2.7Z"
      stroke="white"
      strokeWidth="1.2"
    />
  </Svg>
)

export const Chevron = (props) => (
  <Svg {...props}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
)
