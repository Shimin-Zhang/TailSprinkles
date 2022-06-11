import {
    defineProperties,
    createSprinkles,
 } from '@vanilla-extract/sprinkles';

 import palette from './colors.css';

  const space = {
    none: 0,
    small: '4px',
    medium: '8px',
    large: '16pxl'
    // etc.
  };
  
  const colorProperties = defineProperties({
    conditions: {
      lightMode: {},
      darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
      color: palette,
      background: palette
    }
  });
  
  export const sprinkles = createSprinkles(
    colorProperties
  );
  
  // It's a good idea to export the Sprinkles type too
  export type Sprinkles = Parameters<typeof sprinkles>[0];