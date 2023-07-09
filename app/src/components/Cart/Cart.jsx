import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalAmount} = useCart()

    if (totalQuantity === 0){
        return (
            <div className="card" style={{width:30 + 'em'}}>
                <div className="card-body">
                    <h5 className="card-title">No hay items agregados al carrito</h5>
                    <Link to='/' className='btn btn-primary'>Ver productos</Link>
                </div>
            </div>  
        )
    }

    return (
        <div className="container">
            <h1 className="text-center text-primary">Carrito de compras</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Artículo</h4>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <h4>Subtotal</h4>
                </div>
            </div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h2>Total ${totalAmount}</h2>
            <button className="btn btn-secondary" onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout' className="btn btn-primary">Terminar compra</Link>
        </div>
    )
}

export default Cart