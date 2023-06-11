import {useState} from 'react'

const ItemCount=({stock,initialValue,onAdd}) => {
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        if (count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () =>{
        if (count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div>
            <div className="input-group">
                <button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
                  <input type="text" className="form-control text-center" value={count}/>
                <button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount