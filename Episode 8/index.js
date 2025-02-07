import React from "react";
import ReactDOM from "react-dom/client"
import CardByClass from "./component/CardByClass";
import TestByClass from "./component/TestByClass";

const AppLayout = () => {

    return (
        <>
            <CardByClass name={"Nehra"} age={"19"} />
            <h1>This is the main AppLayout Component</h1>
            <TestByClass name={"Deepak"} age={"19"} />
            <CardByClass name={"Deepak Nehra"} age={"19"} />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// life cycle of the class based component
/**
    Nehra Constructor
    Nehra render
    Deepak Nehra Constructor
    Deepak Nehra render

    // all the componentDidMount method is bundled together then call these at once because 
    // manipulate the real dom is expensice so for optimization react will do all manipulation(commit phase at once after the render phase) this at once
    Nehra componentDidMount
    Deepak Nehra componentDidMount
 */