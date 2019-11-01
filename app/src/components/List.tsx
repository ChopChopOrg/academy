import React from "react";

interface ListProps {
  items: string[];
  onItemClick: (item: string) => void;
}
export const List = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button type="button" onClick={() => onItemClick(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
