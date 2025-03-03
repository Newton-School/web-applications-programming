# Pre-read: Components and Props in React

## 🎯 Learning Objectives

Before diving into Components and Props in React, let's review the key concepts you'll need:

- Understand how React components work together through props
- Review JavaScript concepts crucial for component communication
- Learn about component import/export patterns
- Grasp the unidirectional data flow in React applications

---

## 1. JavaScript Concepts Review

### Object Destructuring

Destructuring allows you to extract values from objects into distinct variables:

```javascript
// Without destructuring
const user = { name: 'John', age: 30 };
const name = user.name;
const age = user.age;

// With destructuring
const { name, age } = user;

// With destructuring and renaming
const { name: userName, age: userAge } = user;

// Destructuring in function parameters
function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetUser(user); // Hello, John! You are 30 years old.
```

### Spread Operator with Objects

The spread operator allows you to create new objects by "spreading" the properties of existing ones:

```javascript
const user = { name: 'John', age: 30 };

// Adding new properties
const userWithEmail = { ...user, email: 'john@example.com' };
// Result: { name: 'John', age: 30, email: 'john@example.com' }

// Overriding properties
const updatedUser = { ...user, age: 31 };
// Result: { name: 'John', age: 31 }

// Combining objects
const address = { city: 'New York', country: 'USA' };
const userWithAddress = { ...user, ...address };
// Result: { name: 'John', age: 30, city: 'New York', country: 'USA' }
```

### ES6 Modules: Import and Export

Modern JavaScript uses modules to share code between files:

```javascript
// Exporting from a file (Button.js)
// Default export (only one per file)
export default function Button() { /* ... */ }

// Named exports (can have multiple)
export function SmallButton() { /* ... */ }
export function LargeButton() { /* ... */ }

// Importing in another file
// Default import
import Button from './Button';

// Named imports
import { SmallButton, LargeButton } from './Button';

// Import default and named exports
import Button, { SmallButton } from './Button';

// Import with alias
import { SmallButton as Sm } from './Button';
```

---

## 2. Components in React

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

### Types of Components

```jsx
// Functional components (preferred in modern React)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow function component
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```

### Component Organization

A typical React component structure:

```
src/
├── components/
│   ├── Button.js
│   ├── Header.js
│   └── Footer.js
├── pages/
│   ├── Home.js
│   └── About.js
└── App.js
```

---

## 3. Understanding Props

Props (short for properties) are React's way of passing data from parent to child components.

```jsx
// Parent component passing props
function App() {
  return (
    <div>
      <Greeting name="Sara" age={25} isOnline={true} />
    </div>
  );
}

// Child component receiving props
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      {props.isOnline && <span>🟢 Online</span>}
    </div>
  );
}

// Same child component using destructuring
function Greeting({ name, age, isOnline }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      {isOnline && <span>🟢 Online</span>}
    </div>
  );
}
```

### Props are Read-Only

In React, components must never modify their props. This is called the "unidirectional data flow" principle:

```jsx
// INCORRECT - Modifying props
function Counter(props) {
  props.count = props.count + 1; // This is wrong!
  return <div>{props.count}</div>;
}

// CORRECT - Using state for values that change
function Counter(props) {
  const [count, setCount] = useState(props.initialCount);
  return <div>{count}</div>;
}
```

---

## 4. Component Communication Patterns

### Parent to Child (via props)

The most common pattern - parent passes data to children via props:

```jsx
function Parent() {
  const data = "Hello from parent";
  return <Child message={data} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

### Child to Parent (via callback props)

Children can communicate back to parents via callback functions:

```jsx
function Parent() {
  const handleClick = (message) => {
    console.log(message);
  };
  
  return <Child onButtonClick={handleClick} />;
}

function Child({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick("Hello from child!")}>
      Click me
    </button>
  );
}
```

---

## 🤔 Self-Check Questions

1. What is the difference between props and state in React?
2. How do you pass data from a parent component to a child component?
3. Can a child component modify the props it receives from a parent?
4. What does "unidirectional data flow" mean in React?
5. How can a child component communicate with its parent component?

---

## 📚 Quick Reference

- [React Components and Props](https://react.dev/learn/components-and-props)
- [JavaScript Object Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Get ready to master component composition and communication in React!** 