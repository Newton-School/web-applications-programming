# Lecture 19: Hooks and React Lifecycle

## 1. Review and Introduction (5 minutes)

- Objective: Review API integration and introduce React lifecycle concepts

- Key Points:
  1. Brief recap of useEffect for API calls
  2. Overview of React's component lifecycle
  3. Introduction to lifecycle with hooks

## 2. Understanding the React Component Lifecycle (15 minutes)

- Objective: Learn the fundamentals of how React components are born, live, and die

- Key Concepts:
  1. Component lifecycle phases
     - Mounting: Component is created and inserted into DOM
     - Updating: Component is re-rendered due to changes
     - Unmounting: Component is removed from DOM
     - Real-world analogy: Think of component lifecycle like a person's life
  2. How hooks connect to the lifecycle
  3. Common lifecycle scenarios

- Live Demo:

  ```jsx
  function LifecycleDemo() {
    console.log('Rendering component');
    
    // This runs only on mount
    useEffect(() => {
      console.log('Component mounted');
      
      return () => {
        console.log('Component will unmount');
      };
    }, []);
    
    // This runs when dependency changes
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log('Count changed:', count);
    }, [count]);
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  
  function App() {
    const [showDemo, setShowDemo] = useState(true);
    
    return (
      <div>
        <button onClick={() => setShowDemo(!showDemo)}>
          {showDemo ? 'Hide' : 'Show'} Component
        </button>
        
        {showDemo && <LifecycleDemo />}
      </div>
    );
  }
  ```

- Student Practice:
    - Create components that log different lifecycle events
    - Experiment with mounting and unmounting components

## 3. Advanced useEffect Techniques (15 minutes)

- Objective: Master important aspects of the useEffect hook

- Key Concepts:
  1. The dependency array in detail
     - Empty array: run once on mount
     - No array: run on every render
     - With dependencies: run when dependencies change
  2. Cleanup functions
     - Preventing memory leaks
     - Cancelling operations

- Live Demo:

  ```jsx
  function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      
      setIsLoading(true);
      let isMounted = true;
      
      // Simulate search API
      const timer = setTimeout(() => {
        // Simulated search results
        const searchResults = [
          `Result 1 for "${query}"`,
          `Result 2 for "${query}"`,
          `Result 3 for "${query}"`,
        ];
        
        if (isMounted) {
          setResults(searchResults);
          setIsLoading(false);
        }
      }, 500);
      
      // Cleanup function
      return () => {
        clearTimeout(timer);
        isMounted = false;
      };
    }, [query]); // Only re-run when query changes
    
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search..."
        />
        
        {isLoading && <p>Searching...</p>}
        
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

- Practice Activity:
    - Build a debounced search component
    - Implement cleanup for API calls

## 4. Building Practical Applications (20 minutes)

- Objective: Apply lifecycle and effect concepts to create real-world components

- Key Concepts:
  1. Timer/Clock Applications
     - Using intervals with useEffect
     - Proper cleanup to prevent memory leaks
  2. Pagination Implementation
     - Managing data for specific pages
     - Fetching data based on page changes

- Live Demo (Timer):

  ```jsx
  function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
      let intervalId = null;
      
      if (isRunning) {
        intervalId = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
      }
      
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [isRunning]);
    
    const formatTime = (totalSeconds) => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    return (
      <div>
        <h2>Timer: {formatTime(seconds)}</h2>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    );
  }
  ```

- Live Demo (Pagination):

  ```jsx
  function PaginatedList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    const postsPerPage = 5;
    
    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true);
        
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
          );
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchPosts();
    }, [currentPage]);
    
    return (
      <div>
        <h2>Posts</h2>
        
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
            
            <div>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span> Page {currentPage} </span>
              <button 
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
  ```

- Practice Exercise:
    - Create a countdown timer with pause/resume
    - Implement a simple paginated gallery

## 5. Recap and Q&A (5 minutes)

- Review Key Points:
  1. Component lifecycle in React
  2. useEffect patterns and cleanup
  3. Practical applications with timers and pagination

- Assignment Preview:
    - Create an application that combines lifecycle concepts
    - Focus on proper cleanup and memory management

## Resources

- [React useEffect Documentation](https://react.dev/learn/synchronizing-with-effects)
- [React Hooks Reference](https://react.dev/reference/react)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) 