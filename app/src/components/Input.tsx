import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
`;

interface InputProps {
  onAdd: (value: string) => void;
}
export const Input: React.FC<InputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = useCallback(e => {
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    onAdd(text);
    setText("");
  }, [text, onAdd]);

  return (
    <Wrapper>
      <StyledInput value={text} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Add!
      </button>
    </Wrapper>
  );
};
