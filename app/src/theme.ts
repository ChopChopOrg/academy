/**
 * Based on System UI spec
 * @see https://system-ui.com/theme/
 */

const breakpoints = ["420px"];

export const theme = {
  colors: {
    yellow: "#FFCC00",
    blue: "#00B9FD",
    black: "#000000",
    white: "#FFFFFF",
    shadow: "#e5e5e5",
  },
  breakpoints,
  mediaQueries: {
    small: `@media screen and (max-width: ${breakpoints[0]})`,
  },
};
