import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
    return (
        <div>
            <h1>This is a Heading Component</h1>
        </div>
    )
};

// create root for react and then render react elements there
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);