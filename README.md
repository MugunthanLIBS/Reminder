# E-commerce Item Management API

A simple RESTful API for managing e-commerce items (like Flipkart/Amazon).

## Features
- ✅ Add new items with input validation
- ✅ Get item by ID
- ✅ In-memory data storage using ArrayList
- ✅ Jakarta Bean Validation for input validation
- ✅ Proper HTTP status codes

## API Endpoints

| Method | Endpoint          | Description                    |
|--------|-------------------|--------------------------------|
| POST   | `/api/items`      | Add new item (returns 201)     |
| GET    | `/api/items/{id}` | Get item by ID (returns 404 if not found) |
| GET    | `/api/items`      | Get all items (bonus endpoint) |

## Input Validation Rules
- `name`: Required, 2-100 characters
- `description`: Required, 10-500 characters  
- `price`: Required, must be a valid number
- `category`: Optional

## Sample Requests

**Add Item:**
```bash
curl -X POST http://localhost:8080/api/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "iPhone 15 Pro",
    "description": "Latest iPhone with A17 Pro chip and titanium design",
    "price": 999.99,
    "category": "Electronics"
  }'
