import React from "react";

class CardByClass extends React.Component {

    constructor(props) {
        // this is required 
        super(props);

        // declare or create the state variables
        this.state = {
            count1: 0,
            count2: 1,
            user: null
        }

        // code inside this will render first of all
        console.log(props.name + " Constructor");

    }

    async componentDidMount() {
        // this is the another method that react will give to us for make API calls
        // this method will render after the render() method is exicuted completely or this cardByClass component is mounted/render on the web

        // why we make api calls here ?
        // because we want that our react application load fast so we render the component immidiately and not wait for the api response and after the component is rendered then make api call 
        // and after the api response come re render the component and acc to our situation this method is doing exact work that this method rrun after the component is rendered completly on the ui.

        // API calls
        console.log(this.props.name + " componentDidMount");

        const response = await fetch("https://api.github.com/users/Nehra416");
        const json = await response.json();
        console.log("response is :", json);
        this.setState({ user: json })

    }

    componentDidUpdate() {
        // this mehtod is call when a update or re-render occur in the component like
        // when state variable is updated and then the component is re-render then this mehtod is call
        // this will run after the render() method is again exicuted
        console.log("ComponentDidUpdate");
    }

    componentWillUnmount() {
        // this method is exicuted when this component is unMounted/remove from the ui
        // like this is about us page component and this is shown on the ui but when someone goes to the another component/page like home then this component is change or remove from the ui then this mehtod is run/call.
        console.log("componentWillUnmount");
    }

    render() {
        const { count1, count2 } = this.state;
        console.log(this.props.name + " render");

        return (
            <>
                <h2>This is the class based component</h2>
                {/* way to use the props in the class based component */}
                <p>Props is :{this.props.name}</p>
                <p>Age is :{this.props.age}</p>
                {/* this.setState fn is used with a object with updated state variable to update the state variable */}
                {/* this will update only state variable which we give to update */}
                <button onClick={() => { this.setState({ count1: this.state.count1 + 1 }) }}>{count1}</button>
                <button onClick={() => { this.setState({ count2: this.state.count2 + 1 }) }}>{count2}</button>
            </>
        )
        // this code will render after the constructure code is rendered
    }
}

export default CardByClass;