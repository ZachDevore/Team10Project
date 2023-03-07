import React, { useState } from 'react';
import './Login.css'; // replace with your own CSS file

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Here you can add code to authenticate the user and redirect them to the appropriate page
  }

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;

