import CartWidget from "../CartWidget/CartWidget"
import logo from '../../../node_modules/bootstrap-icons/icons/camera2.svg'
import {NavLink,Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className='navbar-brand' alt="CameraShop" to='/'>
                    <img src={logo} alt="logo" width="32" height="32"/> CameraShop
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink to={'/category/camara'} className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}>Camaras</NavLink>
                        <NavLink to={'/category/lente'} className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}>Lentes</NavLink>
                        <NavLink to={'/category/accesorio'} className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}>Accesorios</NavLink>
                    </div>    
                </div>
                <Link to={'/cart'}><CartWidget/></Link>
            </div>
        </nav>
        )
}

export default NavBar