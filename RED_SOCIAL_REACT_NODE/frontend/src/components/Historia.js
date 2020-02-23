import React, { Component } from 'react'

export default class Historia extends Component {
    render() {
        return (
            <div className="carousel-item col-3 active m-0 p-1">
                <div className="card bg-dark text-white border-0 historia text-white">
                    <img className="card-img img-fluid center-block h-100" src="https://i.pinimg.com/originals/56/1d/e9/561de92b7dafa0b258653080c2a5d971.jpg" alt="" />
                    <div className="card-overlay h-100 d-flex flex-column ">
                        <div className="bg-transparent border-0 p-2"><small className="text-weight-bold">Gabriela Astudillo</small></div>
                    </div>
                </div>
            </div>
        )
    }
}
