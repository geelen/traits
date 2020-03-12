import { chain, containsPhrase } from './helpers';
import { Platform } from 'react-native';

// typography props
const markProBold = 'MarkPro-Bold';
export const systemFont = 'System';

const bodyColor = Platform.select({
  ios: '',
  android: ''
});

export default {
  bold: `font-family: ${markProBold};`,
  regular: `font-family: ${systemFont};`,

  // Design system font sizes
  largeTitle: `
    font-family: ${markProBold};
    font-size: 36px;
    line-height: 42px;
  `,
  onboardingTitle: `
    font-family: ${markProBold};
    font-size: 22px;
    line-height: 30px;
  `,
  onboardingInput: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
  `,
  title1: `
    font-family: ${markProBold};
    font-size: 20px;
    line-height: 26px;
  `,
  title2: `
    font-family: ${markProBold};
    font-size: 18px;
    line-height: 24px;
  `,
  title3: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
  `,
  headline: `
    font-family: ${markProBold};
    font-size: 17px;
    line-height: 22px;
  `,
  bodyMedium: `
    font-family: ${systemFont};
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    ${bodyColor}
  `,
  bodyMediumCondensed: `
    font-family: ${systemFont};
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    ${bodyColor}
  `,
  body: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    ${bodyColor}
  `,
  footnote: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  footnoteCondensed: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  `,
  caption1: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
  `,
  caption2: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
  button1: `
    font-family: ${markProBold};
    font-size: 18px;
    line-height: 24px;
  `,
  button2: `
    font-family: ${markProBold};
    font-size: 16px;
    line-height: 20px;
  `,
  button3: `
    font-family: ${markProBold};
    font-size: 13px;
    line-height: 16px;
  `,

  // Special cases:
  // Only use for the MEMBER badge on users
  tenPixelBold: `  
    font-family: ${markProBold};
    font-size: 10px;
  `,
  // Used on the Landing pages to switch between signup/signing/forgotpassword
  landingMessage: `  
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  `,
  landingCta: `  
    font-family: ${systemFont};
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  `,
  keypad: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 28px;
    line-height: 50px;
  `
};

const typeProps = {
  xs: `font-size: 13px;`,
  'size-xs': `font-size: 13px;`,
  s: `font-size: 14px;`,
  'size-s': `font-size: 14px;`,
  'size-m': `font-size: 15px;`,
  l: `font-size: 16px;`,
  'size-l': `font-size: 16px;`,
  xl: `font-size: 22px;`,
  'size-xl': `font-size: 22px;`,
  title: `font-size: 25px;`,
  'size-title': `font-size: 25px;`,
  xxl: `font-size: 27px;`,
  'size-xxl': `font-size: 27px;`,
  'size-amount': `font-size: 36px;`,
  alignLeft: `text-align: left;`,
  alignCenter: `text-align: center;`,
  alignRight: `text-align: right;`,
  lineHeight18: `line-height: 18px;`,
  lineHeight24: `line-height: 24px;`,
  lineHeight30: `line-height: 30px;`,
  lineHeight41: `line-height: 41px;`,
  lh0: `line-height: 0px;`,
  lh18: `line-height: 18px;`,
  lh20: `line-height: 20px;`,
  lh22: `line-height: 22px;`,
  lh24: `line-height: 24px;`,
  lh30: `line-height: 30px;`,
  lh41: `line-height: 41px;`,
  capitalize: 'textTransform: capitalize;',
  lowercase: 'textTransform: lowercase;',
  uppercase: `textTransform: uppercase;`,
  ...fontTraits
};

export const typography = chain(typeProps);

export const typographyProps = Object.keys(typeProps).reduce((accum, key) => {
  let prefixedProps = {
    ...accum,
    [key]: typeProps[key]
  };
  if (containsPhrase(typeProps, key, 'font-family')) {
    prefixedProps = { ...prefixedProps, ['weight-' + key]: typeProps[key] };
  }
  return prefixedProps;
});
