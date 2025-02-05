import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoadingProvider } from "./components/context/LoadingContext";
import "./index.css";
import App from "./App.jsx";
import Cursor from './components/layout/Cursor';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LoadingProvider>
            <Cursor />
            <App />
        </LoadingProvider>
    </StrictMode>
);

