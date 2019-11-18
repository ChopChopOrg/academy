/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

import { theme } from "../theme";

const { shadow, black } = theme.colors;

/**
 * @type {React.FC<React.ComponentProps<"button">>}
 */
const Todo = ({ children, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const focus = () => setFocused(true);
  const defocus = () => setFocused(false);

  return ((
    <button
      onMouseEnter={focus}
      onMouseOut={defocus}
      onBlur={defocus}
      onFocus={focus}
      type="button"
      css={[
        css`
          width: 100%;
          background: none;
          border: 1px dashed ${shadow};
          padding: 1em;
          font-family: inherit;
          font-size: inherit;
          text-align: left;
          cursor: pointer;
        `,
        focused && {
          borderColor: black,
        },
      ]}
      {...rest}
    >
      <span css={{ marginRight: "0.5em" }}>{focused ? "✅" : "⬜"}</span>
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
        <li key={item} css={{ listStyle: "none" }}>
          <Todo onClick={() => onItemClick(item)}>{item}</Todo>
        </li>
      ))}
    </ul>
  ));
};
