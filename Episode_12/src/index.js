import React from "react"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import TestRedux from "./components/TestRedux";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <TestRedux />
        </Provider>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
