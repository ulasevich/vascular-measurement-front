import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes/AppRoutes";
import { appTheme } from "./assets/themes/appTheme";
import "./assets/styles/main.scss";


function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
