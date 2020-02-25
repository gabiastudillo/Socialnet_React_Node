import React, { Component } from 'react'
import InteraccionPublicacion from './InteraccionPublicacion'
import SeccionComentarios from './SeccionComentarios'
import PublicacionGallery from './PublicacionGallery'
import { Link } from 'react-router-dom'

export default class Publication extends Component {
    render() {
        return (
            <div className="card m-2">

                <div className="card-body p-3">
                    <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle mr-2 float-left border" alt="" />
                    <div>
                        <Link to="/perfil" className="card-title"><strong>Gabriela Astudillo</strong></Link>
                        <h6 className="text-muted font-weight-normal">1 h</h6>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>                
                <PublicacionGallery />
                <InteraccionPublicacion />
                <SeccionComentarios />
            </div>
        )
    }
}
