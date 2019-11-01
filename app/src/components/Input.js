import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
`;

export const Input = ({ onAdd }) => {
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
      <button onClick={handleAdd}>Add!</button>
    </Wrapper>
  );
};

Input.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
