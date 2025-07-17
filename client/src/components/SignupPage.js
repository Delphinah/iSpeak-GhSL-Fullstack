import React, { useState } from 'react';
import './LoginPage.css'; // reuse same styles

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error('Signup error:', err);
        setMessage('Something went wrong. Try again.');
      });
  };

  return (
    <div className="login-container">
      <h1 className="title">Sign Up</h1>

      <form className="form-container" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email Address"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="signin-btn" type="submit">Create Account</button>

        {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
      </form>
    </div>
  );
}

export default SignupPage;
