/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ButtonProps, Button } from "..";

interface LabeledButtonProps extends ButtonProps {
  seconds: number;
  children: React.ReactNode;
}

export const LabeledButton = ({
  seconds,
  children,
  disabled,
  ...rest
}: LabeledButtonProps) => {
  return (
    <label
      css={[
        { display: "block" },
        !disabled && {
          cursor: "pointer",
          ":hover > span": {
            textDecoration: "underline",
          },
        },
      ]}
    >
      <span
        css={{ display: "inline-block", width: "5.5em" }}
      >
        {children}
      </span>
      <Button
        disabled={disabled}
        css={{
          marginLeft: "1em",
          width: "6em",
        }}
        {...rest}
      >
        {seconds > 60
          ? `${Math.round(seconds / 60)} min`
          : `${seconds} sec`}
      </Button>
    </label>
  );
};
