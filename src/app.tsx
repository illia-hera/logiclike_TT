import React from "react";
import Layout from "./pages/Layout/index";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;