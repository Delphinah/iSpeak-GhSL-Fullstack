import React, { useState } from 'react';
import './LoginPage.css';
function LoginPage({ onSwitch }) {
  //  Hold email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //  Handle the Sign In click
  const handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          alert('✅ Login successful!');
          setError('');
        } else {
          setError(data.message || 'Login failed');
        }
      })
      .catch((err) => {
        console.error('Login error:', err);
        setError('Something went wrong. Try again.');
      });
  };
  return (
    <div className="login-container">
      <img src="/logo.png" alt="iSpeak GhSL Logo" className="logo" />

      <h1 className="title">iSpeak GhSL</h1>
      <p className="tagline">Bridging Voices, Breaking Barriers</p>
      <p className="subtitle">Let’s communicate in Ghanaian Sign Language</p>
      <form className="form-container" onSubmit={handleLogin}>
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

        <button className="signin-btn" type="submit">Sign in</button>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        <p className="signup-text">
          Don’t have an account? <span className="signup-link">SIGN UP</span>
          <span className="signup-link" onClick={onSwitch} style={{ cursor: 'pointer' }}>
    SIGN UP
  </span>
</p>
         </form>
    </div>
  );
}

export default LoginPage;


      