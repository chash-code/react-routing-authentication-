# React Routing with Authentication

A React application demonstrating authentication-based route protection with three main pages: Home (unprotected), Login (unprotected), and Todos (protected).

## Project Structure
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Todos.jsx
│   │   ├── TodoDetails.jsx
│   │   └── ProtectedRoute.jsx
└── package.json
## Pages & Routes

### 1. Home Page (Unprotected)
- **Route:** `/`
- **Access:** All users
- **Content:** Welcome message with link to Login

### 2. Login Page (Unprotected)
- **Route:** `/login`
- **Access:** All users
- **Credentials:**
  - Email: `admin@gmail.com`
  - Password: `admin@123`
- **Features:**
  - Form validation
  - Stores `isLoggedIn = true` in localStorage
  - Redirects to `/todos` on success

### 3. Todos Page (Protected)
- **Route:** `/todos`
- **Access:** Logged-in users only
- **Features:**
  - Fetches first 10 todos from API
  - Displays in grid cards
  - Each todo is clickable
  - Redirects to `/login` if not logged in

### 4. Todo Details Page (Protected + Dynamic)
- **Route:** `/todos/:todoId`
- **Access:** Logged-in users only
- **Features:**
  - Reads `todoId` from URL using `useParams`
  - Fetches single todo details from API
  - Displays ID, Title, and Completion status

## Route Protection Rules

✅ `/todos` and `/todos/:todoId` are **protected**  
✅ Redirect to `/login` if not logged in  
✅ Use `ProtectedRoute` component wrapper  
✅ Use `Navigate` for redirection

## Features

- ✅ Authentication with localStorage
- ✅ Protected routes
- ✅ Dynamic routing with URL parameters
- ✅ Form validation
- ✅ API integration
- ✅ Clean UI with styling

## How to Run

```bash
npm install
npm start
Technologies Used
React 18
React Router DOM 6
JSONPlaceholder API
localStorage for auth state
---
