import {useEffect,useState} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product,setProduct ] = useState(null)

    const { id } = useParams()

    useEffect(() =>{
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error ("getProductById -> " + error)
            })
    },[id])

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