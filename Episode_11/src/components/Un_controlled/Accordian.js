import React, { useState } from "react";

const Accordian = ({ data }) => {
    // now This component is unControlled component because its manage its own state 
    const [openAccordian, setOpenAccordian] = useState(false);

    return (
        <div className="accordianDiv">
            <div onClick={() => setOpenAccordian(!openAccordian)}
                className="accordianHeader">
                <span>{data.header}</span>
                <span>⬇️</span>
            </div>
            {
                openAccordian &&
                <div className="accordianBody">
                    <span>{data.content}</span>
                </div>
            }

        </div>
    )
};

export default Accordian;
