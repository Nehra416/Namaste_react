import React, { useContext } from "react";
import userContext from "../utils/UserContext";

const TestContext = () => {
    const name = useContext(userContext);
    // console.log(name);
    return (
        <div className="testContext">
            <h2>This Component is for testing the Context api of React</h2>
            <h4>UserName from Context is : {name.userName}</h4>
        </div>
    )
};

export default TestContext;
