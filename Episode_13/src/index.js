import React from "react"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TestRedux from "./component/TestRedux";
import Contact from "./component/Contact";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <Router>
                <Routes>
                    <Route path="/" element={<TestRedux />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </Provider>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
