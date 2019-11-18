/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { ComponentProps } from "react";

import { theme } from "../theme";

const {
  colors: { shadow, yellow, black },
  borderRadius,
  boxShadow,
} = theme;

interface ButtonProps extends ComponentProps<"button"> {}
export const Button: React.FC<ButtonProps> = props => (
  <button
    type="button"
    css={css`
      background: ${yellow};
      color: ${black};
      font-family: inherit;
      font-size: inherit;
      font-weight: bold;
      padding: 0.7em 1em 1em 1em;
      border: 1px solid ${shadow};
      cursor: pointer;
      border-radius: ${borderRadius.small};
      transition: all 0.3s ease-out;
      box-shadow: ${boxShadow.highInset}, ${boxShadow.highOuter};

      :focus {
        outline: none;
        border-color: ${black};
      }

      :focus:not([data-focus-visible-added]) {
        border-color: ${shadow};
      }

      :active {
        box-shadow: ${boxShadow.lowInset}, ${boxShadow.lowOuter};
      }
    `}
    {...props}
  />
);
