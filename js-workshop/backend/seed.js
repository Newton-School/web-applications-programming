const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
const Order = require('./models/Order');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurantDB';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Sample menu items data
const menuItems = [
  {
    id: 1,
    itemName: 'Classic Burger',
    availableQuantity: 50,
    price: 9.99
  },
  {
    id: 2,
    itemName: 'Chicken Sandwich',
    availableQuantity: 40,
    price: 8.99
  },
  {
    id: 3,
    itemName: 'Veggie Burger',
    availableQuantity: 30,
    price: 7.99
  },
  {
    id: 4,
    itemName: 'Caesar Salad',
    availableQuantity: 25,
    price: 6.99
  },
  {
    id: 5,
    itemName: 'French Fries',
    availableQuantity: 100,
    price: 3.99
  },
  {
    id: 6,
    itemName: 'Chocolate Milkshake',
    availableQuantity: 35,
    price: 4.99
  },
  {
    id: 7,
    itemName: 'Grilled Cheese Sandwich',
    availableQuantity: 45,
    price: 5.99
  },
  {
    id: 8,
    itemName: 'Onion Rings',
    availableQuantity: 60,
    price: 4.49
  }
];

// Sample orders data
const orders = [
  {
    itemId: 1,
    quantity: 2,
    customerName: 'John Doe',
    status: 'completed'
  },
  {
    itemId: 3,
    quantity: 1,
    customerName: 'Jane Smith',
    status: 'pending'
  },
  {
    itemId: 5,
    quantity: 3,
    customerName: 'Mike Johnson',
    status: 'pending'
  },
  {
    itemId: 2,
    quantity: 2,
    customerName: 'Sarah Williams',
    status: 'completed'
  },
  {
    itemId: 6,
    quantity: 4,
    customerName: 'David Brown',
    status: 'pending'
  }
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await MenuItem.deleteMany({});
    await Order.deleteMany({});
    console.log('Cleared existing data');

    // Insert menu items
    const createdMenuItems = await MenuItem.insertMany(menuItems);
    console.log(`Inserted ${createdMenuItems.length} menu items`);

    // Insert orders
    const createdOrders = await Order.insertMany(orders);
    console.log(`Inserted ${createdOrders.length} orders`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 