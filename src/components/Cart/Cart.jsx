import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { carrito } = useContext(CartContext);

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.map((prod) => (
        <div key={prod.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
          <p>Producto: {prod.nombre}</p>
          <p>Precio: ${prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Subtotal: ${prod.precio * prod.cantidad}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;