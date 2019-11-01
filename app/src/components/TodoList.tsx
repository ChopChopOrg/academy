/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ComponentProps, useState } from "react";

import { theme } from "../theme";

const { shadow, black } = theme.colors;

const Todo = ({ children, ...rest }: ComponentProps<"button">) => {
  const [focused, setFocused] = useState(false);

  const focus = () => setFocused(true);
  const defocus = () => setFocused(false);

  return (
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
  );
};

interface TodoListProps {
  items: string[];
  onItemClick: (item: string) => void;
}
export const TodoList = ({ items, onItemClick }: TodoListProps) => {
  return (
    <ul css={{ padding: 0 }}>
      {items.map(item => (
        <li key={item} css={{ listStyle: "none" }}>
          <Todo onClick={() => onItemClick(item)}>{item}</Todo>
        </li>
      ))}
    </ul>
  );
};
