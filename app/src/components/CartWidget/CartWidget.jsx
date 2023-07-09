import './CartWidget.css'
import cartIcon from '../../../node_modules/bootstrap-icons/icons/cart.svg'
import { useCart  } from '../../context/CartContext'

const CartWidget = () =>{
  const {totalQuantity} = useCart()
    return (
        <form className='d-flex cart-widget' role='cart'>
          <div>
            <img src={cartIcon} alt='cart-widget'></img>
            <span className="position-absolute top-5 start-90 translate-middle badge rounded-pill bg-danger">{totalQuantity}</span><span className="visually-hidden">Productos</span>
          </div>
        </form>
    )
}

export default CartWidget