**Item Management System**
<div align="center">
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite
https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwindcss
https://img.shields.io/badge/Spring_Boot-3.0-6DB33F?style=for-the-badge&logo=springboot
https://img.shields.io/badge/Deployed_on-Railway-0B0D0E?style=for-the-badge&logo=railway

A modern full-stack application for managing items with React frontend and Spring Boot backend

Live Demo • Backend Repository • Report Bug • Request Feature

</div>
✨ Features
Feature	Description
📝 Create Items	Add new items with validation
🔍 Smart Search	Search by name or ID
📱 Responsive Design	Works on all devices
⚡ Fast Performance	Built with Vite
🎨 Modern UI	Clean interface with Tailwind CSS
✅ Real-time Updates	Automatic refresh after actions
🖼️ Screenshots
https://screenshots/dashboard.png
Main dashboard showing item creation and list

https://screenshots/mobile.png
Responsive mobile interface

🚀 Quick Start
Prerequisites
Node.js 16+ (for frontend)

Java 17+ (for backend)

Git

Installation
Clone the repository

bash
git clone https://github.com/yourusername/item-management.git
cd item-management/frontend
Install dependencies

bash
npm install
# or
yarn install
Start development server

bash
npm run dev
# or
yarn dev
Open in browser

text
http://localhost:5173
📁 Project Structure
text
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
├── backend/                 # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/example/
│   │       ├── controller/  # REST controllers
│   │       ├── model/       # Data models
│   │       ├── service/     # Business logic
│   │       └── ItemApiApplication.java
│   └── pom.xml             # Maven configuration
└── README.md               # This file
🛠️ Tech Stack
Frontend
React 18 - UI library with hooks

Vite - Next-gen build tool

Tailwind CSS - Utility-first CSS framework

Axios - HTTP client

SweetAlert2 - Beautiful alerts

Backend
Spring Boot 3 - Java framework

Spring Web - REST API support

Spring Validation - Input validation

In-memory Storage - Simple data persistence

🔧 Configuration
Frontend
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
Environment Variables
Create .env file:

env
VITE_API_BASE_URL=https://your-api-url.com/api
📖 Usage Guide
Creating an Item
Fill in the item details:

Name (2-50 characters)

Description (10-500 characters)

Price (positive number)

Category (optional)

Click "Create Item"

Success alert will confirm creation

Searching Items
By Name: Type in search box to filter items

By ID: Switch to ID search and enter item ID

Clear: Click clear button to reset search

Viewing Items
All items display in cards

Each card shows: Name, ID, Price, Description, Category

Results update in real-time

🔌 API Reference
Endpoints
Method	Endpoint	Description
POST	/api/items	Create new item
GET	/api/items	Get all items
GET	/api/items/{id}	Get item by ID
Request Body (Create Item)
json
{
  "name": "Product Name",
  "description": "Product description here",
  "price": 29.99,
  "category": "Electronics"
}
Response
json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description here",
  "price": 29.99,
  "category": "Electronics"
}
🚀 Deployment
Deploy Frontend to Railway
Install Railway CLI

bash
npm i -g @railway/cli
Login to Railway

bash
railway login
Initialize Project

bash
railway init
Deploy

bash
railway up
Deploy Backend to Railway
Create new Railway project

Select "Deploy from GitHub repo"

Configure Maven build

Set Java version to 17

Alternative Deployment Options
Platform	Command	Notes
Vercel	vercel	Great for frontend
Netlify	netlify deploy	Easy static hosting
Render	Web UI	Full-stack support
🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository

Create a feature branch:

bash
git checkout -b feature/amazing-feature
Commit your changes:

bash
git commit -m 'Add amazing feature'
Push to the branch:

bash
git push origin feature/amazing-feature
Open a Pull Request

Development Guidelines
Follow existing code style

Add comments for complex logic

Update documentation as needed

Test changes thoroughly

🐛 Troubleshooting
Issue	Solution
CORS errors	Check backend CORS configuration
API not connecting	Verify backend is running
Build failing	Clear node_modules and reinstall
Form validation errors	Check character limits in backend model
Common Commands
bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Fix linting issues
npm run lint
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Vite for the excellent developer experience

Tailwind CSS for the amazing utility classes

Spring Boot for robust backend framework

Railway for seamless deployment

📞 Support
For support, please:

Check the Troubleshooting section

Search existing Issues

Create a new issue if needed

📊 Project Status
https://img.shields.io/github/last-commit/yourusername/item-management
https://img.shields.io/github/issues/yourusername/item-management
https://img.shields.io/github/stars/yourusername/item-management

Active Development - New features and improvements are regularly added.

<div align="center"> Made with ❤️ by [Your Name] </div>
