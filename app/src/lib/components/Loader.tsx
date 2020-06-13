/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { theme } from "../../theme";

const wave = keyframes`
  0%, 40%, 100% {
    transform: translate(0, 0);
    background-color: ${theme.colors.yellow};
  }
  10% {
    transform: translate(0, -15px);
    background-color: rgba(198,12,48,1)
  }
`;

const LoaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;

  span:nth-child(1) {
    animation-delay: 0;
  }
  span:nth-child(2) {
    animation-delay: 100ms;
  }
  span:nth-child(3) {
    animation-delay: 200ms;
  }
`;

const Dot = styled.span`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  display: inline-block;
  border-radius: 50%;
  animation: ${wave} 2s ease infinite;
`;

export const Loader = () => {
  return (
    <LoaderDiv>
      <Dot />
      <Dot />
      <Dot />
    </LoaderDiv>
  );
};
