import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import InteraccionPublicacion from './InteraccionPublicacion'
import { Link } from 'react-router-dom'

export default class PublicationVideo extends Component {
    render() {
        return (
            <div className="card my-3">
                <div className="card-body py-2 px-3">
                    <div className="media m-0">
                        <img className="align-self-start mr-2 my-2 rounded-circle border" src={this.props.userImage} width="45" height="45" alt="" />
                        <div className="media-body px-0 py-2">
                            <p className="p-0 m-0">
                                <Link to="/perfil" className="card-title mr-2"><strong>{this.props.user}</strong></Link>
                            </p>
                            <small className="text-muted m-0 p-0 font-weight-normal">{this.props.fechaPublicacion}</small>
                        </div>
                        <div className="dropdown dropleft">
                            <button type="button" className="btn btn-transparent text-muted p-0 mt-2 toggle" id="menuOcultoPublicacion" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,10">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="menuOcultoPublicacion">
                                <Link className="btn rounded-0 dropdown-item" to="/">Guardar</Link>
                                <Link className="btn rounded-0 dropdown-item" to="/">Editar</Link>
                                <Link className="btn btn-danger rounded-0 dropdown-item" to="/">Eliminar</Link>
                            </div>
                        </div>
                    </div>
                    <p className="card-text text-justify">{this.props.textPublicacion}</p>
                </div>
                
                <ReactPlayer
                    playsInline
                    width="100%"
                    url='https://www.youtube.com/watch?v=kGIFZlx1iYU'playing/>

                <InteraccionPublicacion
                    comentarios=""
                    compartidos=""
                    sumaReacciones="83" />
            </div>
        )
    }
}
