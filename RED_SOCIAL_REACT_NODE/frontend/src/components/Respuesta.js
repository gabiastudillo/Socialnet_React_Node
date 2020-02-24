import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Respuesta extends Component {
    render() {
        return (
            <li className="list-group-item p-0 my-2 border-0">
                <div className="media m-0">
                    <img className="align-self-start mr-2 my-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="26" height="26" alt=""/>
                    <div className="media-body bg-light rounded px-3 py-2">
                        <Link className="mt-0 font-weight-bold" to="/perfil">Gabriela Astudillo</Link>
                        <Link className="btn rounded-pill bg-tranparent border-0 pt-0 pb-2 pl-2 pr-2 ml-2">...</Link>
                        <p className="text-justify">Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
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
