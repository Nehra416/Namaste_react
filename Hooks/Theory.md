`UseMemo Hook`

Using `useEffect` in this case prevents the heavy computation from running on every re-render. It only runs when `inputNumber` changes, which is the intended behavior. However, there are some key differences between `useEffect` and `useMemo`, and whether you should use one over the other depends on the use case.  

### 🔹 **Key Differences Between `useEffect` and `useMemo`**  
1. **`useEffect` runs asynchronously and updates the state**  
   - In your code, `useEffect` runs when `inputNumber` changes, computes the highest prime, and then updates the state (`setPrimeNumber`).
   - This causes a re-render because `setPrimeNumber(v)` changes the component’s state.  

2. **`useMemo` runs synchronously and does not trigger re-renders**  
   - `useMemo` **memoizes** the computed value and returns it immediately.  
   - It avoids re-running the function unless `inputNumber` changes, but it **does not trigger a re-render** like `useEffect` does.  

### 🔹 **Your Code Analysis**  
✅ **Your approach (with `useEffect`) works fine** because the expensive computation runs only when `inputNumber` changes. However, there's an unnecessary **extra render cycle**:  
   - When `inputNumber` changes, `useEffect` runs → updates `primeNumber` → causes a re-render.  
   - So, the component renders **twice** when `inputNumber` changes:  
     1. Once when the state updates (`setInputNumber`)  
     2. Again when `primeNumber` updates  

### 🔹 **When to Use `useMemo` Instead?**  
If you want to avoid an **extra re-render**, you can use `useMemo`:  
```jsx
const primeNumber = useMemo(() => highestPrimeUpToN(inputNumber), [inputNumber]);
```
This ensures the function **only runs when `inputNumber` changes** without causing an additional render.  

### 🔹 **Final Thought: Should You Use `useEffect` Here?**  
- **✅ Yes, it's valid** if you're okay with an extra render.  
- **🚀 `useMemo` is better** if you want to **avoid the extra render** and keep things more efficient.  


<br/>

---
---

<br/>

When a developer says that a task is **"expensive"**, they mean that it takes a lot of **computational resources** (CPU, memory, or processing time).  

### 🔹 **What Makes a Task Expensive?**  
An expensive task is one that:  
✅ **Takes a long time to execute** (e.g., complex calculations, sorting large datasets)  
✅ **Consumes a lot of memory** (e.g., storing large objects in RAM)  
✅ **Blocks the main thread** (e.g., synchronous operations in JavaScript)  
✅ **Re-runs too frequently** (e.g., re-computing values unnecessarily)  

### 🔹 **Examples of Expensive Tasks**  
🚀 **Heavy computations:**  
   - Calculating the **highest prime number** in a range (like in your code)  
   - Finding the **Fibonacci sequence** recursively  
   - **Sorting or filtering large lists**  

📡 **Network requests:**  
   - Fetching a **large dataset from an API**  
   - Making multiple API calls in a loop  

🎨 **Rendering performance issues:**  
   - Re-rendering a large number of components  
   - Running **complex animations**  

### 🔹 **Why Avoid Expensive Tasks?**  
If an expensive operation runs too often (like on every render), it can:  
❌ **Slow down your app**  
❌ **Make the UI laggy**  
❌ **Block user interactions**  

### 🔹 **How to Optimize Expensive Tasks?**  
✅ **Use `useMemo`** to avoid unnecessary recalculations  
✅ **Use `useCallback`** to avoid unnecessary function re-creations  
✅ **Use `useEffect` efficiently** to control when a function runs  
✅ **Debounce or throttle** expensive functions (e.g., search input)  

<br>

---
---

<br>

`UseRef Hook`

In React, variables can be managed in three primary ways:  

1️⃣ **State variables (`useState`)**  
2️⃣ **Ref variables (`useRef`)**  
3️⃣ **Local (regular JavaScript) variables**  

Each serves a different purpose in terms of **re-renders, persistence, and scope**. Let's break them down with detailed explanations and examples.  

---

## 1️⃣ **State Variables (`useState`)**  
State variables are **reactive** and trigger re-renders when updated. They are used to store and manage **dynamic data** that needs to be reflected in the UI.  

### 🔹 **Key Features of `useState`**  
✅ **Persistent across renders** – The value is stored between renders.  
✅ **Triggers re-render** – Any change in state forces the component to re-render.  
✅ **Asynchronous updates** – React batches updates for performance.  

### 🔹 **Example of `useState`**
```jsx
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);  // State variable

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```
### 🔹 **What happens here?**  
- `count` is stored in React state.  
- When `setCount(count + 1)` is called, the component **re-renders** to reflect the new count.  
- Even if the function runs multiple times, the latest `count` persists between renders.  

### 🔹 **When to Use `useState`?**  
- When a variable **affects the UI** and should cause a **re-render** on update.  
- When the value should **persist across re-renders** (e.g., form inputs, user interactions).  

---

## 2️⃣ **Ref Variables (`useRef`)**  
Ref variables are used to **store mutable values** that do not trigger re-renders when changed. They are often used to reference **DOM elements** or **store previous values**.  

### 🔹 **Key Features of `useRef`**  
✅ **Does not trigger re-renders** – Updating `useRef` values won’t cause the component to re-render.  
✅ **Persistent across renders** – The value remains the same across re-renders.  
✅ **Can hold DOM references** – Used for accessing or modifying DOM elements directly.  

### 🔹 **Example 1: Storing a Mutable Value Without Re-rendering**  
```jsx
import React, { useRef, useState } from "react";

const RefExample = () => {
    const renderCount = useRef(0); // Ref variable (does not cause re-renders)
    const [count, setCount] = useState(0);

    renderCount.current += 1; // Incrementing ref variable

    return (
        <div>
            <p>Count: {count}</p>
            <p>Component Rendered: {renderCount.current} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```
### 🔹 **What happens here?**  
- `renderCount` is a **ref variable** that stores how many times the component re-renders.  
- Updating `renderCount.current` **does not trigger a re-render**.  
- The component re-renders **only when `count` (state) changes**, but `renderCount` persists.  

### 🔹 **Example 2: Accessing a DOM Element Using `useRef`**  
```jsx
import React, { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef(null); // Creating a reference to the input field

    const focusInput = () => {
        inputRef.current.focus();  // Directly accessing the DOM element
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};
```
### 🔹 **What happens here?**  
- `inputRef` holds a reference to the input field.  
- Clicking the button calls `inputRef.current.focus()`, focusing the input without causing a re-render.  

### 🔹 **When to Use `useRef`?**  
- When you need to **store values between renders** **without causing a re-render** (e.g., storing previous values, timers).  
- When you need to **access or manipulate the DOM directly** (e.g., focusing an input field).  

---

## 3️⃣ **Local Variables (Regular JavaScript Variables)**  
Local variables are **not persistent across renders** and **do not trigger re-renders**. They are re-created every time the component re-renders.  

### 🔹 **Key Features of Local Variables**  
✅ **Does not persist between renders** – The value resets when the function runs again.  
✅ **Does not trigger re-renders** – Changing a local variable won’t cause the component to update.  

### 🔹 **Example of Local Variable**
```jsx
const LocalVariableExample = () => {
    let counter = 0; // Local variable

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => counter++}>Increment</button>
        </div>
    );
};
```
### 🔹 **What happens here?**  
- Clicking the button updates `counter`, but **the UI does not change** because local variables do not trigger re-renders.  
- Since the component re-renders every time, `counter` **resets to 0** on every render.  

### 🔹 **When to Use Local Variables?**  
- For **temporary calculations** inside a function that **don’t need to persist** across renders.  
- For **static values** that do not change (e.g., constants).  

---

## **🚀 Summary: Key Differences**
| Feature           | `useState` (State Variable) | `useRef` (Ref Variable) | Local Variable |
|------------------|------------------------|------------------|--------------|
| **Triggers Re-renders?** | ✅ Yes | ❌ No | ❌ No |
| **Persists Between Renders?** | ✅ Yes | ✅ Yes | ❌ No |
| **Can Modify DOM Elements?** | ❌ No | ✅ Yes | ❌ No |
| **Use Case?** | UI updates, user interactions | Storing values without re-renders, DOM manipulation | Temporary calculations, static values |

---

## **🚀 When to Use What?**
- **Use `useState`** when a value **should cause a re-render** (e.g., UI updates).  
- **Use `useRef`** when you need to store **values across renders** without causing re-renders (e.g., timers, previous values).  
- **Use local variables** for **temporary values** that don’t need to persist or trigger updates.  

<br>

---
---

<br>

`useCallback Hook`

`useCallback` is a React Hook that lets you cache a function definition between re-renders.

```jsx
const cachedFn = useCallback(fn, dependencies);
```

---

## 🚀 **`useCallback` Hook in React – Detailed Explanation**  

`useCallback` is a **React Hook** that **memoizes functions** so they don’t get recreated on every render. This is useful for **performance optimization**, especially when passing functions as props to child components.  

---

## 🔹 **What Problem Does `useCallback` Solve?**  
By default, every time a component re-renders, all functions inside it are **recreated**. This can lead to **unnecessary re-renders** in child components if the function is passed as a prop.  

### 🛑 **Without `useCallback`: Function Gets Recreated**
```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // This function is recreated on every render
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
```

```jsx
import React from "react";

const ChildComponent = ({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
};

export default ChildComponent;
```
### 🛑 **What’s the Problem?**  
- Every time `ParentComponent` re-renders, `handleClick` is recreated.  
- Since `handleClick` **changes** on every render, **React thinks the prop is new**, so `ChildComponent` re-renders unnecessarily.  

---

## 🔹 **Solution: `useCallback` Memoizes the Function**  
We can wrap the function in `useCallback` so that it **doesn’t get recreated unless its dependencies change**.

```jsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // Memoized function: will not be recreated unless `count` changes
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
```
### ✅ **What’s Fixed?**  
- Now, `handleClick` is **not recreated on every render**.  
- `ChildComponent` **does not re-render unnecessarily** because `handleClick` remains the same unless dependencies change.  

---

## 🔹 **Syntax of `useCallback`**
```jsx
const memoizedFunction = useCallback(() => {
    // Function logic here
}, [dependencies]);
```
### 🔹 **Parameters:**
- ✅ **First argument:** The function you want to memoize.  
- ✅ **Second argument (`[dependencies]`):** The function will be **recreated only if one of these values changes**.  

---

## 🔹 **Example 2: `useCallback` with Dependencies**  
If a function **depends on state or props**, you must include them in the dependency array.  

```jsx
import React, { useState, useCallback } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // This function is recreated only when `count` changes
    const logCount = useCallback(() => {
        console.log("Current Count:", count);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={logCount}>Log Count</button>
        </div>
    );
};

export default Counter;
```
### ✅ **How Does This Work?**  
- If `count` **does not change**, `logCount` remains the same across renders.  
- If `count` **changes**, `logCount` is recreated with the new `count` value.  

---

## 🔹 **Use Cases of `useCallback`**
`useCallback` is useful when:  

✅ **Passing functions as props to child components**  
   - Prevents unnecessary re-renders when the function reference remains the same.  

✅ **Optimizing expensive functions**  
   - If a function is complex, memoizing it prevents re-execution when unnecessary.  

✅ **Using it with `useEffect` to prevent infinite loops**  
   - If a function is used inside `useEffect`, memoizing it prevents the effect from re-running unnecessarily.  

```jsx
useEffect(() => {
    fetchData();
}, [fetchData]);  // `useCallback` ensures `fetchData` doesn't change unnecessarily
```

✅ **Performance optimization in large applications**  
   - When dealing with heavy computation, `useCallback` prevents redundant calculations.  

---

## 🔹 **`useCallback` vs `useMemo`**
| Feature         | `useCallback` | `useMemo` |
|----------------|--------------|-----------|
| **What it Memoizes?** | Functions | Computed values |
| **Prevents Unnecessary?** | Function recreation | Expensive recalculations |
| **Use Case?** | Passing functions to child components | Memoizing return values of expensive functions |

---

## 🚀 **Final Thoughts**
- `useCallback` **prevents function recreation** on every render unless dependencies change.  
- It’s useful for **performance optimization** when passing functions as props.  
- Use it **only when necessary**—overusing `useCallback` can make code harder to read without much benefit.  


<br>

---
---

<br>

What is `memo` and its uses

`memo` lets you skip re-rendering a component when its props are unchanged.

```jsx
const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
```

- Wrap a component in memo to get a memoized version of that component. This memoized version of your component will usually not be re-rendered when its parent component is re-rendered as long as its props have not changed. 
- But React may still re-render it: memoization is a performance optimization, not a guarantee.

---

Then what is the differnce between **`React.memo`** and **`useCallback`**

Both **`React.memo`** and **`useCallback`** help prevent unnecessary re-renders, but they work in **different ways** and solve **different problems**. Let’s go into detail and clear your doubt completely.

---

## **1️⃣ `React.memo`: Memoizing Components**
**🔹 What does `React.memo` do?**
- `React.memo` is used to **prevent a child component from re-rendering** unless its **props change**.
- It **only works with functional components**.
- It does a **shallow comparison** of props. If props don’t change, the component **does not re-render**.

### **📝 Example: Preventing Child Re-Renders with `React.memo`**
```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <ChildComponent count={count} />
        </div>
    );
};

export default ParentComponent;
```

```jsx
import React from "react";

const ChildComponent = React.memo(({ count }) => {
    console.log("Child re-rendered");
    return <h3>Child Count: {count}</h3>;
});

export default ChildComponent;
```

### ✅ **How does `React.memo` work here?**
- When `ParentComponent` re-renders (due to `toggle` state change), the child **does not re-render** unless `count` changes.
- `React.memo` **compares the previous `count` with the new `count`**. If they are the same, `ChildComponent` is skipped.

### ❌ **Limitation of `React.memo`**
- **If the child receives a function as a prop, it will still re-render!** (because functions are recreated on every render).
- This is where `useCallback` helps.

---

## **2️⃣ `useCallback`: Memoizing Functions**
**🔹 What does `useCallback` do?**
- `useCallback` **memoizes a function**, so React **doesn’t create a new function on every render**.
- This is useful when passing functions as **props** to child components, so the child does not re-render unnecessarily.

### **📝 Example: Preventing Function Recreation with `useCallback`**
```jsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    // Memoize function so it doesn't get recreated on every render
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
```

```jsx
import React from "react";

const ChildComponent = React.memo(({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

export default ChildComponent;
```

### ✅ **How does `useCallback` work here?**
- `handleClick` is **memoized** using `useCallback()`, so **it doesn’t change** unless dependencies change.
- `React.memo` now works perfectly because the function **does not change between renders**.
- Without `useCallback`, `handleClick` would be **recreated** on every render, causing `ChildComponent` to re-render unnecessarily.

---

## **3️⃣ `React.memo` vs `useCallback`: Key Differences**
| Feature           | `React.memo` | `useCallback` |
|------------------|-------------|--------------|
| **What it Memoizes?** | Entire component | Function |
| **Prevents Unnecessary?** | Child re-renders | Function re-creation |
| **Works with?** | Functional components | Functions passed as props |
| **Comparison Type?** | Shallow props comparison | Dependencies array |
| **Solves what problem?** | Prevents child from re-rendering if props don’t change | Prevents functions from being recreated unnecessarily |

---

## **🚀 When to Use What?**
✅ **Use `React.memo`** when:
- The child component **receives props** that **do not change often**.
- You want to prevent **unnecessary child re-renders**.

✅ **Use `useCallback`** when:
- The parent component **passes a function as a prop** to a child.
- The child **re-renders unnecessarily** because the function reference keeps changing.

✅ **Use both together** when:
- You have a **functional component (React.memo)** that receives a **function prop (useCallback)**.
- This **ensures the child component only re-renders when necessary**.

---

## **🚀 Final Thought**
Using **only `React.memo` is not enough** if a **function prop** keeps changing. **Combine `React.memo` with `useCallback`** to completely optimize child component re-renders.

**🔹 Rule of Thumb:**  
- **If a child component doesn’t need to re-render unless props change → Use `React.memo`.**  
- **If a function prop is causing re-renders → Wrap it in `useCallback`.**  

---


<br>

---
---

<br>


### **🚀 What is "Function Re-creation on Every Re-render" in React?**  

In React, **every time a component re-renders**, all the functions inside it **are re-created** (new instances are created). This happens **even if the logic inside the function remains the same**.  

### **🔹 What does "Function Re-creation" mean?**
- In JavaScript, **functions are objects**, and each function has a unique reference in memory.
- When a component re-renders, any function **inside it is recreated as a new function instance**.
- This means that even if the function **looks the same**, React sees it as **a completely new function** every time the component renders.

---

### **📝 Example: Function Re-creation Problem**
```jsx
import React, { useState } from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    // This function is recreated on every render
    const handleClick = () => {
        console.log("Button clicked!");
    };

    console.log("Component Re-rendered");

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default MyComponent;
```

### **🔹 What’s Happening Here?**
1. When the `Increment` button is clicked:
   - `setCount(count + 1)` updates the state.
   - The component **re-renders**.
2. On re-render:
   - The function `handleClick` **is created again**.
   - Even though the function **hasn’t changed**, React sees it as a **new function**.

---

## **🔍 Why is Function Re-creation a Problem?**
🚨 **Problem 1: Unnecessary Child Component Re-renders**  
If you pass a function as a prop to a child component, the child **will re-render unnecessarily** because the function reference **changes** on every render.

```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // Function is recreated on every render
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
```
```jsx
import React from "react";

const ChildComponent = React.memo(({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

export default ChildComponent;
```

### ❌ **Problem: Child Still Re-renders!**
Even though `ChildComponent` is wrapped in `React.memo`, it **still re-renders** on every parent update because:
- **Every time `ParentComponent` re-renders, `handleClick` is a new function**.
- `React.memo` does a **shallow comparison** and sees that the function **reference has changed**, so the child **still re-renders**.

---

🚨 **Problem 2: Performance Issues in Large Applications**  
- If a component has **many functions**, all of them **will be recreated** on every render.
- This consumes **memory** and slows down performance, especially if functions are passed as props.

---

## **🛠 How to Fix This?**
### ✅ **Solution 1: Use `useCallback` to Memoize the Function**
To prevent function re-creation, **wrap the function inside `useCallback`** so that it **only gets re-created when necessary**.

```jsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    // Memoize function so it doesn't get recreated on every render
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default ParentComponent;
```
✅ **Now `handleClick` is the same function instance across renders** (unless dependencies change), so `ChildComponent` **does not re-render unnecessarily**.

---

### ✅ **Solution 2: Move the Function Outside the Component**
Another way to prevent function re-creation is to **define the function outside the component** if it does not depend on props or state.

```jsx
const handleClick = () => {
    console.log("Button clicked!");
};

const MyComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default MyComponent;
```
✅ **Now `handleClick` is not recreated** because it exists **outside the component**.

---

## **🚀 Summary**
| Concept | Explanation |
|---------|------------|
| **Function Re-creation** | Functions inside a React component are recreated on every re-render. |
| **Why is it a problem?** | Causes unnecessary child re-renders and performance issues. |
| **When is it a problem?** | When functions are passed as props to child components. |
| **Solution 1: `useCallback`** | Memoizes the function so it only re-creates when dependencies change. |
| **Solution 2: Move function outside the component** | If a function does not depend on state/props, define it outside the component. |

---

✅ **Rule of Thumb:**  
- **If a function is used inside JSX but not passed as a prop → Function re-creation is usually not a problem.**  
- **If a function is passed as a prop → Use `useCallback` to prevent unnecessary child re-renders.**  
- **If a function does not depend on component state/props → Move it outside the component.**  

---


### **🚀 Final Thought**
- **"Function re-creation on every re-render"** means that **React creates a new function instance on each render, even if the function looks the same**.
- This can cause **unnecessary child re-renders and performance issues**.
- To fix it, **use `useCallback` or move the function outside the component**.

