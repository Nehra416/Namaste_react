import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearData, setAge, setUserName } from "../utils/userSlice";

const TestRedux = () => {
    const userInfo = useSelector((store) => store.user);
    // console.log(userInfo);

    const dispatch = useDispatch();

    return (
        <>
            <h2>The UserName in the Redux store is : {userInfo.userName}</h2>
            <h2>User Age is in store : {userInfo.age}</h2>

            <span>Update UserName </span>
            <input type="text" onChange={(e) => dispatch(setUserName(e.target.value))} /> <br />

            <span>Update Age </span>
            <input type="text" onChange={(e) => dispatch(setAge(e.target.value))} /> <br />

            <button onClick={() => dispatch(clearData())}>Clear Data</button>
        </>
    )
};

export default TestRedux;
