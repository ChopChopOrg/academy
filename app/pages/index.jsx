/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useCallback } from "react";
import Head from "next/head";

import { PageLayout, NewTodoForm, TodoList } from "../src/components";
import { theme } from "../src/theme";

const Index = () => {
  const [items, setItems] = useState(["build a todo app"]);

  const handleAdd = useCallback(
    text => {
      setItems([...items, text]);
    },
    [items]
  );

  const handleItemClick = useCallback(
    item => {
      const copy = [...items];
      const index = items.indexOf(item);
      copy.splice(index, 1);
      setItems(copy);
    },
    [items]
  );

  return (
    <PageLayout>
      <Head>Todo App</Head>
      <div
        css={{
          margin: "auto",
          padding: "1em",
          width: "80ch",
          maxWidth: "100%",
          [theme.mediaQueries.small]: {
            padding: 4,
          },
        }}
      >
        <h1>Todo List</h1>
        <NewTodoForm onAdd={handleAdd} />
        <TodoList items={items} onItemClick={handleItemClick} />
      </div>
    </PageLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
