import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  function agregarAlCarrito(producto, cantidad) {
    const productoExistente = carrito.find(p => p.id === producto.id);
    
    if (productoExistente) {
      const actualizado = carrito.map(p =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  }

  // Calcular total de unidades en el carrito
  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  // Valor que estará disponible en todos los componentes
  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
}
