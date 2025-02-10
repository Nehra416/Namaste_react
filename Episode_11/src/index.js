import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client"
import MenuCard from "./components/MenuCard";
import ParentOfAccordian from "./components/Un_controlled/ParentOfAccordian";
import Con_ParentOfAccordian from "./components/controlled/Con_ParentOfAccordian";
import TestContext from "./components/TestContext";
import userContext from "./utils/UserContext";
import TestContext2 from "./components/TestContext2";
import TestContext3 from "./components/TestContext3";

const AppLayout = () => {
    const { userName } = useContext(userContext);
    const [name, setName] = useState(userName);

    // value of userName is remain same. Not the actual value of userName is change in this way 
    console.log("Value of userName in context : ", userName);

    return (
        <>
            {/* This is example of higer order component */}
            {/* <MenuCard /> */}

            {/* This is the example of unControlled componets */}
            {/* <ParentOfAccordian /> */}

            {/* This is the example of Controlled componets */}
            {/* <Con_ParentOfAccordian /> */}



            {/* Test the context api */}

            {/* value of userName for all components inside this provider is Nehra */}
            <userContext.Provider value={{ userName: "Nehra" }}>
                <TestContext />
            </userContext.Provider>

            {/* value of userName for all components inside this provider is Deepak */}
            <userContext.Provider value={{ userName: "Deepak" }}>
                <TestContext />
            </userContext.Provider>

            {/* what if we do nested provider */}
            <userContext.Provider value={{ userName: "Deepak" }}>
                {/* inside this userName is deepak Nehra */}
                <userContext.Provider value={{ userName: "Deepak Nehra" }}>
                    <TestContext />
                </userContext.Provider>
                {/* userName value here is Deepak */}
                <TestContext />
            </userContext.Provider>

            {/* value of userName for this components is default value which is guest */}
            <TestContext />

            {/* Class Component */}
            <TestContext2 />

            {/* we can also change the value of userName from the child components */}
            <userContext.Provider value={{ userName: name, setName }}>
                <TestContext3 />
            </userContext.Provider>

            {/* above and below both componet will change if we do change in any because userName context is same  */}
            <userContext.Provider value={{ userName: name, setName }}>
                <TestContext3 />
            </userContext.Provider>

        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);