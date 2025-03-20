# Restaurant Ordering System

## Problem Statement

You are tasked with creating a client-side JavaScript application for a restaurant ordering system. The application should allow customers to view the restaurant's menu, place orders, and check order status. This is strictly a browser-console based application.

## Requirements

1. **Menu Display**:
   - Fetch and display all available menu items from the restaurant's API
   - Show each item's ID, name, available quantity, and price

2. **Order Placement**:
   - Allow customers to select an item by its ID
   - Let customers specify the quantity they want to order
   - Collect the customer's name for the order
   - Submit the order to the API
   - Handle both successful and failed order submissions

3. **Order Feedback**:
   - Display a confirmation message when the order is successfully placed
   - Show an "Order Ready" notification 5 seconds after a successful order placement
   - Display appropriate error messages if the order cannot be placed

## Technical Constraints

- **Pure Browser JavaScript**: Use only JavaScript features available in modern browsers. No frameworks or libraries allowed.
- **User Input**: Use the browser's built-in `prompt()` and `confirm()` functions for all user input.
- **Async Operations**: Use the Fetch API and async/await for API requests.
- **API Integration**: The restaurant's API is available at <http://localhost:3000>. Refer to the [API Documentation](#api-documentation) for details on available endpoints.

## API Documentation

The complete API documentation is available at: <http://localhost:3000> (when the server is running)

### Key Endpoints

- `GET /api/menu` - Retrieves all menu items
- `GET /api/menu/:id` - Retrieves a specific menu item
- `POST /api/orders` - Places a new order
- `GET /api/orders` - Retrieves all orders

## Evaluation Criteria

Your solution will be evaluated based on the following marking scheme:

- **0 marks**: No attendance and no submission
- **1 marks**: Only submission of code
- **3 marks**: Only attendance, no submission
- **4 marks**: Attendance in class and submission of code
- **5 marks**: Attendance in class and submission of fully working code that meets all requirements

## Submission

Submit a single JavaScript file named `solution.js` that contains your complete solution.

## Getting Started

To help you get started, here's a basic structure for your solution:

```javascript
(async function() {
  // Welcome message
  console.log("Welcome to our Restaurant!");

  // Function to fetch and display the menu
  async function fetchMenu() {
    // Your code here
  }

  // Display the menu
  const menu = await fetchMenu();

  // Prompt the user for order details
  // Your code here

  // Create and submit the order
  // Your code here

  // Display order confirmation
  // Your code here

})();
```

Remember to use only browser JavaScript features and the prompt/confirm functions for user input. Good luck!

## Hints

*Instructor Notes: This section is for you to help guide students based on their skill level. Use these hints progressively as needed.*

### For All Students (Initial Setup)

- Make sure you have the backend server running (using `npm run dev` in the backend folder) and share the local URL with the students
- Ensure they are testing their code in a browser environment, not Node.js
- Remind them to use the browser console to view outputs and debug

### For Beginning Students (Bottom Cohort)

**Common Issues:**

- Difficulty understanding async/await and Promises
- Trouble with the Fetch API
- Problems parsing user input correctly

**Code Templates to Share:**

1. Basic fetch function template:

    ```javascript
    async function fetchMenu() {
      try {
        const response = await fetch('http://localhost:3000/api/menu');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching menu:", error);
        return [];
      }
    }
    ```

2. Input validation template:

    ```javascript
    function getValidInput(promptMessage, isValidFn) {
      let input;
      let valid = false;
      
      while (!valid) {
        input = prompt(promptMessage);
        
        // Allow user to cancel
        if (input === null) {
          return null;
        }
        
        valid = isValidFn(input);
        if (!valid) {
          alert("Invalid input. Please try again.");
        }
      }
      
      return input;
    }

    // Example usage:
    const quantity = getValidInput("Enter quantity:", 
      (input) => !isNaN(input) && parseInt(input) > 0);
    ```

3. Help them implement the basic menu display:

    ```javascript
    function displayMenu(menuItems) {
      console.log("Today's Menu:");
      menuItems.forEach(item => {
        console.log(`ID: ${item.id} | Name: ${item.itemName} | Available: ${item.availableQuantity} | Price: $${item.price}`);
      });
    }
    ```

### For Intermediate Students (Middle Cohort)

**Progressive Challenges:**

- Ask them to implement proper error handling for API requests
- Challenge them to add input validation for all user inputs
- Suggest implementing the setTimeout function for the "Order Ready" notification

**Code Snippets (Partial Solutions):**

1. Order creation template:

    ```javascript
    async function createOrder(itemId, quantity, customerName) {
      try {
        const orderData = {
          itemId: parseInt(itemId),
          quantity: parseInt(quantity),
          customerName: customerName
        };
        
        // POST request implementation needed here
        // ...
        
        return { success: true, data: response };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }
    ```

2. POST request implementation:

    ```javascript
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      throw new Error(`Failed to place order. Status: ${response.status}`);
    }

    return await response.json();
    ```

### For Advanced Students (Top Cohort)

**Extension Challenges:**

- Ask them to implement additional features like:
  - Checking the available quantity before order placement
  - Allowing the user to order multiple different items in one session
  - Implementing a simple order status tracking feature

**Advanced Error Handling:**

```javascript
async function placeOrder(order) {
  try {
    // First, check if item exists and has enough quantity
    const menuResponse = await fetch(`http://localhost:3000/api/menu/${order.itemId}`);
    if (!menuResponse.ok) {
      if (menuResponse.status === 404) {
        return { success: false, error: "Item not found" };
      }
      throw new Error(`Failed to check item. Status: ${menuResponse.status}`);
    }
    
    const menuItem = await menuResponse.json();
    if (menuItem.availableQuantity < order.quantity) {
      return { 
        success: false, 
        error: `Not enough items available. Only ${menuItem.availableQuantity} left.` 
      };
    }
    
    // Then place the order
    // Implementation goes here...
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### Additional Teaching Tips

1. **Bottom Cohort Strategy:**
   - Break down the problem into very small steps
   - Pair program with them to implement one function at a time
   - Provide more complete code templates and focus on understanding how they work

2. **Middle Cohort Strategy:**
   - Provide partial implementations and let them complete them
   - Focus on good practices like input validation and error handling
   - Ask guiding questions rather than giving direct solutions

3. **Top Cohort Strategy:**
   - Only give hints when they're completely stuck
   - Challenge them with extension problems
   - Ask them to explain their approach before they start coding
   - Encourage them to help peers after completing their own solution

Remember to ensure all students understand the core concepts even if implementation details vary. The goal is to have them learn async JavaScript, API interaction, and simple UI interaction through the browser.
