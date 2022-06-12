import {
  defineProperties,
  createSprinkles,
} from '@vanilla-extract/sprinkles';

import palette from './colors.css';
import { fontFamily, fontWeight, lineHeight, fontSize } from './typography.css';
import { size, space, position} from './size.css';
import { borderSize, borderRadius, shadows } from './border.css';
import { style } from '@vanilla-extract/css';


const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'tablet',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'baseline'
    ],
    flex: {
      '1': '1 1 0%',
      'auto': '1 1 0%',
      'initial': '1 1 0%',
      'none': 'none'
    },
    flexWrap: ['wrap', 'wrap-reverse', 'nowrap'],
    position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    width: {... size, 'screen': '100vw' },
    height: {... size, 'screen': '100vh'},
    top: position,
    left: position, 
    bottom: position,
    right: position,
    objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down']
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: [
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight'
    ],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    inset: [
      'top', 
      'left', 
      'right', 
      'bottom'
    ]
  }
});


const systemProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: palette,
    background: palette,
    borderColor: palette,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    borderRadius: borderRadius,
    borderTopWidth: borderSize,
    borderLeftWidth: borderSize,
    borderBottomWidth: borderSize,
    borderRightWidth: borderSize,
    borderWidth: borderSize,
    boxShadow: shadows,
  }
});

export const sprinklesTailwind = createSprinkles(
  responsiveProperties,
  systemProperties
);

export const srOnly = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0'
});

export const clickable = style ({
  ':hover': {
    cursor: 'pointer'
  }
})

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinklesTailwind >[0];
