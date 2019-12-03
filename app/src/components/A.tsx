import styled from "@emotion/styled";
import { theme } from "../theme";

const {
  colors: { blue },
} = theme;

export const A = styled.a`
  color: ${blue};
  outline-color: ${blue};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
