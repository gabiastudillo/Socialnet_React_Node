import React, { Component } from 'react'
import Respuesta from './Respuesta'
import CreateRespuesta from './CreateRespuesta'

export default class Comment extends Component {
    render() {
        return (
            <li className="list-group-item p-2 border-0">
                <div className="row w-100 m-0 p-0">
                    <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" className="rounded-circle float-left border-0" alt="" />
                    <div className="col p-0 m-0 ml-2">
                        <form className="form-inline">
                            <div className="form-group p-0 m-0">
                                <label className="form-control rounded-pill border-0 bg-light m-0" rows="auto" disabled>
                                    <a href="className=#v-pills-home" className="mr-2"><strong>Gabriela Astudillo</strong></a>
                                    Este es un ejemplo de comentario</label>
                                <button className="btn rounded-pill bg-tranparent border-0 pt-0 pb-2 pl-2 pr-2 ml-2">...</button>
                            </div>
                        </form>
                        <div className="row m-0 p-0 pb-1">
                            <a href="className=#v-pills-home" className="ml-3 mr-3">Me gusta</a>
                            <a href="className=#v-pills-home" className="mr-3">Responder</a>
                            <a href="className=#v-pills-home" className="text-muted">5 min</a>
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
