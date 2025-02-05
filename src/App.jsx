import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import About from './pages/About';
import Destinations from './pages/Destinations';
import Package from './pages/Package';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import NotFoundPage from './components/layout/Error-404';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/destinations"
                        element={<Destinations />}
                    />
                    <Route path="/packages" element={<Package />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
