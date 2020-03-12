import React from 'react';
import * as RN from 'react-native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const parseInt16 = value => parseInt(value, 16);
export const hexToRgba = (h, transparency = 1) => {
  const hexNoHash = h.charAt(0) === '#' ? h.substring(1, 7) : h;
  const { r, g, b } = {
    r: parseInt16(hexNoHash.substring(0, 2)),
    g: parseInt16(hexNoHash.substring(2, 4)),
    b: parseInt16(hexNoHash.substring(4, 6))
  };
  return `rgba(${r},${g},${b},${transparency})`;
};

export const chain = rules => {
  class ChainLink {
    constructor(rules) {
      this.rules = rules;
    }

    toString() {
      return this.rules;
    }
  }

  Object.keys(rules).forEach(option => {
    Object.defineProperty(ChainLink.prototype, option, {
      get() {
        return new ChainLink(this.rules.concat(rules[option]));
      }
    });
  });

  // not all rules have a default so this.rules can end up being:
  // [undefined, 'background-color: pink']. This is ok if ChainLink is used
  // directly in styled-components interpolation but will fail if returned
  // from a function within an interpolation.
  return new ChainLink(rules.default ? [rules.default] : []);
};

export const px = num => (typeof num === 'string' ? num : `${num * 16}px`);

export const camelCase = str =>
  str.replace(/-(\w)/g, (_, r) => r.toUpperCase());
// const kebabCase = str => str.replace(/([A-Z])/g, r => '-' + r.toLowerCase());

export const checkingForDeprecatedTypographyProps = (propStyle, propValue) => {
  const DEPRECATED_TYPOGRAPHY_STYLES = [
    'xs',
    's',
    'm',
    'l',
    'xl',
    'title',
    'xxl'
  ];
  return DEPRECATED_TYPOGRAPHY_STYLES.some(deprecatedStyle => {
    if (propStyle === deprecatedStyle) {
      // "m" is a special case as other props are using the same prop name
      // "m" true means deprecated prop is used
      if (deprecatedStyle === 'm') {
        if (typeof propValue === 'boolean') {
          return propValue;
        } else {
          // if its not a boolean then we check if it used for font-size
          // and if it is then it should be deprecated
          return (
            typeof propValue === 'string' && propValue.includes('font-size')
          );
        }
      }
      return true;
    }
    return false;
  });
};

export const propify = (
  compFn,
  prop_defs,
  default_css,
  attrs_fn = () => ({})
) => styled(props => {
  const comp_name = compFn(props);
  const component = typeof comp_name === 'string' ? RN[comp_name] : comp_name;
  return React.createElement(component, { ...attrs_fn(props), ...props });
})`
  ${default_css};
  ${props =>
    Object.keys(props)
      .map(prop => {
        if (props[prop] === false) return '';

        const isDeprecatedPropUsed = checkingForDeprecatedTypographyProps(
          prop,
          props[prop]
        );

        if (isDeprecatedPropUsed) {
          throw new Error(
            `typographyProp "${prop}" is DEPRECATED, you have to use size-${prop} now!`
          );
        }

        const prop_def = prop_defs[prop] || prop_defs[camelCase(prop)];
        if (typeof prop_def === 'function') {
          return prop_def(props[prop]);
        } else if (typeof prop_def === 'string') {
          return prop_def;
        }
        return '';
      })
      .join('\n')};
  ${props => props.css};
`;

export const containsPhrase = (props, key, phrase) =>
  props[key].includes(phrase);

export const isIphoneSE = Dimensions.get('window').height < 569;
export const isPlus = Dimensions.get('window').width > 413;
export const isTall = Dimensions.get('window').height > 811;
