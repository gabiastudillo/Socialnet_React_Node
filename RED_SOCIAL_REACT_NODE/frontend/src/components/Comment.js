import React, { Component } from 'react'
import Respuesta from './Respuesta'
import CreateRespuesta from './CreateRespuesta'

import { Link } from 'react-router-dom'

export default class Comment extends Component {
    render() {
        return (
            <li className="list-group-item p-0 m-2 border-0">
                <div className="media">
                    <img className="align-self-start mr-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" alt=""/>
                    <div className="media-body ">
                        <div className="container-fluid rounded bg-light m-0 px-3 py-2">
                            <Link className="mt-0 font-weight-bold" to="/perfil">Gabriela Astudillo</Link>
                            <button className="btn rounded-pill bg-tranparent border-0 pt-0 pb-2 pl-2 pr-2 ml-2">...</button>
                            <p className="text-justify">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <div className="row m-0 p-0">
                                <a href="className=#v-pills-home" className="mr-3">Me gusta</a>
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
