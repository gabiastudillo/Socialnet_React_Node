import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark superior p-1">
                <div className="container">
                    <Link className="navbar-brand mr-2" to="/">Socialnet</Link>
                    <form className="form my-0 my-lg-0 mx-auto search">
                        <input className="form-control form-control-sm mr-sm-2" type="text" placeholder="Buscar" />
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link mr-2" to="/Perfil">
                                    <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="26" height="26" className="rounded-circle float-left border-0 mr-2" alt="" />
                                    <small><strong>Gabriela</strong></small><span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="google.com"><i className="fas fa-user-friends fa-lg mr-2"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="google.com"><i className="fas fa-envelope fa-lg mr-2"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-5 pr-5" to="google.com"><i className="fas fa-bell fa-lg mr-2"></i></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
