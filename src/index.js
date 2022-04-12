import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}
`;

const theme = {
  colors: {
    primary: "chartreuse",
    secondary: "red",
  },
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
