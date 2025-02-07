import React from "react";

class TestByClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.name + " constructor");
    }

    componentDidMount() {
        console.log(this.name + " componentDidMount");
    }
    render() {
        console.log(this.props.name + " render");
        return (
            <h2>This is the TestByClass component</h2>
        )
    }
}

export default TestByClass;