# Restaurant API

A simple Node.js API for a restaurant menu and order system that uses MongoDB.

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (running locally on the default port 27017)
- Environment variables can be set using a `.env` file (see [.env.example](.env.example))

## Installation

1. Clone this repository
2. Navigate to the backend directory
3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the seed script to populate the database (optional):

    ```bash
    npm run seed
    ```

## Running the API

Start the development server:

```bash
npm run dev
```

The server will run on <http://localhost:3000> by default.

## API Endpoints

### Menu Items

- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get a specific menu item by ID
- `POST /api/menu` - Create a new menu item
- `PUT /api/menu/:id` - Update a menu item
- `DELETE /api/menu/:id` - Delete a menu item

### Orders

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get a specific order by ID
- `POST /api/orders` - Create a new order
- `PATCH /api/orders/:id` - Update an order status
- `DELETE /api/orders/:id` - Delete an order

## Sample API Requests

### Creating a Menu Item

```json
POST /api/menu
{
  "id": 1,
  "itemName": "Burger",
  "availableQuantity": 20,
  "price": 9.99
}
```

### Placing an Order

```json
POST /api/orders
{
  "itemId": 1,
  "quantity": 2,
  "customerName": "John Doe"
}
```

### Updating Order Status

```json
PATCH /api/orders/:id
{
  "status": "completed"
}
```
