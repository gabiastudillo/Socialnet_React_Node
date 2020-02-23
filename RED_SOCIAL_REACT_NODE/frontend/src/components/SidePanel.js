import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SidePanel extends Component {
    render() {
        return (
            <nav className="nav flex-column mt-2">
                <Link className="nav-link active m-2" to="/"><i className="fas fa-newspaper mr-3"></i>Noticias</Link>
                <Link className="nav-link m-2" to="google.com"><i className="fas fa-envelope mr-3"></i>Mensajería</Link>
                <Link className="nav-link m-2" to="/marketplace"><i className="fas fa-store mr-3"></i>Marketplace</Link>                
                <Link className="nav-link m-2" to="google.com"><i className="fas fa-users mr-3"></i>Grupos</Link>
                <Link className="nav-link m-2" to="google.com"><i className="fas fa-flag ml-1 mr-3"></i>Páginas</Link>
                <Link className="nav-link m-2" to="google.com"><i className="fas fa-calendar-alt ml-1 mr-3"></i>Eventos</Link>                
                <Link className="nav-link m-2" to="google.com"><i className="fas fa-bookmark ml-1 mr-3"></i>Guardado</Link>
            </nav>
        )
    }
}
