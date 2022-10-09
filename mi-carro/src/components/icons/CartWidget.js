import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';


const CartWidget=()=>{
    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faCartArrowDown}/>
        </div>
    )
}

export default CartWidget;