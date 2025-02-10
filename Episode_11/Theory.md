# React Challenges and Concepts

## 1. Creating a Higher Order Component (HOC)

- **Task**: Create a Higher Order Component that adds functionality to display a `Top Quality Badge` on products that have a rating greater than or equal to 4.5.

---

## 2. Controlled vs Uncontrolled Components

### 2.1 Uncontrolled Component: `<ParentOfAccordion />`

- In this example, the Accordion component manages its own state and does not affect other Accordion components.
- Multiple Accordions can be open at once.
- **Example**: This is an example of an **Uncontrolled Component**.

---

### 2.2 Controlled Component: `<Con_ParentOfAccordion />`

- In this example, the Accordion does not manage its own state.
- The state (open/close) of the Accordion is managed by the parent component.
- Only one Accordion can be open at a time.
- **Example**: This is an example of a **Controlled Component**.

---

## 3. React Context API

### 3.1 Create Context: `UserContext`

- **Create context file** `UserContext` to contain the default value for the `userName`.

---

### 3.2 Using the Context Value in Class-Based Components

- Learn how to use context value in class-based components.

---

### 3.3 Using the Context Value in Functional Components

- Learn how to use context value in function-based components.

---

### 3.4 Providing the Context to the Components

- Learn how to provide context to components.

---

### 3.5 Changing the Value of Context from the Child Component

- Learn how to change the value of the context from a child component.

---
