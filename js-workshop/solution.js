(async function() {
  // Welcome message
  console.log("Welcome to our Restaurant!");

  // Function to fetch and display the menu
  async function fetchMenu() {
    try {
      const response = await fetch('https://example.com/api/menu'); // Replace with actual API URL
      const menu = await response.json();
      console.log("Today's Menu:");
      menu.forEach(item => {
        console.log(`ID: ${item.id} | Name: ${item.itemName} | Available: ${item.availableQuantity} | Price: $${item.price}`);
      });
      return menu;
    } catch (error) {
      console.error("Error fetching menu:", error);
      return [];
    }
  }

  // Display the menu
  const menu = await fetchMenu();

  // Prompt the user for order details
  const itemIdInput = prompt("Enter the item ID you want to order:");
  const quantityInput = prompt("Enter the quantity you want to order:");
  const customerName = prompt("Enter your name:");

  // Create the order object
  const order = {
    itemId: parseInt(itemIdInput),
    quantity: parseInt(quantityInput),
    customerName: customerName
  };

  // Confirming order placement
  console.log("Placing your order...");

  // POST the order to the API
  try {
    const postResponse = await fetch('https://example.com/api/orders', { // Replace with actual API URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    if (postResponse.ok) {
      console.log("Order placed successfully!");
    } else {
      console.error("Failed to place order. Please try again.");
      return;
    }
  } catch (error) {
    console.error("Error placing order:", error);
    return;
  }

  // Wait for 5 seconds, then announce that the order is ready
  setTimeout(() => {
    console.log("Order is ready! Thank you for shopping with us!");
  }, 5000);

  // Function to check available quantities of items
  async function checkAvailableQuantity() {
    try {
      const response = await fetch('https://example.com/api/menu'); // Replace with actual API URL
      const updatedMenu = await response.json();
      console.log("Updated Menu Quantities:");
      updatedMenu.forEach(item => {
        console.log(`ID: ${item.id} | Name: ${item.itemName} | Available: ${item.availableQuantity}`);
      });
    } catch (error) {
      console.error("Error checking available quantities:", error);
    }
  }

  // Function to display list of orders
  async function displayOrders() {
    try {
      const response = await fetch('https://example.com/api/orders'); // Replace with actual API URL
      const orders = await response.json();
      console.log("List of Orders:");
      orders.forEach(order => {
        console.log(`Customer: ${order.customerName} | Item ID: ${order.itemId} | Quantity: ${order.quantity}`);
      });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  // Uncomment the following lines to use these functions as needed:
  // await checkAvailableQuantity();
  // await displayOrders();

})();