import React from "react";
import ReactDOM from "react-dom/client"
import RestaurantCard from "./component/RestaurantCard"
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Error from "./component/Error";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Card from "./component/Card";

const AppLayout = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<RestaurantCard />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/restaurant/:resId" element={<Card />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
};


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,
//         errorElement: <Error />,
//         children: [
//             {
//                 path: "/about",
//                 element: <About />
//             },
//             {
//                 path: "/contact",
//                 element: <ContactUs />
//             }
//         ]
//     }
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);