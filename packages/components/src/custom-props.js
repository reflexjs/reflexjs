export const customProps = {
  rounded: {
    property: `borderRadius`,
    scale: `radii`,
  },
  roundedTop: {
    properties: [`borderTopLeftRadius`, `borderTopRightRadius`],
    scale: `radii`,
  },
  roundedRight: {
    properties: [`borderTopRightRadius`, `borderBottomRightRadius`],
    scale: `radii`,
  },
  roundedBottom: {
    properties: [`borderBottomLeftRadius`, `borderBottomRightRadius`],
    scale: `radii`,
  },
  roundedLeft: {
    properties: [`borderTopLeftRadius`, `borderBottomLeftRadius`],
    scale: `radii`,
  },
  w: {
    property: `width`,
    scale: `sizes`,
  },
  minW: {
    property: `minWidth`,
    scale: `sizes`,
  },
  maxW: {
    property: `maxWidth`,
    scale: `sizes`,
  },
  h: {
    property: `height`,
    scale: `sizes`,
  },
  minH: {
    property: `minHeight`,
    scale: `sizes`,
  },
  maxH: {
    property: `maxHeight`,
    scale: `sizes`,
  },
  col: {
    property: `gridTemplateColumns`,
    scale: `gridTemplateColumns`,
  },
  colStart: {
    property: `gridColumnStart`,
  },
  colEnd: {
    property: `gridColumnEnd`,
  },
  colGap: {
    property: `gridColumnGap`,
    scale: `space`,
  },
  row: {
    property: `gridTemplateRows`,
    scale: `gridTemplateRows`,
  },
  rowStart: {
    property: `gridRowStart`,
  },
  rowEnd: {
    property: `gridRowEnd`,
  },
  rowGap: {
    property: `gridRowGap`,
    scale: `space`,
  },
  gap: {
    property: `gridGap`,
    scale: `space`,
  },
  autoFlow: {
    property: `gridAutoFlow`,
  },
  d: {
    property: `display`,
  },
  columnGap: {
    property: `columnGap`,
    scale: `space`,
  },
  fill: {
    property: `fill`,
    scale: `colors`,
  },
  columnCount: true,
  cursor: true,
  objectFit: true,
  pointerEvents: true,
  textDecoration: true,
  textTransform: true,
  transition: true,
  transform: true,
  transformOrigin: true,
  userSelect: true,
  visibility: true,
  listStyle: true,
  scrollMarginTop: true,
  outline: true,
  animation: true,
}
