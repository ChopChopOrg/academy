import React from "react";
import styled from "@emotion/styled";

const BoxWrapper = styled.div`
  width: 600px;
  padding: 15px;

  margin: 150px auto 0;

  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Box: React.FC = ({ children }) => {
  return <BoxWrapper>{children}</BoxWrapper>;
};
