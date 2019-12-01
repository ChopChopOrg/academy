// TODO: Write proper tests here using Jest
// This is just a script to run with Quokka during live coding ATM

import { pomodoroReducer, initialState } from "../pomodoro";

/** @type {import("../pomodoro").PomodoroAction[]} */
const actions = [
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
  { type: "finish-break" },
  { type: "start-work" },
  { type: "finish-work" },
  { type: "take-break" },
];

// prettier-ignore
const newState = actions.reduce(
  pomodoroReducer, 
  initialState
); // ?

console.assert(newState.currentTimespan === "long-break");
