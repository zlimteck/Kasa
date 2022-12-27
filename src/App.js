import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lodging from "./pages/Lodging/Lodging";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import React from "react";

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lodging/:id" element={<Lodging />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </React.StrictMode>
    );
}

export default App;