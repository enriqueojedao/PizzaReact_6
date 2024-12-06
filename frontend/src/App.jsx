import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Cart from './pages/Cart/Cart';
import Pizza from './pages/Pizza/Pizza';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import PizzaProvider from './context/PizzaContext';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <PizzaProvider>
      <CartProvider>
        <BrowserRouter>
        <div className="min-vh-100 d-flex flex-column">
          <Navbar />
          <main className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </PizzaProvider>
  );
};

export default App;
