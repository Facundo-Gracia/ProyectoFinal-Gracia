import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Bienvenidos a la pastelería n°1 de Argentina" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;