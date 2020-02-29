import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SidePanel extends Component {
    render() {
        return (
            <div className="navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav flex-column flex w-100 nav-pills px-1">
                    <li className="nav-item active">
                        <Link className="nav-link mt-0 mb-2 border" to="/Perfil">
                            <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="25" height="25" className="rounded-circle border-0 ml-3 mr-3" alt="" />Gabriela Astudillo
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="/"><i className="fas fa-newspaper ml-4 mr-3"></i>Noticias</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-envelope ml-4 mr-3"></i>Mensajería</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="/marketplace"><i className="fas fa-store ml-4 mr-3"></i>Marketplace</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-users ml-4 mr-3"></i>Grupos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-flag ml-4 mr-3"></i>Páginas</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="/eventos"><i className="fas fa-calendar-alt ml-4 mr-3"></i>Eventos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link my-2 border" to="google.com"><i className="fas fa-bookmark ml-4 mr-3"></i>Guardado</Link>
                    </li>
                </ul>

            </div>
        )
    }
}
