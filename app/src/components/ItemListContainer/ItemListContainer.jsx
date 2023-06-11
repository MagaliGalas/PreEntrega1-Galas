import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products,setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const func = id ? getProductsByCategory : getProducts
        func(id)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error('getProducts() -> ' + error)
            })
    }, [id])

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