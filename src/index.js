import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import {theme} from "./components/themes/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
