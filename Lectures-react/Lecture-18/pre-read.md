# Pre-read: API Integration in React

## 🎯 Learning Objectives

Before diving into API Integration in React, let's review the key concepts you'll need:

- Understand asynchronous JavaScript concepts for data fetching
- Review Promise syntax and async/await patterns
- Learn about side effects in React applications
- Prepare for integrating external APIs with React components

---

## 1. JavaScript Asynchronous Concepts Review

### Understanding Asynchronous Code

In JavaScript, code normally runs synchronously (one line after another), but some operations like fetching data from servers need to be asynchronous:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
console.log("End");

// Output:
// Start
// End
// This runs after 1 second
```

### Promises

Promises are objects representing the eventual completion or failure of an asynchronous operation:

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

// Using a promise
myPromise
  .then(result => {
    console.log(result); // "Operation succeeded!"
  })
  .catch(error => {
    console.error(error);
  });
```

### Async/Await

Async/await makes asynchronous code look and behave more like synchronous code:

```javascript
// Without async/await
function getData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// With async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 2. Browser Fetch API

The Fetch API provides a modern interface for fetching resources:

```javascript
// Basic GET request
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// POST request with data
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 3. Introduction to Side Effects in React

In React, a "side effect" is anything that happens outside of React's normal render cycle, such as:

- Data fetching from an API
- Setting up subscriptions
- Manually changing the DOM
- Setting timers (setTimeout, setInterval)

Side effects typically go inside the `useEffect` hook:

```jsx
import { useState, useEffect } from 'react';

function Weather() {
  const [temperature, setTemperature] = useState(null);
  
  useEffect(() => {
    // This is a "side effect" - fetching data from an API
    fetch('https://api.weather.com/current')
      .then(response => response.json())
      .then(data => setTemperature(data.temperature));
  }, []); // Empty dependency array means "run once after initial render"
  
  return (
    <div>
      {temperature ? `Current temperature: ${temperature}°C` : 'Loading...'}
    </div>
  );
}
```

---

## 4. Handling API Data in JavaScript

When working with API data, you'll often need to transform it using JavaScript array methods:

```javascript
// Assume we fetched this data from an API
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 }
];

// Filtering data
const adultsOver30 = users.filter(user => user.age > 30);
// Result: users with id 3 and 4

// Transforming data
const userNames = users.map(user => user.name);
// Result: ['Alice', 'Bob', 'Charlie', 'Dave']

// Finding specific data
const bob = users.find(user => user.name === 'Bob');
// Result: { id: 2, name: 'Bob', age: 30 }

// Checking conditions
const hasYoungUsers = users.some(user => user.age < 30);
// Result: true
```

---

## 5. Basic Loading and Error States

When working with APIs, you'll need to handle loading and error states:

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Reset states when userId changes
    setLoading(true);
    setError(null);
    
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

---

## 🤔 Self-Check Questions

1. What is the difference between synchronous and asynchronous code?
2. How do Promises help manage asynchronous operations?
3. What advantages does async/await provide over traditional Promise syntax?
4. What type of operations are considered "side effects" in React?
5. Why should you handle loading and error states when working with APIs?

---

## 📚 Quick Reference

- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Array Methods for Data Processing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [React Effect Hook](https://react.dev/reference/react/useEffect)

**Get ready to connect your React applications to real data sources!**
