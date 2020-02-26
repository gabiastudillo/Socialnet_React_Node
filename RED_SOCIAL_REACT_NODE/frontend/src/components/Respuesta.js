import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Respuesta extends Component {
    render() {
        return (
            <li className="list-group-item p-0 my-2 border-0">
                <div className="media m-0">
                    <img className="align-self-start mr-2 my-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="26" height="26" alt="" />
                    <div className="media-body bg-light rounded px-3 py-2">
                        <p className="row w-100 inline m-0 pb-0">
                            <Link className="mt-0 font-weight-bold" to="/perfil">Gabriela Astudillo</Link>
                            <div class="dropdown dropleft ml-3">
                                <button type="button" class="btn btn-transparent btn-sm text-muted p-0 toggle" id="menuOcultoComentario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,10">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="menuOcultoComentario">
                                    <Link class="btn rounded-0 dropdown-item" to="/">Editar</Link>
                                    <Link class="btn btn-danger rounded-0 dropdown-item" to="/">Eliminar</Link>
                                </div>
                            </div>
                        </p>
                        <p className="pt-1 pb-2 m-0"> Nulla vel metus scelerisque ante sollicitudin.s</p>
                        <div className="row m-0 p-0">
                            <a href="className=#v-pills-home" className="mr-3">Me gusta</a>
                            <a href="className=#v-pills-home" className="mr-3">Responder</a>
                            <a href="className=#v-pills-home" className="text-muted">5 min</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
