import React, { Component } from 'react'
import EligeReacion from './EligeReacion'

export default class InteraccionPublicacion extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush m-0 p-0">

            <li className="list-group-item">
                <div className="row">
                    <a href="className=#v-pills-home" className="text-muted mr-5"><i className="fab fa-gratipay fa-lg mr-2 ml-2"></i>25</a>
                    <div className="col text-right">
                        <a href="className=#v-pills-home" className="text-muted mr-3">5 comentarios</a>
                        <a href="className=#v-pills-home" className="text-muted text-right">1 vez compartido</a>
                    </div>
                </div>
            </li>

            <li className="list-group-item p-1 w-100">
                <div className="row ml-1 mr-1">
                    <div className="col col-sm-12 col-lg-4 col-md-4 m-0">
                        <button type="button" className="btn bg-transparent w-100" data-toggle="modal" data-target=".bd-example-modal-sm"><i className="far fa-thumbs-up mr-2"></i>Me gusta</button>
                        <EligeReacion/>
                    </div>
                    <div className="col col-sm-12 col-lg-4 col-md-4 m-0">
                        <button type="button" className="btn bg-transparent w-100"><i className="far fa-comment-alt mr-2"></i>Comentar</button>
                    </div>
                    <div className="col col-sm-12 col-lg-4 col-md-4 m-0">
                        <button type="button" className="btn bg-transparent w-100"><i className="fas fa-share-alt mr-2"></i>Compartir</button>
                    </div>
                </div>
            </li>
        </ul>
        )
    }
}
