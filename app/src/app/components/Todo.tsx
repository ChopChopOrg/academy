/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

import { theme } from "../../theme";
import { Button } from "../../lib/components/Button";

const {
  colors: { shadow, black, blue },
  borderRadius,
} = theme;

interface TodoProps
  extends Omit<React.ComponentProps<"div">, "onClick"> {
  onClick?: () => void;
  isDone?: boolean;
  actions?: React.ReactNode;
}

export const Todo = ({
  children,
  onClick,
  isDone,
  actions,
  ...rest
}: TodoProps) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onPointerOut={onClick && (() => setHovered(false))}
      onPointerEnter={onClick && (() => setHovered(true))}
      css={[
        css`
          position: relative;

          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: 1px dashed ${shadow};
          border-radius: ${borderRadius.small};
          padding: 1em;
          font-family: inherit;
          font-size: inherit;
          text-align: left;
          outline-color: ${blue};
        `,
        onClick && { cursor: "pointer" },
        (hovered || focused) && { borderStyle: "solid" },
        hovered && { borderColor: black },
        focused && {
          borderColor: shadow,
          outlineColor: blue,
          outlineStyle: "auto",
        },
      ]}
      {...rest}
    >
      {onClick && (
        <Button
          variant="reset"
          onClick={onClick}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          `}
        />
      )}
      <div css={{ zIndex: 1 }}>
        <span css={{ marginRight: "0.5em" }}>
          {focused || hovered || isDone ? "✅" : "⬜"}
        </span>
        {children}
      </div>
      {actions && (
        <div role="group" css={{ zIndex: 1 }}>
          {actions}
        </div>
      )}
    </div>
  );
};
