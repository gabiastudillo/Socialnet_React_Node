import React, { Component } from 'react'

export default class VerHistoriasUsuario extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item col-3 active">
                        <img className="inline-block" src="https://cde.peru.com//ima/0/1/1/9/5/1195555/mujeres-atractivas.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item col-3 ">
                        <img className="inline-block" src="https://cdn5.upsocl.com/wp-content/uploads/immujer/2015/01/cumpleanos256.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item col-3 ">
                        <img className="inline-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj9vB1G7smFm9MJY9d9q-1sZ9vkTDtEQKqJvhSiKLQUVPDLUt_" alt="Third slide" />
                    </div>
                    <div className="carousel-item col-3 ">
                        <img className="inline-block" src="https://cde.peru.com//ima/0/1/1/9/5/1195555/mujeres-atractivas.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item col-3 ">
                        <img className="inline-block" src="https://cdn5.upsocl.com/wp-content/uploads/immujer/2015/01/cumpleanos256.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item col-3 ">
                        <img className="inline-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj9vB1G7smFm9MJY9d9q-1sZ9vkTDtEQKqJvhSiKLQUVPDLUt_" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
