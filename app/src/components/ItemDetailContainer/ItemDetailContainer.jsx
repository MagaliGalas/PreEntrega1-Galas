import {useEffect,useState} from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import Loading from "../Loading/Loading" 

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState(null)
    const [loading,setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() =>{
        const productRef = doc(db,'products',id)

        setLoading(true)
        getDoc(productRef)
            .then(querySnapshot =>{
                if(querySnapshot.exists()){
                    const productAdapted = {id:querySnapshot.id, ...querySnapshot.data()}
                    setProduct(productAdapted) 
                }
                else {
                    setProduct({id:null})
                }
            })
            .finally(() => {
                setLoading(false)
            })
    },[id])

    if (loading){
        return <Loading />
    }

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className="col-4"></div>
                <div className="col-4 align-self-center">
                    <ItemDetail {...product} />
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default ItemDetailContainer