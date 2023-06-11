import {Link} from 'react-router-dom'

const Item = ({id,title,price,pictureUrl}) => {
return(
    <div className="col-3 align-self-center">
        <div className="card" style={{width:20 + 'em'}}>
            <img src={pictureUrl} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h2>${price}</h2>
                <Link to={'/item/' + id }>
                    <button className="btn btn-primary">
                        Ver Detalle
                    </button>
                </Link>
            </div>
        </div>
    </div>
)}

export default Item
