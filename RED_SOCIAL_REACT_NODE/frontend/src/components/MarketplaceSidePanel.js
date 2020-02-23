import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MarketplaceSidePanel extends Component {
    render() {
        return (
            <nav className="nav col flex-column">
                <Link className="nav-link btn-lg text-lg-left m-2 my-3" to="/marketplace"><span><i className="fas fa-store fa-lg mr-3"></i>Marketplace</span></Link>
                <Link className="btn btn-primary ml-4" to="/producto" role="button">+ Vender algo</Link>
                <h6 className="m-4 mt-5">Categorías</h6>
                <Link className="nav-link" to="google.com"><i className="fas fa-building ml-1 mr-3"></i> Alquileres</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-tshirt mr-3"></i>Ropa y accesorios</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-home ml-1 mr-3"></i>Casa y jardín</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-car ml-1 mr-3"></i> Vehículos</Link>                        
                <Link className="nav-link" to="google.com"><i className="fas fa-mobile-alt ml-2 mr-3"></i> Electrónica</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-heart ml-1 mr-3"></i>Familia</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-guitar ml-1 mr-3"></i>Pasatiempos</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-binoculars ml-1 mr-3"></i>Clasificados</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-home ml-1 mr-3"></i>Viviendas en venta</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-gamepad ml-1 mr-3"></i>Entretenimiento</Link>
                                
            </nav>

        )
    }
}
