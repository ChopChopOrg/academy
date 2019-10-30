import React, { useState, useCallback } from 'react';
import { Box } from './Box';
import styled from '@emotion/styled';
import { Input } from './Input';
import { List } from './List';

const Heading = styled.h1`
  text-align: center;
`;

export const ToDo = () => {
  const [items, setItems] = useState([]);

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
    <Box>
      <Heading>Todo List</Heading>
      <Input onAdd={handleAdd} />
      <List items={items} onItemClick={handleItemClick} />
    </Box>
  );
};
