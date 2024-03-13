import { DarkTheme, globalCss as createGlobalCss, LightTheme } from './stitches';

export const globalCss = createGlobalCss({
  // Reset
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, hr, a, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, button, video':
    {
      margin: 0,
      padding: 0,
    },

  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block',
  },

  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },

  'strong, b, mark': {
    fontStyle: 'inherit',
    fontWeight: 'bold',
  },

  'em, i, cite, q, address, dfn, var': {
    fontStyle: 'normal',
    fontWeight: 'inherit',
  },

  ' abbr[title], dfn[title]': {
    borderBottom: '1px dotted',
    cursor: 'help',
  },

  ins: { borderBottom: '1px solid' },

  'a, u, ins': { textDecoration: 'none' },

  'del, s': { textDecoration: 'line-through' },

  'pre, code, samp, kbd': { fontFamily: 'monospace' },

  small: { fontSize: '0.75em' },

  img: {
    border: 'none',
    fontSize: 0,
    color: 'transparent',
    display: 'block',
    maxWidth: '100%',
  },

  'h1, h2, h3, h4, h5': { fontWeight: 'normal' },

  select: {
    textAlign: 'left',
  },

  // Theme
  ':root': {
    '@media (prefers-color-scheme: dark)': { ...DarkTheme },
    '@media (prefers-color-scheme: light)': { ...LightTheme },
    '&[data-theme="dark"]': { ...DarkTheme },
    '&[data-theme="light"]': { ...LightTheme },

    '.dark': {
      ...DarkTheme,
    },

    '.light': {
      ...LightTheme,
    },
  },

  // Globals
  html: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    fontFamily: '$body',
    fontSize: 16,
  },

  body: {
    backgroundColor: '$colors$backgroundPrimary',
    color: '$colors$textPrimary',
  },

  '*': {
    boxSizing: 'border-box',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },

  i: {
    display: 'block',
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 1,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    userSelect: 'none',
  },

  kbd: {
    fontFamily: '-apple-system, system-ui, sans-serif',
    marginLeft: 'auto',
    paddingLeft: '$space$16',
    fontSize: 10,
  },

  a: {
    fontFamily: '$body',
    color: '$textPrimary',
    textDecoration: 'underline',

    '&:hover': {
      textDecoration: 'none',
    },
  },

  // charts override
  '& .apexcharts-toolbar': {
    display: 'none!important',
  },

  // dynamic.xyz override

  '& .reset-button': {
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  },
});
