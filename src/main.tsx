import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import MyRoutes from "./routes.tsx";
import "./js/main.js";
import "./scss/styles.scss";
import AppContextProvider from "./components/providers/AppContextProviders.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <MyRoutes />
            </BrowserRouter>
        </AppContextProvider>
    </StrictMode>
);
