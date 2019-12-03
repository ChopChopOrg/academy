/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

import { theme } from "../theme";

const {
  colors: { shadow, black, blue },
  borderRadius,
} = theme;

/**
 * @type {React.FC<React.ComponentProps<"button">>}
 */
const Todo = ({ children, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  return ((
    <button
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      onPointerOut={() => setHovered(false)}
      onPointerEnter={() => setHovered(true)}
      type="button"
      css={[
        css`
          width: 100%;
          background: none;
          border: 1px dashed ${shadow};
          border-radius: ${borderRadius.small};
          padding: 1em;
          font-family: inherit;
          font-size: inherit;
          text-align: left;
          cursor: pointer;
          outline-color: ${blue};
        `,
        (hovered || focused) && { borderStyle: "solid" },
        hovered && { borderColor: black },
        focused && { borderColor: shadow },
      ]}
      {...rest}
    >
      <span css={{ marginRight: "0.5em" }}>
        {focused || hovered ? "✅" : "⬜"}
      </span>
      {children}
    </button>
  ));
};

/**
 * @type {React.FC<{
 *   items: string[];
 *   onItemClick: (item: string) => void;
 * }>}
 */
export const TodoList = ({ items, onItemClick }) => {
  return ((
    <ul css={{ padding: 0 }}>
      {items.map(item => (
        <li key={item} css={{ listStyle: "none", marginBottom: "0.5em" }}>
          <Todo onClick={() => onItemClick(item)}>{item}</Todo>
        </li>
      ))}
    </ul>
  ));
};
