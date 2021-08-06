import "./App.css";
import "./assets/styles/styles.scss";
import { AppHeader } from "cmps/AppHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "routes";
import { useContext } from "react";
import { store } from "store/store";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Styles } from "assets/styles/Styles";

const theme = {
  clr1: "#f1f1f1",
  clr2: " #737373",
  clr3: "#d76b3c",
  clr4: " #c500d0",
};

function App() {
  const { state } = useContext(store);

  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <Router>
        <div className="App">
          <AppHeader />
          {routes.map((route) => (
            <Route exact {...route} />
          ))}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
