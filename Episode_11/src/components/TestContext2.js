import React from "react";
import userContext from "../utils/UserContext";

class TestContext2 extends React.Component {
    render() {
        return (
            <div className="testContext">
                <h2>This Class Component is for testing the Context api of React</h2>
                <userContext.Consumer>
                    {(data) => <h4>UserName from Context in Class Component : {data.userName}</h4>}
                </userContext.Consumer>

            </div>
        )
    }

};

export default TestContext2;
