import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "Guest",
        age: "20"
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload

            // RTK - uses inner library BTS (its make our mutate state into the unmutate state which provides the same result which RTK uses like older version of REDUX. RTK still works on the unmutated state)
            // RTK - either Mutate the existing state or return a new state
            // return { userName: action.payload, age: state.age }
        },
        setAge: (state, action) => {
            // use `current` function if we want to print the state in readable form
            // console.log(current(state));

            state.age = action.payload
        },
        clearData: (state) => {
            state.userName = "";
            state.age = ""

            // context of Mutate ?
            // Vanialla(older) Redux => DON'T MUTATE STATE (this is older way in redux)
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
        }
    }
})

export const { setUserName, setAge, clearData } = userSlice.actions

export default userSlice.reducer;