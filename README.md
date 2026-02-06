# **Item Management System**

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss)

A modern full-stack application for managing items with React frontend and Spring Boot backend

---

## 🔗 Live Demo 
👉 

## 🔗 Repo 
👉 
---

# ✨ Features

**Feature	Description**
-📝 Create Items	Add new items with validation
-🔍 Smart Search	Search by name or ID
-📱 Responsive Design	Works on all devices
-⚡ Fast Performance	Built with Vite
-🎨 Modern UI	Clean interface with Tailwind CSS
-✅ Real-time Updates	Automatic refresh after actions
-🖼️ Screenshots

---

# 🚀 Quick Start
**Prerequisites**
```
Node.js 16+ (for frontend)
Git
```
# Installation
**Clone the repository**

```bash
git clone https://github.com/yourusername/item-management.git
cd item-management/frontend
```

**Install dependencies**

```bash
npm install
# or
yarn install
```

**Start development server**

```bash
npm run dev
# or
yarn dev
```
---

# Open in browser

```text
http://localhost:5173

---

## 📁 Project Structure
```text
item-management/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   ├── constants/       # Constants & validation
│   │   └── App.jsx          # Main app component
│   ├── public/              # Static files
│   ├── package.json         # Dependencies
│   └── vite.config.js       # Vite configuration
└── README.md               # This file
```
---

## 🛠️ Tech Stack

**Frontend**
```
React 18 - UI library with hooks

Vite - Next-gen build tool

Tailwind CSS - Utility-first CSS framework

Axios - HTTP client

SweetAlert2 - Beautiful alerts
```
---

## 🔧 Configuration

**Frontend**
```
Edit vite.config.js to change API proxy:

javascript
server: {
  proxy: {
    '/api': {
      target: 'https://item-api-production-0418.up.railway.app',
      changeOrigin: true,
      secure: false
    }
  }
}
```
---

## 📖 Usage Guide
```
Creating an Item

- Fill in the item details:
- Name (2-50 characters)
- Description (10-500 characters)
- Price (positive number)
- Category (optional)
- Click "Create Item"
↓
Success alert will confirm creation
↓
Searching Items

- By Name: Type in search box to filter items
- By ID: Switch to ID search and enter item ID
- Clear: Click clear button to reset search
↓
Viewing Items
↓
All items display in cards
↓
Each card shows: Name, ID, Price, Description, Category
↓
Results update in real-time
```
---

## 🔌 API Reference

**Endpoints**
```
POST	/api/items	Create new item
GET	/api/items	Get all items
GET	/api/items/{id}	Get item by ID
```
**Request Body (Create Item)**
```json
{
  "name": "Product Name",
  "description": "Product description here",
  "price": 29.99,
  "category": "Electronics"
}
```
**Response**
```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description here",
  "price": 29.99,
  "category": "Electronics"
}
```
---
