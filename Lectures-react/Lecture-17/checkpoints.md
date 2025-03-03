# Checkpoints for Lecture 17: Components and Props

## Pre-read Checkpoint

### Multiple Choice Questions

1. What best describes a React component?
   - A) A CSS class that styles HTML elements
   - B) A JavaScript function that returns HTML-like code (JSX)
   - C) A database schema for storing user interface data
   - D) A package manager for JavaScript libraries

2. Which symbol is used for embedding JavaScript expressions within JSX?
   - A) [ ]
   - B) ( )
   - C) { }
   - D) < >

3. In React, data flows:
   - A) Bidirectionally between all components
   - B) From parent to child components only (one-way)
   - C) From child to parent components only (one-way)
   - D) Only within the same component

4. Which statement about props in React is true?
   - A) Props are for styling components only
   - B) Props can be modified by the child component
   - C) Props are passed from parent to child components
   - D) Props can only contain string values

5. How do you import a default export from another file in React?
   - A) `import { ComponentName } from './ComponentName';`
   - B) `import ComponentName from './ComponentName';`
   - C) `require('./ComponentName');`
   - D) `include ComponentName from './ComponentName';`

### Coding Questions

1. Create a simple React functional component called `Greeting` that takes a `name` prop and displays "Hello, [name]!".

```jsx
// Write your component here
function Greeting() {
  // Complete this component
}
```

2. Fix the errors in the following React component:

```jsx
function ProfileCard(props) {
  return {
    <div class="profile-card">
      <h2>props.name</h2>
      <p>Age: props.age</p>
      <p>Occupation: {props.job}<p>
    </div>
  }
}
```

## Mid-lecture Checkpoint

### Multiple Choice Questions

1. Which of the following is NOT a valid way to declare a React component?
   - A) `function Welcome() { return <h1>Hello</h1>; }`
   - B) `const Welcome = () => <h1>Hello</h1>;`
   - C) `class Welcome { render() { return <h1>Hello</h1>; } }`
   - D) `const Welcome = function() { return <h1>Hello</h1>; }`

2. If you want to pass a JavaScript variable called `userName` to a component as a prop, which syntax is correct?
   - A) `<UserGreeting userName={userName} />`
   - B) `<UserGreeting userName="userName" />`
   - C) `<UserGreeting {userName} />`
   - D) `<UserGreeting userName=${userName} />`

3. What's the difference between named exports and default exports in JavaScript?
   - A) Named exports can be imported with any name, default exports must use their original name
   - B) Default exports can be imported with any name, named exports must use their original name
   - C) Named exports are for functions, default exports are for classes only
   - D) There's no difference, they're just different syntax for the same thing

4. How can you provide default values for props in a functional component?
   - A) Using the `defaultProps` property
   - B) Using the `default` keyword in the function
   - C) Using destructuring with `=` in the parameter list
   - D) Using the `propTypes` property

5. What is the purpose of the "key" prop when rendering a list of elements in React?
   - A) It specifies the CSS styling for list items
   - B) It helps React identify which items have changed, been added, or been removed
   - C) It controls the order of elements displayed in the list
   - D) It defines how many items are shown at once

### Coding Questions

1. Create a `Button` component that accepts `text` and `onClick` props, and renders a button element with the provided text and click handler. The button should also have a CSS class of "custom-button".

```jsx
// Write your component here
function Button() {
  // Complete this component
}
```

2. Create a component called `UserList` that takes an array of user objects (with `id` and `name` properties) as a prop and renders them as a list. Each list item should display the user's name and use the user's id as the key.

```jsx
// Write your component here
function UserList() {
  // Complete this component
}

// Example usage:
// <UserList users={[{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]} />
```

## Post-lecture Checkpoint

### Multiple Choice Questions

1. What pattern allows you to share state between sibling components in React?
   - A) Sibling-to-sibling props
   - B) Global variables
   - C) Lifting state up to a common parent
   - D) Using the siblings() method

2. In the context of React state and props, which statement is true?
   - A) Both state and props can be changed directly
   - B) State can be changed with setState, props are read-only
   - C) Props can be changed directly, state is read-only
   - D) Both state and props are immutable and never change

3. Which of the following is the correct way to update a parent component's state from a child component?
   - A) Directly modify the parent's state variable
   - B) Use the setState function directly from the child
   - C) Use a callback function passed as a prop from the parent
   - D) Import the parent component in the child and call its methods

4. What happens when you pass a function as a prop to a child component?
   - A) It automatically runs when the child component renders
   - B) It's added to the child component's prototype
   - C) It allows the child component to trigger actions in the parent component
   - D) It throws an error because functions cannot be passed as props

5. What is Vite primarily used for in React development?
   - A) Managing state across multiple components
   - B) Creating server-side rendered React applications
   - C) A build tool and development environment for front-end projects
   - D) Testing React components

### Coding Questions

1. Complete the `ParentChild` example by:
   - Creating a parent component with a state variable `message`
   - Creating a child component that can update the parent's message
   - Using props to pass both the message and the updater function

```jsx
function ChildComponent(/* Add your code here */) {
  return (
    <div>
      <p>Message from parent: {/* Add your code here */}</p>
      <input 
        type="text" 
        onChange={/* Add your code here */} 
        placeholder="Type to update parent"
      />
    </div>
  );
}

function ParentComponent() {
  // Add your code here
  
  return (
    <div>
      <h1>Current message: {/* Add your code here */}</h1>
      {/* Render the ChildComponent with appropriate props */}
    </div>
  );
}
```

2. Create a simple `ShoppingCart` component that:
   - Takes an array of items (each with `id`, `name`, and `price` properties) as a prop
   - Calculates and displays the total price of all items
   - Renders a list of items showing their name and price

```jsx
function ShoppingCart(/* Add your code here */) {
  // Calculate the total price
  
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      
      {/* Render the list of items */}
      
      <div className="total">
        <strong>Total: ${/* Add the total here */}</strong>
      </div>
    </div>
  );
}

// Example usage:
// <ShoppingCart items={[
//   {id: 1, name: "Apple", price: 0.99},
//   {id: 2, name: "Orange", price: 0.89},
//   {id: 3, name: "Banana", price: 0.59}
// ]} /> 