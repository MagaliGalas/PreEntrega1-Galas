const CartItem = ({title,price,quantity}) => {
    return(
        <div className="row">
            <div className="col-4">
                <strong>{title}</strong>
            </div>
            <div className="col-4">
                <p>
                    Cantidad: {quantity} <br />
                    Precio unitario: ${price}
                </p>
            </div>
            <div className="col-4">
                <p>
                   ${Number(quantity)*Number(price)} 
                </p>
            </div>
        </div>
    )
}

export default CartItem