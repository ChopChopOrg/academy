/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "../../lib/components/Button";
import { theme } from "../../theme";

const {
  colors: { shadow, blue },
  borderRadius,
  mediaQueries,
} = theme;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  border: 1px dashed ${shadow};
  border-radius: ${borderRadius.big};
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
  border-radius: ${borderRadius.small};

  flex: 1 1 auto;

  outline-color: ${blue};
`;

/**
 * @type {React.FC<{
 *   onAdd: (value: string) => void;
 * }>}
 */
export const NewTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */
  const handleChange = e => {
    setText(e.target.value);
  };

  /**
   * @param {React.FormEvent} event
   */
  const handleSubmit = event => {
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
        css={{
          marginRight: "0.5em",
          [mediaQueries.small]: { marginRight: 0 },
        }}
      />
      <Button
        type="submit"
        css={{
          [mediaQueries.small]: { marginLeft: "auto" },
        }}
      >
        Add Todo
      </Button>
    </Form>
  );
};
