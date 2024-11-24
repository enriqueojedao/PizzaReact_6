import React, { useState, useEffect } from 'react';
import CardPizza from '../CardPizza/CardPizza';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <div>Cargando...</div>;

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        descrip={pizza.desc}
        idpizza={pizza.id}
      />
    </div>
  );
};

export default Pizza;
