import React from "react";
import "./assets/css/main.css";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./assets/css/themaConfig";

//provider
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import Rutas from "./routes/Rutas";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Rutas />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
