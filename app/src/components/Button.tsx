/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { ComponentProps } from "react";

import { theme } from "../theme";

const { shadow, yellow, black } = theme.colors;

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
      border-radius: 3px;
      transition: all 0.3s ease-out;
      box-shadow: inset 0 -8px 0 0 rgba(0, 0, 0, 0.2), 1px 1px 0 0 ${shadow},
        2px 2px 0 0 ${shadow}, 3px 3px 0 0 ${shadow}, 4px 4px 0 0 ${shadow},
        5px 5px 0 0 ${shadow}, 6px 6px 0 0 ${shadow}, 7px 7px 0 0 ${shadow},
        8px 8px 0 0 ${shadow}, 9px 9px 0 0 ${shadow}, 10px 10px 0 0 ${shadow};

      :focus {
        outline: none;
        border-color: ${black};
      }

      :focus:not([data-focus-visible-added]) {
        border-color: ${shadow};
      }

      :active {
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2), 1px 1px 0 0 ${shadow},
          2px 2px 0 0 ${shadow}, 3px 3px 0 0 ${shadow}, 4px 4px 0 0 ${shadow},
          5px 5px 0 0 ${shadow};
      }
    `}
    {...props}
  />
);
