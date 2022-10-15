
const productos=(props)=>{
    return(
        <div className="card">
            <h3> {props.nombre} </h3>
           <img alt={`productos ${props.nombre}`} src={props.imagen}/> 
           <ul><li> {props.nombre} </li><li> {props.precio} </li></ul>
           <button>Ver detalles</button>
        </div>
    )
}

export default productos;