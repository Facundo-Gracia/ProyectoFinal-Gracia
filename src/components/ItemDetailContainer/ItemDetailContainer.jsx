import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del producto: {id}</h2>
    </div>
  );
}

export default ItemDetailContainer;