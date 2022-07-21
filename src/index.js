import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/themes/theme";
import { Provider } from "react-redux";
import store from "./components/redux/store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Provider store={store} >
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
