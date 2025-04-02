import React from "react";

const Contact = () => {
    return <div style={{ textAlign: "center", }}>
        <h1>Contact page</h1>
        <form style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", textAlign: "left", }}>
            <label>UserName</label>
            <input type="text" placeholder="Username" style={{ marginBottom: "15px" }} />
            <label>Message</label>
            <input type="text" placeholder="Message ..." style={{ marginBottom: "15px" }} />
            <button>Submit</button>
        </form>
    </div>;
};

export default Contact;
