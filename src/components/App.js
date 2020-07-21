import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import Routes from "./Routes";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Routes isLogIn={isLogIn} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
