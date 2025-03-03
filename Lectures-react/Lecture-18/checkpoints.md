# Checkpoints for Lecture 18: API Integration in React

## Pre-read Checkpoint

### Multiple Choice Questions

1. What is a "side effect" in React?
   - A) An unintended bug in your code
   - B) Operations that happen outside React's rendering process, like data fetching or subscriptions
   - C) When one component directly modifies another component's state
   - D) When a component renders more slowly than expected

2. What is the primary purpose of the `useEffect` hook in React?
   - A) To create new state variables
   - B) To perform DOM manipulations directly
   - C) To handle side effects like data fetching, subscriptions, or manually changing the DOM
   - D) To improve the performance of React components

3. JavaScript Promises are used for:
   - A) Ensuring your code will never have bugs
   - B) Handling synchronous operations only
   - C) Handling asynchronous operations and their results
   - D) Creating UI components in React

4. What does the `async/await` syntax help with in JavaScript?
   - A) Writing asynchronous code that looks and behaves more like synchronous code
   - B) Making all operations happen simultaneously
   - C) Preventing any code from executing
   - D) Creating components that render faster

5. Which of the following is NOT a common HTTP request method used with APIs?
   - A) GET
   - B) POST
   - C) FETCH
   - D) DELETE

### Coding Questions

1. Write a function that uses the fetch API to get data from a URL and returns a Promise that resolves with the JSON data.

```javascript
// Complete the function
function fetchData(url) {
  // Your code here
}

// Example usage:
// fetchData('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
```

2. Convert the following Promise-based code to use async/await syntax:

```javascript
function getUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('User data:', data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      return null;
    });
}
```

## Mid-lecture Checkpoint

### Multiple Choice Questions

1. In the dependency array of useEffect, an empty array (`[]`) means:
   - A) The effect will run after every render
   - B) The effect will run only once after the initial render
   - C) The effect will never run
   - D) The effect will run only when there's an error

2. What is the correct order of state updates for a typical data fetch operation?
   - A) Set data → Set loading state → Handle errors
   - B) Handle errors → Set loading state → Set data
   - C) Set loading state → Fetch data → Set data/Handle errors
   - D) Fetch data → Set loading state → Handle errors

3. Which of the following is true about the fetch API in JavaScript?
   - A) It returns data directly, not a Promise
   - B) It automatically converts the response to JSON
   - C) It only works with GET requests
   - D) A response with an error status code (like 404) will still resolve the Promise

4. What does JSON stand for?
   - A) JavaScript Object Naming
   - B) JavaScript Object Notation
   - C) JavaScript Online Navigation
   - D) JavaScript Original Network

5. Which hook combination is commonly used for data fetching in React?
   - A) useState and useContext
   - B) useReducer and useRef
   - C) useState and useEffect
   - D) useCallback and useMemo

### Coding Questions

1. Create a React component that fetches and displays a random joke from an API when a button is clicked. Use the URL 'https://official-joke-api.appspot.com/random_joke' which returns a joke object with 'setup' and 'punchline' properties.

```jsx
function JokeGenerator() {
  // Add state variables here
  
  // Add the fetch function here
  
  return (
    <div>
      <h2>Random Joke Generator</h2>
      
      {/* Add a button to fetch a joke */}
      
      {/* Display loading state */}
      
      {/* Display the joke */}
      
      {/* Display any errors */}
    </div>
  );
}
```

2. Complete the React component that fetches a list of users and allows filtering them by name. The URL for the API is 'https://jsonplaceholder.typicode.com/users'.

```jsx
function UserDirectory() {
  // Add state variables here
  
  // Add the useEffect for fetching users
  
  // Add the filtering logic
  
  return (
    <div>
      <h2>User Directory</h2>
      
      <input
        type="text"
        placeholder="Filter by name..."
        // Add the onChange handler
      />
      
      {/* Display loading state */}
      
      {/* Display the users */}
      
      {/* Display any errors */}
    </div>
  );
}
```

## Post-lecture Checkpoint

### Multiple Choice Questions

1. Why is it important to include cleanup functions in useEffect when working with API calls?
   - A) To make the code more readable
   - B) To prevent setting state on unmounted components
   - C) Because React requires it for all useEffect hooks
   - D) To make API requests faster

2. What causes a "race condition" in React with data fetching?
   - A) When two components try to fetch data at the same time
   - B) When a newer request completes before an older one
   - C) When the API server is overloaded
   - D) When the internet connection is too slow

3. Which of the following statements is true about error handling in API calls?
   - A) React automatically handles all API errors
   - B) The fetch API rejects a Promise when receiving a 404 response
   - C) You should handle both network errors and unsuccessful HTTP status codes
   - D) Try/catch blocks are not useful with async/await and fetch

4. In React, what's the best practice for loading states during data fetching?
   - A) Always hide the component until data is loaded
   - B) Show a loading indicator while fetching and then replace it with content
   - C) Load all data before the app starts
   - D) There's no need to indicate loading states to users

5. What is the purpose of the `.json()` method in the fetch API?
   - A) To prettify JSON for display
   - B) To parse the response body as JSON
   - C) To convert JavaScript objects to JSON
   - D) To validate if the response is proper JSON

### Coding Questions

1. Create a React component that fetches and displays data from two API endpoints sequentially. First, fetch a user from 'https://jsonplaceholder.typicode.com/users/1', and then fetch their posts from 'https://jsonplaceholder.typicode.com/posts?userId=1'.

```jsx
function UserWithPosts() {
  // Add state variables here
  
  // Add the useEffect for fetching data
  
  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Display loading state */}
      
      {/* Display user information */}
      
      <h3>Posts by User</h3>
      
      {/* Display posts or loading state */}
      
      {/* Display any errors */}
    </div>
  );
}
```

2. Create a component that implements infinite scrolling for a list of posts. When the user scrolls to the bottom, load more posts. Use 'https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10' where `page` is the page number.

```jsx
function InfiniteScrollPosts() {
  // Add state for posts, page, loading, etc.
  
  // Add the useEffect for initial data fetching
  
  // Add the function to load more posts
  
  // Add a function to detect scroll to bottom
  
  return (
    <div className="posts-container">
      <h2>Posts</h2>
      
      {/* Display the list of posts */}
      
      {/* Display loading indicator when fetching more posts */}
      
      {/* Display any errors */}
    </div>
  );
}
``` 