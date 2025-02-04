import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./client/routes/Router.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./client/config/mantineTheme.ts";
import "@mantine/carousel/styles.css";
import AppFooter from "./client/componenets/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router />
      <AppFooter />
    </MantineProvider>
  </React.StrictMode>
);
