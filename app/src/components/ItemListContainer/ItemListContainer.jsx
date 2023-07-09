import { useEffect, useState } from "react"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import Loading from "../Loading/Loading"


const ItemListContainer = ({ greeting }) => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const productsRef = !id
        ? collection(db,'products')
        : query(collection(db,'products'),where('category','==',id))

        setLoading(true)
        getDocs(productsRef)
            .then(querySnapshot =>{
                const productsAdapted = querySnapshot.docs.map(doc => {
                     const fields = doc.data()
                     return {id:doc.id,...fields}
                })
                setProducts(productsAdapted) 
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading){
        return <Loading />
    }

    return (
        <div>
            <div className="card border-primary w-100 text-center">
                <div className="card-body">
                    <h5 className="card-title">{greeting}</h5>
                </div>
            </div>
            <div className="container text-center">
                <ItemList products = {products} />
            </div>
        </div>
    )
}

export default ItemListContainer