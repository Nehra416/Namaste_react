import React, { useRef, useState } from "react";

const UseRefHook = () => {
  console.log("Component is re-render");

  // local variable
  // - not persist the value on the re-render of the component 
  // - not re-render the component due to which ui is not updated with latest value
  let x = 0;
  const handleX = () => {
    ++x;
    console.log("value of X = ", x);
  }

  // state variable
  // - persist the value on the re-render of the component 
  // - re-render the whole component due to which ui is updated with latest value
  const [y, setY] = useState(0);
  const handleY = () => {
    // We can't do y++ because y is a const state variable 
    setY(y + 1);
    console.log("value of Y = ", y);
  }

  // useRef variable (store value as a object with current key like z = {current: 0})
  // - persist the value on the re-render of the component 
  // - not re-render the component due to which ui is not updated with latest value
  // - Can hold DOM references – Used for accessing or modifying DOM elements directly
  const z = useRef(0);
  const handleZ = () => {
    z.current = z.current + 1;
    console.log("value of z is = ", z);
  }

  return <div className="border w-96 h-60 m-2 flex flex-col items-center py-5">
    {/* for local variable */}
    <div className="flex gap-5 items-center mt-3">
      <button onClick={() => handleX()}
        className="px-2 py-1 bg-gray-100 rounded-lg border "
      >
        Increase X
      </button>
      <span>{x}</span>
    </div>

    {/* for state variable */}
    <div className="flex gap-5 items-center mt-3">
      <button onClick={() => handleY()}
        className="px-2 py-1 bg-gray-100 rounded-lg border "
      >
        Increase Y
      </button>
      <span>{y}</span>
    </div>

    {/* for ref variable */}
    <div className="flex gap-5 items-center mt-3">
      <button onClick={() => handleZ()}
        className="px-2 py-1 bg-gray-100 rounded-lg border "
      >
        Increase Z
      </button>
      <span>{z.current}</span>
    </div>
  </div>;
};

export default UseRefHook;
