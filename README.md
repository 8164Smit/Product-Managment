📦 React JS Product Management Application – Description
1️⃣ Project Overview 🖥️

The React Product Management Application is a web-based system that allows users to manage product data efficiently. The application enables users to view, add, update, and delete products using a modern React interface connected to a JSON Server API.

2️⃣ Technology Stack ⚙️

The project is developed using the following technologies:

⚛ React JS – Frontend framework for building UI components
🔀 React Router DOM – For navigation between pages
🗂 Redux – State management for product data
🔄 Redux Thunk – Handles asynchronous API calls
🌐 Axios – Used to connect with JSON Server API
🎨 Bootstrap – Provides responsive UI styling
🗄 JSON Server – Acts as a fake REST API backend
3️⃣ User Authentication 🔐

The application implements a basic login system using localStorage.

Features include:

👤 User login page
🔑 Login validation
🚫 Restricted access to protected pages
🔓 Logout functionality
🛡 PrivateRoute component ensures only logged-in users can modify products.
4️⃣ Product Management Features 📦

The application provides full CRUD functionality:

➕ Add Product

Users can add new products by filling a form with:

Product Title
Product Price
Product Image URL
Product Category
✏ Edit Product

Users can update product details using the Edit button.

❌ Delete Product

Users can remove products from the list using the Delete button.

📋 View Products

All products are displayed in Bootstrap product cards.

5️⃣ Product Searching and Filtering 🔍

The application allows users to easily find products by implementing:

🔎 Search functionality (search by product title)
📂 Filter by category
📊 Sorting by price
Low → High
High → Low
6️⃣ Redux State Management 🗃

Redux is used to manage application data globally.

Redux components include:

🏪 Store – Central state storage
📩 Actions – Defines operations like add, update, delete
🔁 Reducers – Updates state based on actions
🔗 React-Redux – Connects React components with Redux store
7️⃣ API Integration 🌐

The application connects to a JSON Server REST API using Axios.

Supported API operations include:

GET → Fetch products
POST → Add new product
PUT → Update product
DELETE → Remove product
8️⃣ Responsive User Interface 🎨

Bootstrap is used to create a clean and responsive design:

📱 Mobile friendly layout
🧾 Styled product cards
🧑‍💻 Responsive navigation bar
📝 Clean product forms
9️⃣ Navigation System 🧭

The project uses React Router for navigation.

Pages included:

🏠 Product List Page
➕ Add Product Page
🔐 Login Page
🔟 Learning Objectives 🎓

This project helps understand:

⚛ React Component Structure
🔀 Routing with React Router
🗂 State Management with Redux
🔄 Async API Calls using Redux Thunk
🌐 REST API Integration
🎨 Responsive UI with Bootstrap
🔐 Basic Authentication
✅ Conclusion

The React Product Management Application demonstrates how modern web applications manage data using React, Redux, and REST APIs. It provides a simple and effective solution for performing CRUD operations on product data with authentication and filtering features.

<img width="1920" height="1032" alt="Product-Managment" src="https://github.com/user-attachments/assets/7d171a99-9f10-4450-94b1-0eda9bb66647" />
