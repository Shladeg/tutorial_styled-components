import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
0% {
  transform: translateX(0);
}

25% {
  transform: translateX(-5px);
}

50% {
  transform: translateX(0);
}

75% {
  transform: translateX(5px);
}

100% {
  transform: translateX(0);
}
`;

const StyledButton = styled.button.attrs((props) => ({
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "black"};
      background: ${(props) => props.background || "white"};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

export const LargeButton = styled(StyledButton)`
  font-size: 24px;
  padding: 15px 20px;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
