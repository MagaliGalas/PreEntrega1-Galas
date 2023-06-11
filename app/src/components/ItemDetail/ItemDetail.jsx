import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title,description,price,pictureUrl,stock }) => {
    return (
        <div className="card" style={{width:30 + 'em'}}>
            <img src={pictureUrl} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <h2>${price}</h2>
                <span className="badge text-bg-info">Stock: {stock} unidades</span>
                <ItemCount initialValue={0} stock={stock} onAdd={(count) => console.log('Cantidad agregada ',count)} />
            </div>
        </div>        
    )
    
}

export default ItemDetail