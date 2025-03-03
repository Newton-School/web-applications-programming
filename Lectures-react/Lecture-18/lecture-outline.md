# Lecture 18: API Integration in React

## 1. Review and Introduction (5 minutes)

- Objective: Review component architecture and introduce API integration in React applications

- Key Points:
  1. Brief recap of component structure and props
  2. Overview of API integration importance
  3. Introduction to side effects in React

## 2. Understanding Side Effects with useEffect (15 minutes)

- Objective: Learn the fundamentals of side effects and the useEffect hook

- Key Concepts:
  1. What are side effects in React?
     - Operations outside React's rendering process
     - Examples: data fetching, subscriptions, manual DOM manipulations
     - Real-world analogy: Think of side effects like maintenance tasks for a house
  2. The useEffect hook
     - Basic syntax and dependency array
     - Component lifecycle connection

- Live Demo:

  ```jsx
  function DataDisplay() {
    const [count, setCount] = useState(0);
    
    // Basic useEffect
    useEffect(() => {
      console.log('Component rendered');
      
      // Optional cleanup function
      return () => {
        console.log('Component will unmount or re-render');
      };
    }, []); // Empty dependency array - runs once after initial render
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

- Student Practice:
    - Create components with different useEffect dependency arrays
    - Observe when effects run

## 3. Fetching Data from APIs (20 minutes)

- Objective: Learn how to fetch and manage data from external APIs

- Key Concepts:
  1. API requests in React
     - Using the Fetch API
     - Real-world analogy: Like ordering food delivery
  2. Implementing data fetching with useEffect
  3. Managing loading and error states

- Live Demo:

  ```jsx
  function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      // Function to fetch users
      const fetchUsers = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          setUsers(data);
          setError(null);
        } catch (error) {
          setError(`Error fetching users: ${error.message}`);
          setUsers([]);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchUsers();
      
    }, []); // Empty dependency array - fetch only on mount
    
    return (
      <div className="user-list">
        <h2>User List</h2>
        
        {isLoading && <p>Loading users...</p>}
        
        {error && <p className="error">{error}</p>}
        
        {!isLoading && !error && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  ```

- Practice Activity:
    - Build a component that fetches data from a public API
    - Display the fetched data with loading states

## 4. Working with API Data (15 minutes)

- Objective: Learn patterns for processing and displaying API data

- Key Concepts:
  1. Structuring state for API data
     - Separating concerns: data, loading, error states
  2. Filtering and transforming API data
  3. Basic error handling strategies

- Live Demo:

  ```jsx
  function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    
    // Fetch products
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchProducts();
    }, []);
    
    // Filter products when category or products change
    useEffect(() => {
      if (category === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter(product => product.category === category)
        );
      }
    }, [category, products]);
    
    return (
      <div className="product-catalog">
        <h2>Product Catalog</h2>
        
        {/* Category filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        
        {isLoading && <p>Loading products...</p>}
        
        {!isLoading && (
          <div>
            {filteredProducts.map(product => (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  ```

- Practice Exercise:
    - Implement filtering for API data
    - Add sorting functionality to the data display

## 5. Recap and Q&A (5 minutes)

- Review Key Points:
  1. Side effects and the useEffect hook
  2. API data fetching patterns
  3. Managing API data in state
  4. Error handling strategies

- Assignment Preview:
    - Build a mini-application that fetches and displays data from a public API
    - Implement proper loading states and data filtering

## Resources

- [React useEffect Documentation](https://react.dev/learn/synchronizing-with-effects)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSON Placeholder (for testing)](https://jsonplaceholder.typicode.com/) 