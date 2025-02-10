import React from "react";
import userContext from "../utils/UserContext";

class TestContext3 extends React.Component {
    render() {
        return (
            <div className="testContext">
                <h2>This Class Component is for testing the Context api of React</h2>
                <userContext.Consumer>
                    {
                        // userContext data is inside this cb fn
                        (data) => {
                            return <>
                                <h4>UserName from Context in Class Component : {data.userName}</h4>
                                <span>Try to change the context value </span>
                                <input value={data.userName} onChange={(e) => data.setName(e.target.value)} />
                            </>
                        }
                    }
                </userContext.Consumer>

            </div>
        )
    }

};

export default TestContext3;
