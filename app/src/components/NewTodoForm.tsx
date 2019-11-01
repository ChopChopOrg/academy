/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "./Button";
import { theme } from "../theme";

const { shadow, blue } = theme.colors;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border: 1px dashed ${shadow};
  border-radius: 10px;
  padding: 1em;

  > * {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  padding: 0.7em 1em;
  border: 1px dashed ${shadow};
  border-radius: 3px;

  flex: 1 1 auto;

  outline-color: ${blue};
`;

interface NewTodoFormProps {
  onAdd: (value: string) => void;
}
export const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={text}
        onChange={handleChange}
        placeholder="Do something awesome!"
        css={{ marginRight: "0.5em" }}
      />
      <Button type="submit">Add Todo</Button>
    </Form>
  );
};
