/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useReducer } from "react";
import Head from "next/head";

import {
  PageLayout,
  NewTodoForm,
  Todo,
  Button,
} from "../src/components";

/**
 * @template T
 * @param {Array<T>} xs
 * @param {number} index
 */
function removeByIndex(xs, index) {
  return xs.filter((_, i) => i !== index);
}

/**
 * @param {{
 *   todo: string[];
 *   done: string[];
 * }} state
 * @param {{
 *   type: 'add',
 *   payload: string
 * } | {
 *   type: 'complete',
 *   payload: number
 * } | {
 *   type: 'forget',
 *   payload: number
 * } | {
 *   type: 'cancel',
 *   payload: number
 * }} action
 */
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "complete":
      return {
        todo: removeByIndex(state.todo, action.payload),
        done: [...state.done, state.todo[action.payload]],
      };
    case "cancel":
      return {
        ...state,
        todo: removeByIndex(state.todo, action.payload),
      };
    case "forget":
      return {
        ...state,
        done: removeByIndex(state.done, action.payload),
      };
    default:
      throw new Error(
        `${JSON.stringify(action)} action not handled`
      );
  }
}

const initialState = {
  todo: ["Be awesome"],
  done: [],
};

const Index = () => {
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  return (
    <PageLayout>
      <Head>
        <title>Todo App ▪ Chop-Chop Academy</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.png"
        />
      </Head>
      <PageLayout.Margin>
        <h2>Todo List</h2>
        <NewTodoForm
          onAdd={todo => {
            dispatch({
              type: "add",
              payload: todo,
            });
          }}
        />
        <ul css={{ padding: 0 }}>
          {state.todo.map((todo, i) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              css={{
                listStyle: "none",
                marginBottom: "0.5em",
              }}
            >
              <Todo
                onClick={() => {
                  dispatch({
                    type: "complete",
                    payload: i,
                  });
                }}
                actions={
                  <Button
                    css={{ backgroundColor: "white" }}
                    onClick={() => {
                      dispatch({
                        type: "cancel",
                        payload: i,
                      });
                    }}
                  >
                    Cancel
                  </Button>
                }
              >
                {todo}
              </Todo>
            </li>
          ))}
        </ul>
        <h2>Done</h2>
        <ul css={{ padding: 0 }}>
          {state.done.map((todo, i) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              css={{
                listStyle: "none",
                marginBottom: "0.5em",
              }}
            >
              <Todo
                isDone
                actions={
                  <Button
                    css={{ backgroundColor: "white" }}
                    onClick={() => {
                      dispatch({
                        type: "forget",
                        payload: i,
                      });
                    }}
                  >
                    Forget
                  </Button>
                }
              >
                {todo}
              </Todo>
            </li>
          ))}
        </ul>
      </PageLayout.Margin>
    </PageLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
