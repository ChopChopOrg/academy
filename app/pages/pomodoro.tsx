/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Head from "next/head";
import { useBoolean, useInput } from "react-hanger";
import {
  useReducer,
  useEffect,
  useRef,
  useMemo,
} from "react";

import {
  Button,
  A,
  BigText,
  useSound,
  notify,
  LabeledButton,
} from "../src/lib";
import {
  PageLayout,
  incrementCheckmarks,
  formatRemainingTime,
  PomodoroEmoji,
} from "../src/app";
import { theme } from "../src/theme";

const WORK_MINUTES = 25;

const {
  colors: { shadow, gray },
} = theme;

type LearnMoreSectionProps = React.ComponentProps<
  "section"
>;
const LearnMoreSection: React.FC<LearnMoreSectionProps> = props => (
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
);

const usePomodoroSettings = () => {
  const persisted = useMemo(() => {
    return JSON.parse(
      (typeof localStorage !== "undefined" &&
        localStorage.getItem("pomodoro-settings")) ||
        "{}"
    );
  }, []);

  const shortBreakTime = useInput(
    persisted.shortBreakTime || 5
  );
  const longBreakTime = useInput(
    persisted.longBreakTime || 15
  );
  const secondsInsteadOfMinutes = useBoolean(
    persisted.secondsInsteadOfMinutes || false
  );

  useEffect(() => {
    return () => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          "pomodoro-settings",
          JSON.stringify({
            shortBreakTime: shortBreakTime.value,
            longBreakTime: longBreakTime.value,
            secondsInsteadOfMinutes:
              secondsInsteadOfMinutes.value,
          })
        );
      }
    };
  }, [
    shortBreakTime.value,
    longBreakTime.value,
    secondsInsteadOfMinutes.value,
  ]);

  const modifier = secondsInsteadOfMinutes.value ? 1 : 60;

  return {
    shortBreakTime,
    longBreakTime,
    secondsInsteadOfMinutes,
    getValues() {
      return {
        shortBreakSeconds:
          Number(shortBreakTime.value) * modifier,
        longBreakSeconds:
          Number(longBreakTime.value) * modifier,
        workSeconds: WORK_MINUTES * modifier,
      };
    },
  };
};

type Settings = ReturnType<typeof usePomodoroSettings>;
type SettingsValues = ReturnType<Settings["getValues"]>;

interface PomodoroSettingsProps
  extends Settings,
    React.ComponentProps<"div"> {}

const PomodoroSettings = ({
  shortBreakTime,
  longBreakTime,
  secondsInsteadOfMinutes,
  getValues: _,
  ...rest
}: PomodoroSettingsProps) => {
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
      <label>
        Use seconds instead of minutes (useful for
        debugging):
        <input
          type="checkbox"
          checked={secondsInsteadOfMinutes.value}
          onChange={e =>
            secondsInsteadOfMinutes.setValue(
              e.target.checked
            )
          }
        />
      </label>
    </div>
  );
};

const PomodoroTimerFooter = styled.footer({
  margin: "2rem auto 0 0",
});

interface PomodoroTimerHeaderProps {
  currentPeriod: PomodoroState["currentPeriod"];
}

const PomodoroTimerHeader = ({
  currentPeriod,
}: PomodoroTimerHeaderProps) => {
  return (
    <header>
      <h2 css={{ textTransform: "capitalize" }}>
        <PomodoroEmoji /> Pomodoro Timer
        {currentPeriod !== "interaction" &&
          `: ${currentPeriod.replace("-", " ")}`}
      </h2>
    </header>
  );
};

interface CheckmarksProps {
  checkmarks: PomodoroState["checkmarks"];
}
const Checkmarks = ({ checkmarks }: CheckmarksProps) => {
  return (
    <div title="pomodoros completed">
      {Array.from({ length: 4 }).map((_, i) =>
        i < checkmarks ? "✅" : "⬜"
      )}
    </div>
  );
};

type PomodoroTimePeriod =
  | "work"
  | "short-break"
  | "long-break"
  | "interaction";

interface PomodoroState {
  previousPeriod: PomodoroTimePeriod;
  currentPeriod: PomodoroTimePeriod;
  checkmarks: 0 | 1 | 2 | 3 | 4;
  timer: {
    startedAt: number;
    remainingTime: number;
  } | null;
}

type PomodoroAction =
  | { type: "start-work" }
  | { type: "finish-work" }
  | { type: "take-break" }
  | { type: "finish-break" }
  | { type: "abandon" }
  | { type: "tick" };

/**
 * @see https://en.wikipedia.org/wiki/Pomodoro_Technique
 */

export function makePomodoroReducer({
  shortBreakSeconds,
  longBreakSeconds,
  workSeconds,
}: SettingsValues): React.Reducer<
  PomodoroState,
  PomodoroAction
> {
  return function pomodoroReducer(s, action) {
    switch (action.type) {
      case "start-work":
        return {
          ...s,
          previousPeriod: s.currentPeriod,
          currentPeriod: "work",
          timer: {
            startedAt: Date.now(),
            remainingTime: workSeconds,
          },
        };

      case "finish-work": {
        console.assert(s.currentPeriod === "work");
        return {
          ...s,
          previousPeriod: s.currentPeriod,
          currentPeriod: "interaction",
          checkmarks: incrementCheckmarks(s.checkmarks),
          timer: null,
        };
      }

      case "take-break":
        console.assert(s.currentPeriod === "interaction");
        if (s.checkmarks === 4) {
          return {
            ...s,
            previousPeriod: s.currentPeriod,
            currentPeriod: "long-break",
            checkmarks: 0,
            timer: {
              startedAt: Date.now(),
              remainingTime: longBreakSeconds,
            },
          };
        }
        return {
          ...s,
          previousPeriod: s.currentPeriod,
          currentPeriod: "short-break",
          timer: {
            startedAt: Date.now(),
            remainingTime: shortBreakSeconds,
          },
        };

      case "finish-break":
        console.assert(
          s.currentPeriod === "short-break" ||
            s.currentPeriod === "long-break"
        );

        return {
          ...s,
          previousPeriod: s.currentPeriod,
          currentPeriod: "interaction",
          timer: null,
        };

      case "abandon":
        return {
          previousPeriod: "interaction",
          currentPeriod: "interaction",
          checkmarks: 0,
          timer: null,
        };

      case "tick":
        if (!s.timer) {
          console.error("cant tick");
          return s;
        }

        if (s.timer.remainingTime === 0) {
          return {
            ...s,
            timer: null,
          };
        }

        return {
          ...s,
          timer: {
            startedAt: s.timer.startedAt,
            remainingTime: s.timer.remainingTime - 1,
          },
        };

      default:
        throw new Error(
          `Action not handled: ${JSON.stringify(action)}`
        );
    }
  };
}

export const initialState: PomodoroState = {
  previousPeriod: "interaction",
  currentPeriod: "interaction",
  checkmarks: 0,
  timer: null,
};

const PomodoroTimer = () => {
  const showSettings = useBoolean(false);
  const settings = usePomodoroSettings();

  const settingsValues = settings.getValues();

  const [
    { checkmarks, previousPeriod, currentPeriod, timer },
    dispatch,
  ] = useReducer(
    makePomodoroReducer(settingsValues),
    initialState
  );

  const interval = useRef<NodeJS.Timeout | undefined>();
  useEffect(() => {
    // clean up interval on unmount
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  const playAlarmSound = useSound(
    "198841__bone666138__analog-alarm-clock.wav"
  );

  useEffect(() => {
    if (!timer) {
      return;
    }

    if (timer.remainingTime === 0) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      interval.current = undefined;

      playAlarmSound();
      if (currentPeriod === "work") {
        dispatch({ type: "finish-work" });
        notify("Work finished");
      } else {
        dispatch({ type: "finish-break" });
        notify("Break finished");
      }
    } else if (!interval.current) {
      interval.current = setInterval(
        () => dispatch({ type: "tick" }),
        1000
      );
    }
  }, [timer, currentPeriod, playAlarmSound]);

  const {
    longBreakSeconds,
    shortBreakSeconds,
    workSeconds,
  } = settingsValues;

  const nextBreakSeconds =
    checkmarks === 4 ? longBreakSeconds : shortBreakSeconds;

  return (
    <section
      css={{ display: "flex", flexDirection: "column" }}
    >
      <PomodoroTimerHeader currentPeriod={currentPeriod} />
      <div css={{ display: "flex", alignItems: "center" }}>
        <div role="group">
          <LabeledButton
            disabled={
              currentPeriod !== "interaction" ||
              previousPeriod === "work"
            }
            onClick={() => dispatch({ type: "start-work" })}
            seconds={workSeconds}
          >
            Pomodoro
          </LabeledButton>
          <LabeledButton
            disabled={
              currentPeriod !== "interaction" ||
              previousPeriod !== "work"
            }
            onClick={() => dispatch({ type: "take-break" })}
            seconds={nextBreakSeconds}
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

          {timer ? (
            <BigText>
              {formatRemainingTime(timer.remainingTime)}
            </BigText>
          ) : (
            <BigText css={{ color: gray }}>
              {formatRemainingTime(
                previousPeriod !== "work"
                  ? workSeconds
                  : nextBreakSeconds
              )}
            </BigText>
          )}
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
        <Button
          small
          css={{ marginLeft: "1em" }}
          onClick={() => {}}
        >
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
