import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Todos from './components/Todos';
import TodoDetails from './components/TodoDetails';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route 
              path="/todos" 
              element={
                <ProtectedRoute>
                  <Todos />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/todos/:todoId" 
              element={
                <ProtectedRoute>
                  <TodoDetails />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
