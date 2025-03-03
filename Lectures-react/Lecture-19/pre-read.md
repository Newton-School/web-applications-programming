# Pre-read: React Lifecycle and Hooks

## 🎯 Learning Objectives

Before diving into React's lifecycle and advanced hook usage, let's review the key concepts you'll need:

- Understand the lifecycle of a React component
- Review JavaScript concepts crucial for working with effects
- Learn about cleanup in asynchronous operations
- Prepare for implementing common patterns using hooks

---

## 1. JavaScript Concepts Review

### Closures

Closures are functions that "remember" the environment in which they were created:

```javascript
function createCounter() {
  let count = 0; // This variable is "enclosed" in the returned function
  
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Timers and Intervals

JavaScript has built-in functions for executing code after a delay or at intervals:

```javascript
// Run once after a delay
const timeoutId = setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

// Cancel timeout if needed
clearTimeout(timeoutId);

// Run repeatedly at intervals
const intervalId = setInterval(() => {
  console.log('This runs every second');
}, 1000);

// Stop the interval
clearInterval(intervalId);
```

### Cleanup Pattern

When working with resources like timers, event listeners, or subscriptions, it's important to clean up:

```javascript
// Setting up a resource that needs cleanup
const button = document.querySelector('button');
const handleClick = () => console.log('Button clicked!');

button.addEventListener('click', handleClick);

// Cleaning up when done
button.removeEventListener('click', handleClick);
```

---

## 2. Component Lifecycle Overview

Every React component goes through a lifecycle:

1. **Mounting**: Component is created and inserted into the DOM
2. **Updating**: Component re-renders due to prop or state changes
3. **Unmounting**: Component is removed from the DOM

---

## 3. The useEffect Hook

The `useEffect` hook lets you perform side effects in function components:

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // This runs after every render
    console.log('Component rendered');
    
    return () => {
      // This cleanup function runs before the next effect
      // or when the component unmounts
      console.log('Cleanup before next render');
    };
  });
  
  useEffect(() => {
    // This runs only after the initial render
    console.log('Component mounted');
    
    return () => {
      // This runs only when the component unmounts
      console.log('Component unmounted');
    };
  }, []);
  
  useEffect(() => {
    // This runs after initial render and when `seconds` changes
    console.log(`Seconds changed to: ${seconds}`);
  }, [seconds]);
  
  return <div>Seconds: {seconds}</div>;
}
```

### Understanding the Dependency Array

The second argument to `useEffect` is the dependency array:

- **No dependency array**: Effect runs after every render
- **Empty array `[]`**: Effect runs only once after initial render
- **With dependencies `[a, b]`**: Effect runs when any dependency changes

```jsx
// Runs after every render
useEffect(() => {
  document.title = `Count: ${count}`;
});

// Runs only once after initial render
useEffect(() => {
  console.log('Component mounted');
}, []);

// Runs when specific values change
useEffect(() => {
  console.log(`Count changed to: ${count}`);
}, [count]);
```

---

## 4. Cleanup Functions

Cleanup functions prevent memory leaks and unwanted behavior:

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
    // Return a cleanup function
    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return <div>Seconds: {seconds}</div>;
}
```

---

## 5. Common Patterns with useEffect

### Data Fetching

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        
        // Only update state if component is still mounted
        if (isMounted) {
          setUser(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Failed to fetch user');
        }
      }
    };
    
    fetchUser();
    
    // Cleanup function to run when component unmounts
    return () => {
      isMounted = false; // Prevent state updates after unmount
    };
  }, [userId]); // Re-run when userId changes
  
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

### Event Subscriptions

```jsx
function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array means only run on mount and unmount
  
  return <div>Window width: {windowWidth}px</div>;
}
```

---

## 🤔 Self-Check Questions

1. What is the difference between code that runs inside and outside of useEffect?
2. When does React run the cleanup function returned from useEffect?
3. What is a "dependency array" in useEffect and why is it important?
4. Why might you need to track whether a component is still mounted?
5. How are JavaScript closures important when working with React hooks?

---

## 📚 Quick Reference

- [Understanding JavaScript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [JavaScript Timers](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [React Hooks Rules](https://react.dev/warnings/invalid-hook-call-warning)

**Get ready to master component lifecycle and effect patterns in React!** 