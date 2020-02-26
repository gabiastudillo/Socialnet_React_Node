import React, { Component } from 'react'
import CreatePublicationFooter from './CreatePublicationFooter'
import CreateArchivo from './CreateArchivo'
import CreateEtiqueta from './CreateEtiqueta'

export default class ModalPublicacion extends Component {
    render() {
        return (
            <div className="modal" id="ModalSubirFotoVideo">
                <div className="modal-dialog noticias pt-4">
                    <div className="modal-content">

                        <div className="modal-header pb-2 bg-light">
                            <h6 className="modal-tittle">Crear publicación</h6>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body p-1 m-0 w-100">
                            <div className="d-flex">
                                <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                                <div className="m-0 p-0 w-100">
                                    <div className="form-group m-0 mb-1 p-0 w-100">
                                        <textarea className="form-control w-100 font-weight-normal m-0 pt-3 pb-0 border-0 mitextarea" rows="2" placeholder="¿Qué estás pensando, Gabriela?"></textarea>
                                    </div>
                                </div>
                            </div>

                            <ul className="list-group list-group-flush m-0">
                                <li className="list-group-item px-3 py-1 w-100">
                                    <CreateArchivo />
                                    <CreateEtiqueta />
                                </li>

                                <li className="list-group-item rounded py-0 w-100">
                                    <div className="row justify-content-between mt-1 px-2 ">
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-image mr-1"></i>Foto/video</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-file-upload mr-1"></i>Archivo</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-poll mr-1"></i>Encuesta</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1"><i className="fas fa-user-plus mr-1"></i>Etiquetar</button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="modal-footer">
                            <CreatePublicationFooter />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
