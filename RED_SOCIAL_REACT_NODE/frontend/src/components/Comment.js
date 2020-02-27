import React, { Component } from 'react'
import Respuesta from './Respuesta'
import EligeReacion from './EligeReacion'
import CreateRespuesta from './CreateRespuesta'
import { Link } from 'react-router-dom'

export default class Comment extends Component {
    render() {
        return (
            <li className="list-group-item p-0 m-2 border-0">
                <div className="media">
                    <img className="align-self-start mr-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" alt="" />
                    <div className="media-body ">
                        <div className="container-fluid rounded bg-light m-0 px-3 py-2">
                            <div className="row w-100 inline m-0 pb-0">
                                <Link className="mt-0 font-weight-bold" to="/perfil">Gabriela Astudillo</Link>
                                <div className ="dropdown dropleft mx-3">
                                    <button type="button" className ="btn btn-transparent btn-sm text-muted p-0 toggle" id="menuOcultoComentario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,10">
                                        <i className ="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div className ="dropdown-menu" aria-labelledby="menuOcultoComentario">
                                        <Link className ="btn rounded-0 dropdown-item" to="/">Editar</Link>
                                        <Link className ="btn btn-danger rounded-0 dropdown-item" to="/">Eliminar</Link>
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify m-0 pt-1 pb-2">{this.props.texto}</p>
                            <img className="align-self-start mr-2" src={this.props.imagen}  alt="" />
                            <div className="row m-0 p-0">
                                <a href="className=#v-pills-home" className="mr-3" data-toggle="modal" data-target=".bd-example-modal-sm">Me gusta</a>
                                <EligeReacion />
                                <a href="className=#v-pills-home" className="mr-3">Responder</a>
                                <a href="className=#v-pills-home" className="text-muted">5 min</a>
                            </div>
                        </div>

                        <ul className="list-group list-group-flush ml-3 mt-2">
                            <Respuesta />
                            <Respuesta />
                            <CreateRespuesta />
                        </ul>

                    </div>

                </div>
            </li>
        )
    }
}
