import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TodoDetails = () => {
  const { todoId } = useParams(); // Read todoId from URL
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch single todo by ID
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(data => {
        setTodo(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching todo:', error);
        setLoading(false);
      });
  }, [todoId]);
  
  if (loading) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '3rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h2>Loading todo details...</h2>
      </div>
    );
  }
  
  if (!todo) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '3rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h2>Todo not found</h2>
      </div>
    );
  }
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginTop: '2rem',
      maxWidth: '600px',
      margin: '2rem auto'
    }}>
      <button
        onClick={() => navigate('/todos')}
        style={{
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '2rem',
          fontSize: '1rem'
        }}
      >
        ← Back to Todos
      </button>
      
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Todo Details
      </h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '2px solid #e9ecef'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            marginBottom: '0.5rem'
          }}>
            Todo ID
          </h3>
          <p style={{
            fontSize: '1.5rem',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            {todo.id}
          </p>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            marginBottom: '0.5rem'
          }}>
            Title
          </h3>
          <p style={{
            fontSize: '1.3rem',
            color: '#2c3e50',
            lineHeight: '1.6'
          }}>
            {todo.title}
          </p>
        </div>
        
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            marginBottom: '0.5rem'
          }}>
            Completion Status
          </h3>
          <span style={{
            display: 'inline-block',
            padding: '10px 25px',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            backgroundColor: todo.completed ? '#27ae60' : '#e74c3c',
            color: 'white'
          }}>
            {todo.completed ? 'Completed' : 'Not Completed'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
