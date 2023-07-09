import './checkout.css'
import { useCart } from "../../context/CartContext"
import { useNotification } from '../../context/NotificationContext'
import { useState } from 'react'
import {addDoc,collection,query,where,documentId, getDocs, writeBatch} from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'
import Loading from '../Loading/Loading'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const {cart, totalAmount,totalQuantity,clearCart,removeItem} = useCart()
    const {setNotification} = useNotification()
    const [fullName,setFullName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [emailConfirm,setEmailConfirm] = useState('')
    const [loading,setLoading] = useState(false)
    const [formComplete,setFormComplete] = useState(true)
    const [emailValid,setEmailValid] = useState(true)
    const navigate = useNavigate()

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            fullName,phone,email,emailConfirm
        }
        createOrder(userData)
      }

    const createOrder = async ({fullName,phone,email,emailConfirm}) => {
        const objOrder = {
            buyer: {
                name: fullName,
                phone: phone,
                email: email,
                timestamp: new Date()
            },
            items: cart,
            total: totalAmount
        }
        setEmailValid(email === emailConfirm && (email !== '' && email !== ''))
        setFormComplete(fullName !== '' && phone !== '' && email !== '' && emailConfirm !== '' )

        console.log(formComplete)
        console.log(emailValid)
        console.log(email + ' ' + emailConfirm + ' ' +(email === emailConfirm))
        
        if (!formComplete) {
            setNotification('error','Debe completar todos los datos')
        } else if (!emailValid) {
            setNotification('error','No coinciden los email ingresados')
        }  else {
            try {
                const ids = cart.map(item => item.id)
                const productsRef = query(collection(db,'products'),where(documentId(),'in',ids))
                const {docs} = await getDocs(productsRef)
                const batch = writeBatch(db)
                const outOfStock = []

                docs.forEach(doc => {
                    const docStock = doc.data().stock
                    const itemQuantity = cart.find(item => item.id === doc.id).quantity

                    if (docStock >= itemQuantity){
                        batch.update(doc.ref,{stock: docStock - itemQuantity})
                    } else {
                        outOfStock.push({id:doc.id,...doc.data()})
                    }
                })

                if(outOfStock.length === 0){
                    batch.commit()
                    const orderRef = collection(db,'orders')
                    const { id } = await addDoc(orderRef,objOrder)
                    setLoading(false)
                    clearCart()
                    setNotification('success',`La orden ${id} fue generada correctamente`)
                    navigate('/')
                }
                else{
                    outOfStock.forEach(item => removeItem(item.id))
                    setNotification('error','Existen productos sin stock que fueron retirados del carrito. Revise su orden y confirme nuevamente.')
                    navigate('/cart')
                }
            } catch (error) {
                setNotification('error', 'Ocurrió un error de la orden')
                console.error(error)
            }
        }
    }

    if(loading){
        return <Loading text={'Generando orden...'} />
    }

    return (
        <div className="container">
            <h1 className="text-center text-primary">Terminá tu compra</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <h2>Datos del comprador</h2>
                    <form onSubmit={handleConfirm}>
                    <div className="row">
                        <div className="col-12 checkout-col">
                            <div className="form-floating">
                                <input type="text" className={formComplete ? "form-control":"form-control is-invalid" } id="fullName" placeholder="Nombre y apellido" value={fullName} onChange={({target}) => setFullName(target.value)}/>
                                <label for="fullName">Nombre y apellido</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 checkout-col">
                            <div className="form-floating">
                                <input type="text" className={formComplete ? "form-control":"form-control is-invalid" } id="phone" placeholder="Teléfono" value={phone} onChange={({target}) => setPhone(target.value)}/>
                                <label for="phone">Teléfono</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 checkout-col">
                            <div className="form-floating">
                                <input type="email" className={formComplete ? "form-control":"form-control is-invalid" } id="email" placeholder="E-mail" value={email} onChange={({target}) => setEmail(target.value)}/>
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 checkout-col">
                            <div className="form-floating">
                                <input type="email" className={emailValid && formComplete ? "form-control":"form-control is-invalid" } id="emailConfirm" placeholder="E-mail" value={emailConfirm} onChange={({target}) => setEmailConfirm(target.value)}/>
                                <label for="emailConfirm">Confirmar E-mail</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Generar orden</button>
                    </form>
                </div>
                <div className="col-6">
                    <h2>Resumen de la orden</h2>
                    <div class="form-floating">
                        <input readonly className="form-control-plaintext" id="cantidadArticulos" value={totalQuantity}/>
                        <label for="cantidadArticulos">Cantidad de artículos</label>
                    </div>
                    <div class="form-floating">
                        <input readonly className="form-control-plaintext" id="precioTotal" value={"$" + totalAmount}/>
                        <label for="precioTotal">Total</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout