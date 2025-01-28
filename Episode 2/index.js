// now we need to import React and ReactDOM from the node_modules for use (if we don't use cdn links)
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hello from the nested h1"),
        React.createElement("h1", {}, "Hello from the nested h1 sibling")
    ])
);
console.log("nested element obj:", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);