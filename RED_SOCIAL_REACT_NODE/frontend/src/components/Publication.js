import React, { Component } from 'react'
import InteraccionPublicacion from './InteraccionPublicacion'
import SeccionComentarios from './SeccionComentarios'
import PublicacionGallery from './PublicacionGallery'
import { Link } from 'react-router-dom'

export default class Publication extends Component {
    render() {
        return (
            <div className="card my-3">
                <div className="card-body py-2 px-3">
                    <div className="media m-0">
                        <img className="align-self-start mr-2 my-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" alt="" />
                        <div className="media-body px-0 py-2">
                            <p className="p-0 m-0">
                                <Link to="/perfil" className="card-title mr-2"><strong>Gabriela Astudillo</strong></Link>
                                está con <Link to="/perfil" className="card-title">Darwin Pilaloa</Link> y <Link to="/perfil" className="card-title">Silvia Cabrera</Link>
                            </p>
                            <small className="text-muted m-0 p-0 font-weight-normal">1 h</small>
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
                    <p className="card-text text-justify">Some quick example text to build on the card. Some quick example text to build on the card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <img data-toggle="modal" data-target="#ModalPublicationGallery"
                src="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg" className="img-fluid" alt="" />
                <PublicacionGallery />
                <InteraccionPublicacion />
                <SeccionComentarios />
            </div>
        )
    }
}
