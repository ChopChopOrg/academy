/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Head from "next/head";
import { useBoolean, useInput } from "react-hanger";
import {
  useReducer,
  Fragment,
  useState,
  useEffect,
} from "react";

import { Button } from "../src/components/Button";
import { PageLayout } from "../src/components";
import { A } from "../src/components/A";
import { theme } from "../src/theme";
import { incrementCheckmarks } from "../src/pomodoro";
import { BigText } from "../src/components/BigText";

const {
  colors: { shadow },
} = theme;

/**
 * @param {Omit<React.ComponentProps<"span">, 'role'>} props
 */
const PomodoroEmoji = props => (
  <span role="img" aria-label="pomodoro" {...props}>
    🍅
  </span>
);

/**
 * @param {{
 *   minutes: number,
 *   children: React.ReactNode,
 * } & import("../src/components/Button").ButtonProps} props
 */
const LabeledButton = ({
  minutes,
  children,
  disabled,
  ...rest
}) => {
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
        css={{
          marginLeft: "1em",
          width: "6em",
        }}
        {...rest}
      >
        {minutes} min
      </Button>
    </label>
  );
};

/**
 * @type {React.FC<React.ComponentProps<"section">>}
 */
const LearnMoreSection = props => ((
  <section
    css={{
      borderTop: `1px solid ${shadow}`,
      padding: "1em 0",
    }}
    {...props}
  >
    <A href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
      Learn more about Pomodoro Technique on Wikipedia
    </A>
  </section>
));

const usePomodoroSettings = () => {
  const shortBreakTime = useInput(5);
  const longBreakTime = useInput(15);

  return {
    shortBreakTime,
    longBreakTime,
  };
};

/**
 * @param {ReturnType<typeof usePomodoroSettings> & React.ComponentProps<"div">} props
 */
const PomodoroSettings = ({
  shortBreakTime,
  longBreakTime,
  ...rest
}) => {
  return (
    <div
      role="group"
      css={{
        border: "1px dashed",
        borderColor: shadow,
        padding: "1em",
        label: {
          display: "block",
        },
      }}
      {...rest}
    >
      <label>
        Short break:
        <input
          type="range"
          min={3}
          max={5}
          step={1}
          {...shortBreakTime.eventBind}
        />
      </label>
      <label>
        Long break:
        <input
          type="range"
          min={15}
          max={30}
          step={1}
          {...longBreakTime.eventBind}
        />
      </label>
    </div>
  );
};

/**
 * @param {{ durationSeconds: number }} props
 */
const RemainingTime = ({ durationSeconds }) => {
  const [remainingTime, setRemainingTime] = useState(
    durationSeconds
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(time => {
        if (time === 1) {
          clearInterval(interval);
        }
        return time - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [durationSeconds]);

  return <Fragment>{remainingTime}</Fragment>;
};

const PomodoroTimerFooter = styled.footer({
  margin: "2rem auto 0 0",
});

/**
 * @param {{ currentTimespan: PomodoroState['currentTimespan'] }} props
 */
const PomodoroTimerHeader = ({ currentTimespan }) => {
  return (
    <header>
      <h2 css={{ textTransform: "capitalize" }}>
        <PomodoroEmoji /> Pomodoro Timer
        {currentTimespan !== "interaction" &&
          `: ${currentTimespan.replace("-", " ")}`}
      </h2>
    </header>
  );
};

/**
 * @param {{ checkmarks: PomodoroState['checkmarks'] }} props
 */
const Checkmarks = ({ checkmarks }) => {
  return (
    <div title="pomodoros completed">
      {Array.from({ length: 4 }).map((_, i) =>
        i < checkmarks ? "✅" : "⬜"
      )}
    </div>
  );
};

/**
 * @see https://en.wikipedia.org/wiki/Pomodoro_Technique
 * @typedef {{
 *   currentTimespan: 'work' | 'short-break' | 'long-break' | 'interaction',
 *   checkmarks: 0 | 1 | 2 | 3 | 4,
 *   timer: { startedAt: number } | null,
 * }} PomodoroState
 * @typedef {{
 *   type: 'start-work',
 * } | {
 *   type: 'finish-work',
 * } | {
 *   type: 'take-break',
 * } | {
 *   type: 'finish-break',
 * } | {
 *   type: 'abandon',
 * }} PomodoroAction
 * @type {React.Reducer<PomodoroState, PomodoroAction>}
 */
const pomodoroReducer = (s, action) => {
  switch (action.type) {
    case "start-work":
      return {
        ...s,
        currentTimespan: "work",
        timer: { startedAt: Date.now() },
      };

    case "finish-work": {
      console.assert(s.currentTimespan === "work");
      return {
        ...s,
        currentTimespan: "interaction",
        checkmarks: incrementCheckmarks(s.checkmarks),
        timer: null,
      };
    }

    case "take-break":
      console.assert(s.currentTimespan === "interaction");
      if (s.checkmarks === 4) {
        return {
          ...s,
          currentTimespan: "long-break",
          checkmarks: 0,
          timer: { startedAt: Date.now() },
        };
      }
      return {
        ...s,
        currentTimespan: "short-break",
        timer: { startedAt: Date.now() },
      };

    case "finish-break":
      console.assert(
        s.currentTimespan === "short-break" ||
          s.currentTimespan === "long-break"
      );

      return {
        ...s,
        currentTimespan: "interaction",
        timer: null,
      };

    case "abandon":
      return {
        currentTimespan: "interaction",
        checkmarks: 0,
        timer: null,
      };

    default:
      throw new Error(
        `Action not handled: ${JSON.stringify(action)}`
      );
  }
};

/** @type {PomodoroState} */
const initialState = {
  currentTimespan: "interaction",
  checkmarks: 0,
  timer: null,
};

const PomodoroTimer = () => {
  const showSettings = useBoolean(false);
  const settings = usePomodoroSettings();

  const shortBreakMinutes = Number(
    settings.shortBreakTime.value
  );
  const longBreakMinutes = Number(
    settings.longBreakTime.value
  );

  const [
    { checkmarks, currentTimespan, timer },
    dispatch, // <- TODO 🍅
  ] = useReducer(pomodoroReducer, initialState);

  return (
    <section
      css={{ display: "flex", flexDirection: "column" }}
    >
      <PomodoroTimerHeader
        currentTimespan={currentTimespan}
      />
      <div css={{ display: "flex", alignItems: "center" }}>
        <div role="group">
          <LabeledButton
            disabled={currentTimespan !== "interaction"}
            onClick={() => alert("work")}
            minutes={25}
          >
            Pomodoro
          </LabeledButton>
          <LabeledButton
            disabled={currentTimespan !== "interaction"}
            onClick={() => alert("take-break")}
            minutes={
              checkmarks === 4
                ? longBreakMinutes
                : shortBreakMinutes
            }
          >
            Take a break
          </LabeledButton>
        </div>
        <div
          css={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Checkmarks checkmarks={checkmarks} />
          <BigText>
            {timer ? (
              <RemainingTime
                durationSeconds={
                  currentTimespan === "long-break"
                    ? longBreakMinutes
                    : currentTimespan === "short-break"
                    ? shortBreakMinutes
                    : 25 // * 60
                  //         ☝ we'll use seconds instead of minutes
                  //            for the purposes of live coding
                }
              />
            ) : (
              "25:00"
            )}
          </BigText>
        </div>
      </div>
      {showSettings.value && (
        <PomodoroSettings
          {...settings}
          css={{ marginTop: "1em" }}
        />
      )}
      <PomodoroTimerFooter>
        <Button small onClick={showSettings.toggle}>
          {showSettings.value ? "Hide" : "Show"} Settings
        </Button>
        <Button small css={{ marginLeft: "1em" }}>
          Abandon and reset timers
        </Button>
      </PomodoroTimerFooter>
    </section>
  );
};

const PomodoroPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Pomodoro ▪ Chop-Chop Academy</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/tomato.png"
        />
      </Head>
      <PageLayout.Margin>
        <PomodoroTimer />
        <LearnMoreSection css={{ marginTop: "2em" }} />
      </PageLayout.Margin>
    </PageLayout>
  );
};

export default PomodoroPage;
