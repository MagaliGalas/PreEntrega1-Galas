const ItemListContainer = ({ greeting }) => {
    return (
        <div className="card border-primary w-100 text-center">
            <div className="card-body">
                <h5 className="card-title">{greeting}</h5>
            </div>
        </div>
    )
}

export default ItemListContainer