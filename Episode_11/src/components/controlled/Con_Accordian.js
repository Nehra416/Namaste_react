import React from "react";

// now this is controlled component because the open and close of accordian is controlled by the parent componet
const Con_Accordian = ({ dummyData, open, setOpenIndex }) => {

    return (
        <div className="accordianDiv">
            <div onClick={() => setOpenIndex()}
                className="accordianHeader">
                <span>{dummyData.header}</span>
                {
                    open ? <span>⬆️</span> : <span>⬇️</span>
                }
                
            </div>
            {
                open &&
                <div className="accordianBody">
                    <span>{dummyData.content}</span>
                </div>
            }

        </div>
    )
};

export default Con_Accordian;
