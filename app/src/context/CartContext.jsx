import { useContext } from "react";
import { createContext,useState } from "react";
import { useNotification } from "./NotificationContext";

export const CartContext = createContext({
    cart : [],
    addItem : () => {},
    removeItem : () => {},
    clearCart : () => {},
    totalQuantity : 0,
    totalAmount : 0
})

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const {setNotification} = useNotification()

    const addItem = (item,quantity) => {
        
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item,quantity}])
            const message = quantity > 1 ? 
                        `Se agregaron ${quantity} ${item.title} al carrito` :
                        `Se agregó ${quantity} ${item.title} al carrito`
            setNotification ('success',message)
        } else {
            console.error('El producto ya fue agregado')
            setNotification ('error','El producto ya está en el carrito')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(item => item.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }

    const totalQuantity = cart.reduce((total, item) => {
        return total + Number(item.quantity);
      }, 0);
    const totalAmount = cart.reduce((total, item) => {
        return total + Number(item.price);
      }, 0);

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,totalQuantity,totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}