import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/detalle/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/finalizar-compra" element={<FinalizarCompra />} />
    </Routes>
  );
}

export default App;
