import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="containerCart">
      <Link to="/cart">
        <p>({cantidadTotal})</p>
        <img className="carrito" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Carrito" />
      </Link>
    </div>
  );
}

export default CartWidget;