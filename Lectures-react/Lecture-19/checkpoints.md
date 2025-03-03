# Checkpoints for Lecture 19: Hooks and React Lifecycle

## Pre-read Checkpoint

### Multiple Choice Questions

1. What are the main phases of a React component's lifecycle?
   - A) Creating, Updating, Deleting
   - B) Mounting, Updating, Unmounting
   - C) Building, Rendering, Destroying
   - D) Initialize, Execute, Terminate

2. What does the dependency array in the useEffect hook control?
   - A) The speed at which the effect runs
   - B) When the effect function will be executed
   - C) The maximum number of times the effect can run
   - D) Which components will be affected by the effect

3. In React, what happens when a component is "unmounted"?
   - A) The component is removed from the DOM
   - B) The component is hidden but remains in the DOM
   - C) The component's state is reset
   - D) The component is moved to a different place in the DOM

4. Which is NOT a reason to include a cleanup function in useEffect?
   - A) To prevent memory leaks
   - B) To cancel subscriptions
   - C) To speed up the component rendering
   - D) To clear timers like setTimeout

5. When does React run cleanup functions in useEffect hooks?
   - A) Only when the component crashes
   - B) Before the component unmounts and before re-running the effect if dependencies change
   - C) Only when explicitly called by the developer
   - D) After a set timeout period

### Coding Questions

1. Write a React component that implements a simple counter with a reset button. The component should log a message to the console when it mounts and when it unmounts.

```jsx
function Counter() {
  // Add your state here
  
  // Add your effects here
  
  return (
    <div>
      {/* Create the counter UI */}
    </div>
  );
}
```

2. Fix the following component that has a memory leak because it doesn't clean up the interval when unmounting:

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    
    // What's missing here?
  }, [count]);
  
  return <h1>Count: {count}</h1>;
}
```

## Mid-lecture Checkpoint

### Multiple Choice Questions

1. What's the difference between these two useEffect calls?
   ```jsx
   useEffect(() => { /* effect */ }, []);
   useEffect(() => { /* effect */ });
   ```
   - A) The first runs after every render, the second runs only once
   - B) The first runs only once after mounting, the second runs after every render
   - C) The first is for mounting effects, the second is for updating effects
   - D) They are identical, just different syntax

2. If you need to perform an action when a component unmounts, you should:
   - A) Use the componentWillUnmount lifecycle method
   - B) Return a cleanup function from your useEffect
   - C) Call useState with an unmount handler
   - D) Use the useUnmount hook

3. Which statement correctly describes how to properly update state based on previous state?
   - A) `setState(prevState + 1);`
   - B) `setState(state => state + 1);`
   - C) `setState.update(state + 1);`
   - D) `setState.prev + 1;`

4. What's the purpose of the "isMounted" flag pattern when working with asynchronous operations in useEffect?
   - A) To make the component render faster
   - B) To prevent setting state on unmounted components
   - C) To count how many times a component has rendered
   - D) To keep track of the component's position in the DOM

5. What happens when a component renders with conditional rendering like: `{showComponent && <MyComponent />}`?
   - A) MyComponent is always created but only shown when showComponent is true
   - B) MyComponent is mounted when showComponent becomes true and unmounted when it becomes false
   - C) MyComponent is cached in memory regardless of showComponent value
   - D) MyComponent gets an error if showComponent changes too frequently

### Coding Questions

1. Create a search component that debounces the API call while the user is typing. The component should wait 500ms after the user stops typing before making the API call.

```jsx
function SearchComponent() {
  // Add state variables
  
  // Create the debounced search effect
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        // Add the required props
      />
      
      {/* Show loading state */}
      
      {/* Show results */}
    </div>
  );
}
```

2. Create a countdown timer component that starts at a specified number of seconds and counts down to zero. It should have start, pause, and reset functionality.

```jsx
function CountdownTimer({ initialSeconds }) {
  // Add state variables
  
  // Add effects for the timer
  
  // Add control functions
  
  return (
    <div className="countdown-timer">
      {/* Display the time */}
      
      {/* Add control buttons */}
    </div>
  );
}
```

## Post-lecture Checkpoint

### Multiple Choice Questions

1. What can cause unnecessary re-renders in a React component with useEffect?
   - A) Using an empty dependency array
   - B) Missing dependencies in the dependency array
   - C) Using too many state variables
   - D) Using cleanup functions

2. Which statement is true about using setInterval inside useEffect?
   - A) It's not recommended because it can cause memory leaks
   - B) It should always be used with a cleanup function that clears the interval
   - C) It automatically cleans up when the component unmounts
   - D) It only works with class components, not functional components

3. What is the correct approach to fetch data in a React component?
   - A) Call the fetch function directly in the component body
   - B) Use useState to store the fetch Promise
   - C) Use useEffect to trigger the fetch and useState to store the results
   - D) Data fetching should only be done in class components

4. In the context of React's useEffect, what is a "race condition"?
   - A) When two components try to update the same state simultaneously
   - B) When a newer API request completes before an older one
   - C) When two effects run at the same time
   - D) When effects are scheduled to run but the component unmounts

5. Which is the most appropriate approach for implementing pagination in React?
   - A) Fetch all data at once and use JavaScript to divide it into pages
   - B) Use useEffect with pagination parameters as dependencies
   - C) Create a new component for each page
   - D) Use URL parameters to handle pagination entirely on the server side

### Coding Questions

1. Create a component that implements a simple pagination system for a list of items. The component should display 5 items per page with previous and next buttons.

```jsx
function PaginatedList({ items }) {
  // Add state for current page
  
  // Add logic for calculating which items to display
  
  // Add functions for page navigation
  
  return (
    <div className="paginated-list">
      {/* Display the current page items */}
      
      <div className="pagination-controls">
        {/* Add the navigation buttons */}
      </div>
    </div>
  );
}
```

2. Create a component that fetches user data and correctly handles component unmounting during the fetch. The component should prevent setting state if it unmounts before the fetch completes.

```jsx
function UserProfile({ userId }) {
  // Add state for user and loading
  
  // Add the fetch effect with proper cleanup
  
  // Add conditional rendering
  
  return (
    <div className="user-profile">
      {/* Show loading state or user information */}
    </div>
  );
}
``` 