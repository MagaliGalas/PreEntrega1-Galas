import CartWidget from "../CartWidget/CartWidget"
import logo from '../../../node_modules/bootstrap-icons/icons/camera2.svg'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" alt="CameraShop">
                    <img src={logo} alt="logo" width="32" height="32"/> CameraShop
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Camaras</a>
                        <a className="nav-link" href="#">Lentes</a>
                        <a className="nav-link" href="#">Accesorios</a>
                    </div>    
                </div>
                <CartWidget/>
            </div>
        </nav>
        )
}

export default NavBar