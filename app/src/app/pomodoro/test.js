// TODO: Write proper tests here using Jest
// This is just a script to run with Quokka during live coding ATM

import {
  makePomodoroReducer,
  initialState,
} from "../../../pages/pomodoro";

const pomodoroReducer = makePomodoroReducer({
  longBreakSeconds: 15,
  shortBreakSeconds: 5,
  workSeconds: 25,
});

/** @type {import("../../../pages/pomodoro").PomodoroAction[]} */
const actions = [
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  //
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  //
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  //
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
];

// prettier-ignore
const newState = actions.reduce(
  pomodoroReducer, 
  initialState
); // ?

console.assert(newState.currentPeriod === "long-break");
