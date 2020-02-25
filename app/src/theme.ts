const breakpoints = ["40em", "56em", "64em"];

const colors = {
  yellow: "#FFCC00",
  blue: "#00B9FD",
  black: "#000000",
  white: "#FFFFFF",
  shadow: "#e5e5e5",
  gray: "#d2d2d2",
};

const boxShadow = {
  highInset: "inset 0 -8px 0 0 rgba(0, 0, 0, 0.2)",
  highOuter: `1px 1px 0 0 ${colors.shadow}, 2px 2px 0 0 ${colors.shadow},
    3px 3px 0 0 ${colors.shadow}, 4px 4px 0 0 ${colors.shadow},
    5px 5px 0 0 ${colors.shadow}, 6px 6px 0 0 ${colors.shadow},
    7px 7px 0 0 ${colors.shadow}, 8px 8px 0 0 ${colors.shadow},
    9px 9px 0 0 ${colors.shadow}, 10px 10px 0 0 ${colors.shadow}`,
  mediumInset: "inset 0 -6px 0 0 rgba(0, 0, 0, 0.2)",
  mediumOuter: `1px 1px 0 0 ${colors.shadow}, 2px 2px 0 0 ${colors.shadow},
      3px 3px 0 0 ${colors.shadow}, 4px 4px 0 0 ${colors.shadow},
      5px 5px 0 0 ${colors.shadow}, 6px 6px 0 0 ${colors.shadow}`,
  lowInset: `inset 0 -4px 0 0 rgba(0, 0, 0, 0.2)`,
  lowOuter: `1px 1px 0 0 ${colors.shadow}, 2px 2px 0 0 ${colors.shadow},
    3px 3px 0 0 ${colors.shadow}, 4px 4px 0 0 ${colors.shadow},
    5px 5px 0 0 ${colors.shadow}`,
  lowestInset: `inset 0 -2px 0 0 rgba(0, 0, 0, 0.2)`,
  lowestOuter: `1px 1px 0 0 ${colors.shadow}, 2px 2px 0 0 ${colors.shadow}`,
};

const borderRadius = {
  small: "3px",
  big: "10px",
};

export const theme = {
  borderRadius,
  boxShadow,
  colors,
  breakpoints,
  mediaQueries: {
    small: `@media screen and (max-width: ${breakpoints[0]})`,
    medium: `@media screen and (max-width: ${breakpoints[1]})`,
  },
};
