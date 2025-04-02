import React, { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
    const [inputNumber, setInputNumber] = useState();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [primeNumber, setPrimeNumber] = useState(0);

    // This function gives the highest Prime number from the n number
    // This is a heavy calculation task to perform
    function highestPrimeUpToN(n) {
        // Helper function to check if a number is prime
        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i < Math.sqrt(num) + 1; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        let highestPrime = -1;
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                highestPrime = i; // Update the highest prime if prime is found
            }
        }
        console.log("work")
        return highestPrime;
    }

    console.log("re-render")

    // We do useMemo work by useEffect with the help of state variable but in this way an extra re-render is occur
    // useEffect(() => {
    //     let v = highestPrimeUpToN(inputNumber);
    //     setPrimeNumber(v);

    // }, [inputNumber]);


    // const value = highestPrimeUpToN(inputNumber);
    const value = useMemo(() => highestPrimeUpToN(inputNumber), [inputNumber]);

    /**
     * Theory :- 
     * when we toogle the theme after calculating the higest prime number of almost 7 digit 
     * the state of dark theme is change and due to this the component is re-render and when 
     * the component is re-render the highest prime number is again calculated for the for 
     * those 7 digit number even we don't need to re calculate it and the main problem is 
     * from this is that this will freeze our application or decrease the optimization like 
     * when we try to change the theme it is not immidiate change the theme it tooks some time
     * to change because some time is taken by the calcution then after the calculation is done 
     * then the theme is change so to avoid this use the hook known as UseMemo which stops the re
     * calculation and remember/memoize the value before the component re-render and take dependency that
     * when we need to change the memo value
     */


    // We can do this work by useEffect also by giving inputNumber as a dependency ****
    /**
     * Difference btw useMemo and useEffect in this situation ??
     * 
     * - When inputNumber changes, useEffect runs → updates primeNumber → causes a re-render.
     * - So, the component renders twice when inputNumber changes:
     *   - Once when the state updates (setInputNumber)
     *   - Again when primeNumber updates
     * 
     * - useMemo memoizes the computed value and returns it immediately.
     * - It avoids re-running the function unless inputNumber changes, but it does not trigger a re-render like useEffect does.
     * 
     * 🔹 Final Thought: Should You Use useEffect Here?
     * ✅ Yes, it's valid if you're okay with an extra render.
     * 🚀 useMemo is better if you want to avoid the extra render and keep things more efficient.
     */


    /**
     * Preventing Unnecessary Re-renders of Child Components :-
     * When you pass objects or arrays as props to child components, React re-renders the child component every
     * time the parent re-renders—even if the object or array hasn’t changed. useMemo can be used to ensure the 
     * same object or array reference is passed to the child, preventing unnecessary renders.
     */


    return <div className={`border w-96 h-60 m-2 ${isDarkTheme && "bg-gray-300"}`}>
        <div>
            <input type="number" placeholder="Enter number . . ." value={inputNumber}
                className="border px-2 m-2 rounded-md"
                onChange={(e) => setInputNumber(e.target.value)} />
            <h1>The Highest Prime Number is = {value}</h1>
        </div>

        {/* toggle the theme */}
        <button className="bg-gray-200 rounded-lg px-2 py-1 m-2 cursor-pointer"
            onClick={() => setIsDarkTheme(!isDarkTheme)}>Theme</button>
    </div>;
};

export default UseMemoHook;
