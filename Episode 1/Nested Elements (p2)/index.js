// how we render the nested elements by react like-

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello from the nested h1</h1>
 *      </div>
 * </div>
 */

// const parent = React.createElement("div", { id: "parent" }, 
//     React.createElement("div", {id:"child"},
//         React.createElement("h1", {}, "Hello from the nested h1")
//     )
// );


// if we want to add a sibling of inner h1 tag then we need to pass a array of childrens as a 3rd parameter to createElement() fn
// pass only one children or a array of multiple children as the 3rd parameter of createElement fn
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hello from the nested h1"),
        React.createElement("h1", {}, "Hello from the nested h1 sibling")
    ])
);
console.log("nested element obj:", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


/**
 * now think that how much our code is lengthy to write and maintain when we create a large web application
 * our code is starting making lengthy even when we need to nested the 2 - 3 div's only
 * like --
 * <div>
 *      <div>
 *          <h1>this is h1</h1>
 *          <h2>this is h2</h2>
 *      </div>
 *      <div>
 *          <h1>this is h1</h1>
 *          <h2>this is h2</h2>
 *      </div>
 * </div>
 * 
 * now JSX (JavaScript XML), come into the picture. 
 * it makes our work very easy. it gives us the facility to write code as we write in html.
 * when we write we feel that we write the html elements but all these are js/react(which we do above) behind the secens
 */

