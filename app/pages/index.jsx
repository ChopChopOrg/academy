/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useCallback } from "react";
import Head from "next/head";

import {
  PageLayout,
  NewTodoForm,
  TodoList,
} from "../src/components";

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
      <Head>
        <title>Todo App ▪ Chop-Chop Academy</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.png"
        />
      </Head>
      <PageLayout.Margin>
        <h1>Todo List</h1>
        <NewTodoForm onAdd={handleAdd} />
        <TodoList
          items={items}
          onItemClick={handleItemClick}
        />
      </PageLayout.Margin>
    </PageLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
