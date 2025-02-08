import React, { lazy, Suspense, } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Card from "./component/Card";
// import Card2 from "./component/Card2";

const AppLayout = () => {
    const Card2 = lazy(() => import("./component/Card2"));
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Card />} />
                    {/* <Route path="/secondCard" element={<Card2 />} /> */}
                    <Route path="/secondCard" element={<Suspense><Card2 /></Suspense>} />
                </Routes>
            </Router>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);