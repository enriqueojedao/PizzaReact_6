import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateCredentials } from '../../tools/loginRegisterTools';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials(email, password, confirmPassword)) {
      console.log('Registro exitoso');
    }
  };

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center">
      <div className="card p-3" style={{ width: '20rem' }}>
        <h2 className="text-center mb-4">Registro</h2>
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
            />
          </div>
          <div className="mb-3">
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;