/** @jsx jsx */
import { jsx } from "@emotion/core";

interface PomodoroEmojiProps
  extends Omit<React.ComponentProps<"span">, "role"> {}

export const PomodoroEmoji = (
  props: PomodoroEmojiProps
) => (
  <span role="img" aria-label="pomodoro" {...props}>
    🍅
  </span>
);
