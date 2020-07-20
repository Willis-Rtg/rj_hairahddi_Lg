import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router></Router>
    </ThemeProvider>
  );
}

export default App;
