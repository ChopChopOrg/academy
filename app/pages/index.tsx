/** @jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";

import { Button } from "../src/lib";
import { PageLayout, NewTodoForm, Todo } from "../src/app";
import {
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useSetCompletedMutation,
  useGetDoneTodosSubscription,
  useGetTodoTodosSubscription,
} from "../src/generated/graphql";
import { Loader } from "../src/lib/components/Loader";

const Index = () => {
  const { data: doneData } = useGetDoneTodosSubscription();
  const { data: todoData } = useGetTodoTodosSubscription();

  const [addTodo] = useAddNewTodoMutation();
  const [removeTodo] = useDeleteTodoMutation();
  const [setCompleted] = useSetCompletedMutation();

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
          onAdd={title => {
            addTodo({
              variables: { title },
            });
          }}
        />
        {todoData ? (
          <ul css={{ padding: 0 }}>
            {todoData.todo.map((todo, i) => (
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
                    setCompleted({
                      variables: {
                        id: todo.id,
                      },
                    });
                  }}
                  actions={
                    <Button
                      css={{ backgroundColor: "white" }}
                      onClick={() => {
                        removeTodo({
                          variables: {
                            id: todo.id,
                          },
                        });
                      }}
                    >
                      Cancel
                    </Button>
                  }
                >
                  {todo.title}
                </Todo>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
        <h2>Done</h2>
        {doneData ? (
          <ul css={{ padding: 0 }}>
            {doneData.done.map((todo, i) => (
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
                      // eslint-disable-next-line sonarjs/no-identical-functions
                      onClick={() => {
                        removeTodo({
                          variables: {
                            id: todo.id,
                          },
                        });
                      }}
                    >
                      Forget
                    </Button>
                  }
                >
                  {todo.title}
                </Todo>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </PageLayout.Margin>
    </PageLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
