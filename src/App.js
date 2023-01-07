import { Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import React from "react";
import { RouteFile } from "./routes";

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <Header />
                <Routes>
                    {RouteFile}
                </Routes>
            </div>
            <Footer />
        </React.StrictMode>
    );
}

export default App;