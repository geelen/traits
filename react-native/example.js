import { Colors } from './colors';
import { chain, px } from './helpers';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { typography, typographyProps, systemFont } from './typography';

// color props
export const colorProps = Object.keys(Colors).reduce(
  (accum, key) => ({
    ...accum,
    [key]: `color: ${Colors[key]};`,
    ['bg-' + key]: `background-color: ${Colors[key]}`,
    ['bc-' + key]: `border-color: ${Colors[key]}`,
    ['tint-' + key]: `tint-color: ${Colors[key]}`
  }),
  {}
);

export { typography, typographyProps, systemFont };

// border props
const borderValues = {
  full: `border-width: 1px;`,
  double: `border-width: 2px;`,
  half: `border-width: 0.5px;`,
  fullTop: `border-top-width: 1px;`,
  fullBottom: `border-bottom-width: 1px;`,
  fullLeft: `border-left-width: 1px;`,
  fullRight: `border-right-width: 1px;`,
  blueLighten60: `border-color: ${Colors.blueLighten60};`,
  grayLighten35: `border-color: ${Colors.grayLighten35};`,
  silverBase: `border-color: ${Colors.silverBase};`,
  orangeBase: `border-color: ${Colors.orangeBase};`,
  blueLighten5: `border-color: ${Colors.blueLighten5};`,
  blueAlpha14: `border-color: ${Colors.blueAlpha14};`,
  white: `border-color: ${Colors.white};`,
  redBase: `border-color: ${Colors.redBase};`,
  whiteAlpha14: `border-color: ${Colors.whiteAlpha14};`,
  silverDarken3: `border-color: ${Colors.silverDarken3};`,
  rad2: `border-radius: 2px;`,
  rad6: `border-radius: 6px;`,
  rad4: `border-radius: 4px;`,
  rad13: `border-radius: 13px;`,
  dashed: `border-style: dashed;`
};
export const borders = chain(borderValues);

const borderPrefix = 'br-';
export const borderProps = Object.keys(borderValues).reduce((accum, key) => ({
  ...accum,
  [borderPrefix + key]: borderValues[key]
}));

// box/flex props
export const boxProps = {
  row: 'flex-direction: row;',
  center: `justify-content: center; align-items: center;`,
  'center-both': `justify-content: center; align-items: center;`,
  'a-center': 'align-items: center',
  'a-start': `align-items: flex-start;`,
  'a-end': `align-items: flex-end;`,
  'a-baseline': `align-items: baseline;`,
  'a-stretch': `align-items: stretch;`,
  'align-center': 'align-items: center',
  'align-start': `align-items: flex-start;`,
  'align-end': `align-items: flex-end;`,
  'align-baseline': `align-items: baseline;`,
  'align-stretch': `align-items: stretch;`,
  'justify-center': `justify-content: center;`,
  'justify-start': `justify-content: flex-start;`,
  'justify-end': `justify-content: flex-end;`,
  'justify-space-btw': `justify-content: space-between;`,
  'justify-space-around': `justify-content: space-around;`,
  'j-center': `justify-content: center;`,
  'j-start': `justify-content: flex-start;`,
  'j-end': `justify-content: flex-end;`,
  'j-space-btw': `justify-content: space-between;`,
  'j-space-around': `justify-content: space-around;`,
  'half-width': `width: 50%;`,
  b: `border-width: 1px;`,
  'b-double': `border-width: 2px;`,
  'b-half': `border-width: 0.5px;`,
  'b-top': `border-top-width: 1px;`,
  'b-bottom': `border-bottom-width: 1px;`,
  'b-left': `border-left-width: 1px;`,
  'b-right': `border-right-width: 1px;`,
  'rad-2': `border-radius: 2px;`,
  'rad-4': `border-radius: 4px;`,
  'rad-6': `border-radius: 6px;`,
  'rad-13': `border-radius: 13px;`,
  wrap: `flex-wrap: wrap;`,
  'mt-auto': `margin-top: auto;`,
  mtStatusBar: `margin-top: ${getStatusBarHeight()}px`,
  'disabled-fade': `opacity: 0.4`
};

export const altSpacingProps = {
  h100: 'height: 100%;',
  w100: 'width: 100%;',
  absolute: 'position: absolute;'
};

// spacing props
export const spacingProps = {
  p: num => `padding: ${px(num)};`,
  pv: num => `padding-top: ${px(num)}; padding-bottom: ${px(num)};`,
  ph: num => `padding-left: ${px(num)}; padding-right: ${px(num)};`,
  pt: num => `padding-top: ${px(num)};`,
  pl: num => `padding-left: ${px(num)};`,
  pb: num => `padding-bottom: ${px(num)};`,
  pr: num => `padding-right: ${px(num)};`,

  m: num => `margin: ${px(num)};`,
  mv: num => `margin-top: ${px(num)}; margin-bottom: ${px(num)};`,
  mh: num => `margin-left: ${px(num)}; margin-right: ${px(num)};`,
  mt: num => `margin-top: ${px(num)};`,
  ml: num => `margin-left: ${px(num)};`,
  mb: num => `margin-bottom: ${px(num)};`,
  mr: num => `margin-right: ${px(num)};`,

  height: num => `height: ${px(num)};`,
  width: num => `width: ${px(num)};`,
  size: num => `width: ${px(num)}; height: ${px(num)};`,

  grow: num => `flex-grow: ${typeof num === 'number' ? num : 1};`,
  shrink: num => `flex-shrink: ${typeof num === 'number' ? num : 1};`,
  flex: num => `flex: ${typeof num === 'number' ? num : 1}`,

  top: num => (typeof num === 'number' ? `top: ${num}px;` : ''),
  bottom: num => (typeof num === 'number' ? `bottom: ${num}px;` : ''),
  right: num => (typeof num === 'number' ? `right: ${num}px;` : ''),
  left: num => (typeof num === 'number' ? `left: ${num}px;` : '')
};

const spacingTraits = Object.keys(spacingProps).reduce(
  (accum, key) => ({
    ...accum,
    [key + '0']: spacingProps[key](0),
    [key + '05']: spacingProps[key](0.5),
    [key + '075']: spacingProps[key](0.75),
    [key + '1']: spacingProps[key](1),
    [key + '15']: spacingProps[key](1.5),
    [key + '2']: spacingProps[key](2)
  }),
  {}
);
export const spacing = chain(spacingTraits);
