import React, { Component } from 'react'

export default class PublicacionGallery extends Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://lh3.googleusercontent.com/proxy/OnDjVDnuc5QhIqG1kvePET9CC9znvyPdeazm5msN964zDan1do9aj1U4kOxT1C6K9Ml__izWNehKVEZGPkwIMIT_VZaMpCSJuEbCRs9puWO7IADoauhYKYsCqi94VGOdn6hi" alt="First slide" />
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
        )
    }
}
