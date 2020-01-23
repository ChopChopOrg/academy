/** @jsx jsx */
import { jsx, css, Interpolation } from "@emotion/core";
import React, { ComponentProps } from "react";

import { theme } from "../../theme";

const {
  colors: { shadow, yellow, black, blue, gray },
  borderRadius,
  boxShadow,
} = theme;

type ButtonVariant = "3d" | "reset";

// #region styles
const _3dStyles = css`
  color: ${black};
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;

  background: ${yellow};
  border: 1px solid ${shadow};
  border-radius: ${borderRadius.small};
  padding: 0.7em 1em 1em 1em;

  :not(:disabled) {
    cursor: pointer;

    :focus {
      outline: none;
      border-color: ${black};
    }

    :focus:not([data-focus-visible-added]) {
      border-color: ${shadow};
    }
  }
  :disabled {
    background-color: ${gray};
  }
`;

const resetStyles = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  outline-color: ${blue};
`;

// #endregion styles

const variants: Record<
  ButtonVariant,
  (props: ButtonProps) => Interpolation
> = {
  "3d": props => [
    _3dStyles,
    props.small
      ? {
          transition: "box-shadow 0.2s ease-out",
          boxShadow: `${boxShadow.mediumInset}, ${boxShadow.mediumOuter}`,
          ":active": {
            boxShadow: `${boxShadow.lowestInset}, ${boxShadow.lowestOuter}`,
          },
        }
      : {
          transition: "box-shadow 0.25s ease-out",
          boxShadow: `${boxShadow.highInset}, ${boxShadow.highOuter}`,
          ":active": {
            boxShadow: `${boxShadow.lowInset}, ${boxShadow.lowOuter}`,
          },
        },
    props.isActive &&
      css`
        box-shadow: ${boxShadow.lowInset},
          ${boxShadow.lowOuter};
      `,
  ],
  reset: () => resetStyles,
};

export interface ButtonProps
  extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  isActive?: boolean;
  small?: boolean;
}
export const Button: React.FC<ButtonProps> = props => {
  const {
    variant = "3d",
    small,
    isActive: _,
    ...rest
  } = props;

  return (
    <button
      type="button"
      css={[
        variants[variant](props),
        small && {
          background: "white",
          fontSize: "0.8em",
          fontWeight: 500,
        },
      ]}
      {...rest}
    />
  );
};
