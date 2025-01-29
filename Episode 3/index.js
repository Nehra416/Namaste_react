import React from "react";
import ReactDOM from "react-dom/client";

// react element is an object not an like html elements it converted to the html elements later by the render method of ReactDOM

// react element by core react
const reactHeading = React.createElement("h1", { id: "heading" }, "React Heading");
console.log(reactHeading);

// react element by jsx (bable package to do this to convert jsx to react.createElement())
const jsxHeading = <h1 id="heading">Jsx heading</h1>;
console.log(jsxHeading);

// React Functional Component - a simple js fn which return some jsx code
const Title = () => (
    <div>
        <h1>This is a Title Component</h1>
        {/* we can also render the React element in jsx inside curly braces by js */}
        {jsxHeading}
    </div>

);

let number = 10;

const HeadingComponent = () => {
    return (
        <div>
            {/* 3 ways to exicute the functional component */}
            <Title />
            <Title></Title>
            {Title()}
            <h1>This is a Heading Component</h1>
            {/* inside curly braces in jsx we run js code */}
            {++number}
        </div>
    )
};



// create root for react and then render react elements there
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);