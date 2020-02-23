import React, { Component } from 'react'
import InteraccionPublicacion from './InteraccionPublicacion'
import SeccionComentarios from './SeccionComentarios'

export default class Publication extends Component {
    render() {
        return (
            <div className="card m-2">

                <div className="card-body p-3">
                    <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle mr-2 float-left border" alt="" />
                    <div>
                        <a href="className=#v-pills-home" className="card-title"><strong>Gabriela Astudillo</strong></a>
                        <h6 className="text-muted font-weight-normal">1 h</h6>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <img src="https://www.veintitantos.com/sites/default/files/styles/v2-img1000x563/public/articulo/2019-01/tips_para_conseguir_viajes_mas_baratos_en_2019.jpg?itok=T3m2ixKL" className="img-fluid" alt="" />

                <InteraccionPublicacion />
                <SeccionComentarios />
            </div>
        )
    }
}
