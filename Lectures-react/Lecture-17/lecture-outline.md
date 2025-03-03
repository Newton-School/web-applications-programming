# Lecture 17: Components and Props

## 1. Review and Introduction (5 minutes)

- Objective: Review state management concepts and introduce component architecture with props

- Key Points:
  1. Brief recap of state management from previous lecture
  2. Overview of component architecture in React
  3. Introduction to the concept of props and data flow

## 2. Component Import/Export and Props (20 minutes)

- Objective: Understand component organization and how to pass data between components

- Key Concepts:
  1. Component organization in React applications
     - Real-world analogy: Think of components like LEGO pieces in different packages
  2. Default vs. Named exports/imports
  3. What are props?
     - Props as function parameters
     - One-way data flow
     - Real-world analogy: Think of props like a package delivery system

- Live Demo:

  ```jsx
  // Button.jsx
  export default function Button({ text }) {
    return <button>{text}</button>;
  }

  // Header.jsx
  export function Header({ title }) {
    return <h1>{title}</h1>;
  }

  // App.jsx
  import Button from './Button';
  import { Header } from './Header';

  function App() {
    return (
      <div>
        <Header title="My Application" />
        <Button text="Click me" />
      </div>
    );
  }
  ```

- Student Practice:
    - Create a simple component structure with imports/exports
    - Pass different types of props (strings, numbers, functions)

## 3. Advanced Props and Lifting State Up (20 minutes)

- Objective: Learn about complex prop patterns and sharing state between components

- Key Concepts:
  1. Passing different data types as props
     - Objects and arrays
     - Functions as props (callbacks)
  2. The problem of sharing state between sibling components
  3. Lifting state to the closest common ancestor
  4. Using callbacks to update parent state

- Live Demo:

  ```jsx
  function ParentComponent() {
    const [sharedData, setSharedData] = useState("Initial shared data");
    
    const updateData = (newData) => {
      setSharedData(newData);
    };
    
    return (
      <div>
        <h2>Parent Component</h2>
        <p>Shared state: {sharedData}</p>
        
        <ChildA currentData={sharedData} onDataUpdate={updateData} />
        <ChildB currentData={sharedData} />
      </div>
    );
  }
  
  function ChildA({ currentData, onDataUpdate }) {
    return (
      <div className="child">
        <h3>Child A</h3>
        <input 
          value={currentData}
          onChange={(e) => onDataUpdate(e.target.value)}
        />
      </div>
    );
  }
  
  function ChildB({ currentData }) {
    return (
      <div className="child">
        <h3>Child B</h3>
        <p>Received: {currentData}</p>
      </div>
    );
  }
  ```

- Practice Exercise:
    - Create a simple counter with reset functionality using lifted state
    - Build a form with multiple components sharing state

## 4. Introduction to Local Setup with Vite (10 minutes)

- Objective: Learn the basics of setting up a React project locally using Vite

- Key Concepts:
  1. What is Vite?
     - Modern build tool for front-end development
  2. Project creation and structure
  3. Running and building the application

- Live Demo:
  1. Installation and setup:
     ```bash
     npm create vite@latest my-react-app -- --template react
     cd my-react-app
     npm install
     npm run dev
     ```
  2. Quick overview of project structure:
     - src folder
     - index.html
     - package.json

## 5. Recap and Q&A (5 minutes)

- Review Key Points:
  1. Component organization with imports/exports
  2. Props and data flow
  3. Lifting state up for shared state
  4. Local development with Vite

- Assignment Preview:
    - Create a multi-component application with proper state management
    - Focus on component reusability and proper prop usage

## Resources

- [React Components Documentation](https://react.dev/learn/your-first-component)
- [React Props Documentation](https://react.dev/learn/passing-props-to-a-component)
- [Lifting State Up](https://react.dev/learn/sharing-state-between-components)
- [Vite Documentation](https://vitejs.dev/guide/) 