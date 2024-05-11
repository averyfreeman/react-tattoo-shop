import React, { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/extendedTheme";
import App from "./App";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </StrictMode>
);
