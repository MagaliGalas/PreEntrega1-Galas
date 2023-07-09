import './Loading.css'

const Loading = ({text = "   Cargando..."}) => {
    return (
        <div className="loading-message">
            <div className="spinner-border text-primary" role="status"></div>
            <br />
            <strong>{text}</strong>
        </div>
    )    
}

export default Loading