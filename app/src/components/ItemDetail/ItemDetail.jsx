import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useCart } from "../../context/CartContext";


const ItemDetail = (item) => {
    const [quantitySelected,setQuantitySelected] = useState(0)
    
    const {addItem} = useCart() 


    const handleOnAdd = (quantity) => {
        setQuantitySelected(quantity)
        const objProduct = item;
        addItem(objProduct,quantity)
        
    }
    
    if(item.id === null){
        return(
            <div className="card" style={{width:30 + 'em'}}>
                <div className="card-body">
                    <h5 className="card-title">Producto no encontrado</h5>
                    <p className="card-text">Intente con otro código de producto</p>
                </div>
            </div>      
        )
    }

    return (
        <div className="card" style={{width:30 + 'em'}}>
            <img src={item.pictureUrl} className="card-img-top" />
            {
                item.stock > 0 ?(
                    <span className="badge text-bg-info">Stock: {item.stock} unidades</span>
                ) : (
                    <span className="badge text-bg-danger">Sin stock</span>
                )
            }
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <h2>${item.price}</h2>
                <div>
                    {
                        item.stock > 0 ? (
                            quantitySelected > 0 ? (
                                <Link to='/cart' className="btn btn-primary">Terminar compra</Link>
                            ):(
                                <ItemCount initialValue={0} stock={item.stock} onAdd={handleOnAdd}/>
                            )
                        ) : null
                    }
                </div>
            </div>
        </div>        
    )
    
}

export default ItemDetail