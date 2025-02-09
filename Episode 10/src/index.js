import React from "react";
import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <>
            <h1 className="font-bold text-2xl text-gray-400 text-center cursor-pointer hover:text-gray-600">
                Welocome in our website
            </h1>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);