import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  const [page, setPage] = useState('login');

  return (
    <>
      {page === 'login' ? (
        <LoginPage onSwitch={() => setPage('signup')} />
      ) : (
        <SignupPage onSwitch={() => setPage('login')} />
      )}
    </>
  );
}

export default App;
