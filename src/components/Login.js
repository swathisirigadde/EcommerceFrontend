import React, { useState } from 'react';
import './Login.css';

function Login({ setRole }) {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input === 'admin' || input === 'user') {
      localStorage.setItem('role', input);
      setRole(input);
    } else {
      alert('Enter "admin" or "user" to login');
    }
  };

  return (
    <div className="login-box">
      <h3>Login</h3>
      <input
        placeholder="Enter role: admin / user"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;