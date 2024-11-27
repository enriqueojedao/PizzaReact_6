import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CardPizza from '../../components/CardPizza/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]); 

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data); 
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          {pizzas.length > 0 ? ( // Si hay pizzas, renderizarlas...
            pizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                <CardPizza
                  {...pizza}
                />
              </div>
            ))
          ) : (
            <p>Cargando pizzas...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
