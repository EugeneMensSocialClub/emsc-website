import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./routes/Router.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./config/mantineTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  </React.StrictMode>
);
