import cart from '../../../node_modules/bootstrap-icons/icons/cart.svg'

const CartWidget = ({productCount = 0}) =>{
    return (
        <form className='d-flex' role='cart'>
          <div>
            <img src={cart} alt='cart-widget'></img>
            <span className="position-absolute top-5 start-90 translate-middle badge rounded-pill bg-danger">{productCount}<span className="visually-hidden">Productos</span></span>
          </div>
        </form>
    )
}

export default CartWidget