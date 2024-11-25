import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateCredentials } from '../../tools/loginRegisterTools';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(email, password)) {
      console.log('Inicio de sesión exitoso');
    }
  };

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center">
      <div className="card p-3" style={{ width: '20rem' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
