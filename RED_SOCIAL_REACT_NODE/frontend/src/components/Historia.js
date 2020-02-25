import React, { Component } from 'react'

export default class Historia extends Component {
    render() {
        return (
            <div className="carousel-item col-3 active m-0 p-1">
                <div className="card bg-dark text-white border-0 historia text-white">
                    <img className="card-img img-fluid center-block h-100" src="https://i.pinimg.com/originals/56/1d/e9/561de92b7dafa0b258653080c2a5d971.jpg" alt="" />
                    <div className="card-img-overlay p-2">
                        <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" className="align-self-start rounded-circle mr-2 border" alt="" />
                        <h6 className="card-text font-weight-bold align-self-end"><font size="2">Gabriela Astudillo</font></h6>
                    </div>
                </div>
            </div>
        )
    }
}
