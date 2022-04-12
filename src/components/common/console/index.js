import React, { useState } from "react";
import styled from "styled-components";

import Flex from "../flex";
import Line from "../line";

const PATH = "C:/users/username>";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 20px;
  resize: none;
  border: none;
  color: ${(props) => props.color || props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState([PATH]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setLines([...lines, PATH]);
    }
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 8px 0 0 ">
        {lines.map((line, index) => (
          <Line key={`${index}${line}`} color={color}>
            {line}
          </Line>
        ))}
      </Flex>

      <StyledConsole autoFocus color={color} onKeyDown={onKeyDown} {...props} />
    </Flex>
  );
};

export default Console;
