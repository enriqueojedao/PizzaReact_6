import { useContext } from 'react';
import { PizzaContext } from '../../context/PizzaContext';
import CardPizza from '../../components/CardPizza/CardPizza';

const Pizza = () => { //Aquí pondré {pizzaId} en el futuro para que capture dinámicamente de "ver más"
    const pizzaId = "p001"; // Aquí pongo ids y pruebo si se ven renderizadas en Pizza.jsx
    const { pizzas } = useContext(PizzaContext);
    const pizza = pizzas.find((p) => p.id === pizzaId);

    if (!pizza) return <div>Cargando...</div>;

    return (
        <div className="container mt-4 d-flex d-flex flex-column align-items-center justify-content-center">
             <h2>Descripción:</h2>
             <p className="bg-dark text-white text-center p-3 rounded w-100">{pizza.desc}</p>
             <CardPizza {...pizza} hideVerMas={true} />
        </div>
    );
};

export default Pizza;