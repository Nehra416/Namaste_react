import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./component/Error";
import About from "./component/About";
import ContactUs from "./component/ContactUs";

const AppLayout = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);