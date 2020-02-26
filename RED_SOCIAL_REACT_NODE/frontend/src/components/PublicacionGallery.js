import React, { Component } from 'react'

export default class PublicacionGallery extends Component {
    render() {
        return (

            
            <div className="modal" id="ModalPublicationGallery">
                <div className="modal-dialog modal-lg modal-dialog-centered noticias pt-4">
                    <div className="modal-content bg-dark">
                        <div className="modal-body p-1 m-0 w-100">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg" alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="https://cdn.wallpapersafari.com/45/4/auQo0L.jpg" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQhPaaMwkio7X4xxYH6w4XFjUnienhqDs2KvsUHIKcJqvwl4MP" alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>







        )
    }
}
