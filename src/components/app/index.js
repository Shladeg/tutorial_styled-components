import React from "react";
import styled from "styled-components";
import { LargeButton } from "../common/button";
import Console from "../common/console";

import Flex from "../common/flex";
import Title from "../common/title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center" margin="0 0 20px">
        <Title color="chartreuse">Console cmd 2022</Title>
      </Flex>

      <Console color="chartreuse" />

      <Flex justify="flex-end">
        <LargeButton color="chartreuse">Send</LargeButton>
      </Flex>
    </AppWrapper>
  );
};

export default App;
