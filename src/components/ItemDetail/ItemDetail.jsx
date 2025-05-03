function ItemDetail({ producto }) {
    return (
      <div>
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
      </div>
    );
  }
  
  export default ItemDetail;