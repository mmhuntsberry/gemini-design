/**
 * ? GLOBAL TOKENS
 *
 * These are the lowest level of tokens and
 * represent the raw values of the design
 * attributes.
 */

export const colors = {
  black: '#000000',
  blue: {
    '00': '#EBF1FF',
    '05': '#B8C5F4',
    10: '#8A93E8',
    20: '#6A66DB',
    30: '#4E49E0',
    40: '#2920DA',
    50: '#0D08A5',
  },
  gray: {
    '00': '#ECEDEE',
    '05': '#D9DADD',
    10: '#C9C7CC',
    20: '#B1B1B4',
    30: '#868587',
    40: '#59595A',
    50: '#2D2D2D',
    60: '#252525',
  },
  green: {
    '00': '#F5FFFB',
    '05': '#B9E1D1',
    10: '#85C3A9',
    20: '#5DA584',
    30: '#3C8763',
    40: '#245B46',
    50: '#122F26',
  },
  pink: {
    '00': '#FFF5FD',
    '05': '#FAD1F5',
    10: '#F6AFF2',
    20: '#ED93F1',
    30: '#C96DC4',
    40: '#893D7C',
    50: '#481D3D',
  },
  red: {
    '00': '#FFEBEB',
    '05': '#FBB9B8',
    10: '#F88B87',
    20: '#F2685F',
    30: '#ED4738',
    40: '#E21F14',
    50: '#AA0703',
  },
  white: '#FFFFFF',
  yellow: {
    '00': '#FFF7E8',
    '05': '#FCE4B7',
    10: '#F9D187',
    20: '#F6C05C',
    30: '#F3B032',
    40: '#B88119',
    50: '#7D570F',
  },
};

export const fonts = {
  heading: 'Tiempos',
  main: 'Inter',
};

/* eslint-disable sort-keys */
export const sizing = {
  '00': '0rem',
  '01': '0.063rem', // 1px
  '02': '0.125rem', // 2px
  '04': '0.25rem', // 4px
  '06': '0.375rem', // 6px
  '08': '0.5rem', // 8px
  10: '0.625rem', // 10px
  12: '0.75rem', // 12px
  14: '0.875rem', // 14px
  16: '1rem', // 16px
  18: '1.125rem', // 18px
  20: '1.25rem', // 20px
  22: '1.375rem', // 22px
  24: '1.5rem', // 24px
  26: '1.625rem', // 26px
  28: '1.75rem', // 28px
  30: '1.875rem', // 30px
  32: '2rem', // 32px
  34: '2.125rem', // 34px
  36: '2.25rem', // 36px
  38: '2.375rem', // 38px
  40: '2.5rem', // 40px
  42: '2.625rem', // 42px
  44: '2.75rem', // 44px
  46: '2.875rem', // 46px
  48: '3rem', // 48px
  50: '3.125rem', // 50px
  52: '3.25rem', // 52px
  54: '3.375rem', // 54px
  56: '3.5rem', // 56px
  58: '3.625rem', // 58px
  60: '3.75rem', // 60px
  62: '3.875rem', // 62px
  64: '4rem', // 64px
  66: '4.125rem', // 66px
  68: '4.25rem', // 68px
  70: '4.375rem', // 70px
  72: '4.5rem', // 72px
  74: '4.625rem', // 74px
  76: '4.75rem', // 76px
  78: '4.875rem', // 78px
  80: '5rem', // 80px
  82: '5.125rem', // 82px
  84: '5.25rem', // 84px
  86: '5.375rem', // 86px
  88: '5.5rem', // 88px
  90: '5.625rem', // 90px
  92: '5.75rem', // 92px
  94: '5.875rem', // 94px
  96: '6rem', // 96px
};
/* eslint-enable sort-keys */

/**
 * ? ALIAS TOKENS
 *
 * These tokens add a semantic layer on top of the global tokens.
 *
 * They are named in a way that describes their intended use,
 * but they are still platform-agnostic.
 */

/* eslint-disable sort-keys */
export const spacing = {
  none: sizing['00'], // 0px
  xxsmall: sizing['04'], // 4px
  xsmall: sizing['08'], // 8px
  small: sizing['12'], // 12px
  medium: sizing['16'], // 16px - Unique token
  large: sizing['20'], // 20px
  xlarge: sizing['24'], // 24px
  xxlarge: sizing['28'], // 28px
  huge: sizing['32'], // 32px - Unique token
  massive: sizing['36'], // 36px
  xmassive: sizing['40'], // 40px
  xxmassive: sizing['44'], // 44px
  giant: sizing['48'], // 48px - Unique token
};

export const fontSizes = {
  xxsmall: sizing['10'],
  xsmall: sizing['12'],
  small: sizing['14'],
  medium: sizing['16'],
  large: sizing['18'],
  xlarge: sizing['28'],
  xxlarge: sizing['36'],
};

export const fontWeights = {
  light: 300,
  medium: 500,
  regular: 400,
  bold: 600,
  bolder: 700,
};

export const letterSpacings = {
  default: '.25%',
  normal: '0',
  wide: '1.25%',
};

export const lineHeights = {
  tiny: sizing['12'],
  xxsmall: '15px', // This is a custom value from Figma, and may change when typography is finalized.
  xsmall: '17px', // This is a custom value from Figma, and may change when typography is finalized.
  small: '19px', // This is a custom value from Figma, and may change when typography is finalized.
  medium: sizing['20'],
  large: sizing['22'],
  xlarge: sizing['28'],
  xxlarge: sizing['34'],
  huge: sizing['44'],
};
/* eslint-enable sort-keys */

export const lineStyles = {
  default: sizing['01'],
  thick: sizing['02'],
  thicker: sizing['04'],
};

export const radii = {
  default: sizing['04'],
};

/**
 * ? COMPONENT TOKENS
 *
 * These are the highest level of tokens and
 * they are tied to specific components or contexts.
 *
 * They are platform-specific and they use alias tokens to define their values.
 */
export const borders = {
  color: {
    active: colors.yellow['30'],
    critical: colors.red['40'],
    dashed: colors.gray['10'],
    default: colors.gray['05'],
    strong: colors.gray['60'],
    success: colors.green['30'],
    weak: colors.gray['00'],
  },
  radius: {
    default: radii.default,
  },
  width: {
    default: lineStyles.default,
    thick: lineStyles.thick,
    thicker: lineStyles.thicker,
  },
};

export const palette = {
  black: colors.black,
  blue: colors.blue['20'],
  gray: colors.gray['10'],
  green: colors.green['30'],
  pink: colors.pink['20'],
  red: colors.red['30'],
  white: colors.white,
  yellow: colors.yellow['30'],
};

export const focus = {
  color: {
    default: colors.blue['20'],
  },
  width: {
    default: lineStyles.thick,
  },
};

export const icon = {
  color: {
    critical: colors.red['40'],
    default: colors.gray['40'],
  },
};

export const text = {
  color: {
    critical: colors.red['40'],
    default: colors.gray['40'],
    strong: colors.gray['60'],
  },
};

export const background = {
  body: '#FAFBFC', // note: this is not in the system grays
  critical: colors.red['00'],
  info: colors.gray['00'],
  layer: colors.white,
  overlay: 'rgba(0, 0, 0, 0.2)',
  selection: '#F2F2F2', // note: this is not in the system grays
  success: colors.green['00'],
};

/* eslint-disable sort-keys */
export const typography = {
  body: {
    family: fonts.main, // TODO: Add Charter font family
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xlarge,
    size: fontSizes.large,
    transform: 'none',
    weight: fontWeights.regular,
  },
  button: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xxsmall,
    size: fontSizes.xsmall,
    transform: 'uppercase',
    weight: fontWeights.bold,
  },
  descriptiveSmall: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xxsmall,
    size: fontSizes.xsmall,
    transform: 'none',
    weight: fontWeights.regular,
  },
  descriptiveMedium: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xsmall,
    size: fontSizes.small,
    transform: 'none',
    weight: fontWeights.regular,
  },
  descriptiveLarge: {
    family: fonts.main,
    letterSpacing: letterSpacings.wide,
    lineHeight: lineHeights.small,
    size: fontSizes.medium,
    transform: 'none',
    weight: fontWeights.regular,
  },
  field: {
    family: fonts.main,
    letterSpacing: letterSpacings.wide,
    lineHeight: lineHeights.medium,
    size: fontSizes.medium,
    transform: 'capitalize',
    weight: fontWeights.regular,
  },
  filters: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xsmall,
    size: fontSizes.small,
    transform: 'capitalize',
    weight: fontWeights.regular,
  },
  h1: {
    family: fonts.heading,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.huge,
    size: fontSizes.xxlarge,
    transform: 'none',
    weight: fontWeights.regular,
  },
  h2: {
    family: fonts.heading,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xxlarge,
    size: fontSizes.xlarge,
    transform: 'none',
    weight: fontWeights.regular,
  },
  h3: {
    family: fonts.heading,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xxlarge,
    size: '21px', // Not a global token but defined in Figma
    transform: 'none',
    weight: fontWeights.regular,
  },
  h4: {
    family: fonts.heading,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.large,
    size: fontSizes.large,
    transform: 'none',
    weight: fontWeights.regular,
  },
  h5: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.large,
    size: fontSizes.large,
    transform: 'capitalize',
    weight: fontWeights.regular,
  },
  h6: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.large,
    size: fontSizes.large,
    transform: 'capitalize',
    weight: fontWeights.bold,
  },
  label: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xxsmall,
    size: fontSizes.xsmall,
    transform: 'capitalize',
    weight: fontWeights.regular,
  },
  meta: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.tiny,
    size: fontSizes.xxsmall,
    transform: 'capitalize',
    weight: fontWeights.regular,
  },
  nav: {
    family: fonts.main,
    letterSpacing: letterSpacings.default,
    lineHeight: lineHeights.xsmall,
    size: fontSizes.small,
    transform: 'capitalize',
    weight: fontWeights.bolder,
  },
};
/* eslint-enable sort-keys */

export const defaultFontSet = `${fonts.main}, -apple-system, BlinkMacSystemFont,
 'Segoe UI', Helvetica, Arial, sans-serif,
'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;

// drop shadows behind elements
// box-shadow: ${elevations.main};
export const elevations = {
  main: '0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.05);',
  overlay:
    '0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);',
};

// z-index based on usage
// z-index: ${zIndices.nav};
export const zIndices = {
  actionBar: 80,
  actionToolBar: 100,
  base: 1,
  hide: -1,
  label: 2,
  modal: 9999,
  nav: 999,
  overlay: 99,
  snackbar: 99999,
};
