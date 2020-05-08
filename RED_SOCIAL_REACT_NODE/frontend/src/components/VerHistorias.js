import React, { Component } from 'react'
import Historia from './Historia'
export default class VerHistorias extends Component {
    render() {
        return (
            <div className="card pt-2 pb-3 my-2 top-content">
                <div className="row p-0 m-2">
                    <h6 className="text-secondary ml-2">Historias</h6>
                    <div className="col text-right">
                        <a href="className=#v-pills-home" className="text-right"><small>Ver todas</small></a>
                    </div>
                </div>

                <div className="container-fluid">
                    <div id="carouselHistorias" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row m-0 p-0">
                                    <Historia />
                                    <Historia />
                                    <Historia />
                                    <Historia />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row m-0 p-0">
                                    <Historia />
                                    <Historia />
                                    <Historia />                                    
                                    <Historia />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row m-0 p-0">
                                    <Historia />
                                    <Historia />
                                    <Historia />
                                    <Historia />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
