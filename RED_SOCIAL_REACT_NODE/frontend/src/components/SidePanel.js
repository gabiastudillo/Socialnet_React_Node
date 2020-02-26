import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SidePanel extends Component {
    render() {
        return (
            <nav className="nav flex-column nav-pills  pl-1 mt-5">
                <Link className="nav-link mt-0 mb-2 border" to="/Perfil">
                    <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="25" height="25" className="rounded-circle border-0 mr-2" alt=""/>Gabriela Astudillo
                </Link>
                <Link className="nav-link my-2 border" to="/"><i className="fas fa-newspaper mr-3"></i>Noticias</Link>
                <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-envelope mr-3"></i>Mensajería</Link>
                <Link className="nav-link my-2 border" to="/marketplace"><i className="fas fa-store mr-3"></i>Marketplace</Link>
                <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-users mr-3"></i>Grupos</Link>
                <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-flag ml-1 mr-3"></i>Páginas</Link>
                <Link className="nav-link my-2 border" to="/eventos"><i className="fas fa-calendar-alt ml-1 mr-3"></i>Eventos</Link>
                <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-bookmark ml-1 mr-3"></i>Guardado</Link>
            </nav>
        )
    }
}
