// Función para aumentar la cantidad de un producto.
export const increaseCount = (cart, id) => {
    return cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
};

// Función para disminuir la cantidad de un producto.
export const decreaseCount = (cart, id) => {
    return cart
        .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0);
};

// Función para calcular el total del carrito.
export const calculateTotal = (cart) => {
    return cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
};
