
import listaProductos from "../ItemList";
import productos from "../Item";

function Container(greeting) {
    return (
        <div>
          
          <h1>{greeting.mensaje}</h1>

          {listaProductos.map((productos,1)(
            <productos
            titulo = {productos.nombre}
            />
          ))}
        </div>
      
    )
  }
  
  export default Container;
  