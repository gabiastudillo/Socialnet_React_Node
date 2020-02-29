import React, { Component } from 'react'

export default class MarketplaceItem extends Component {
    render() {
        return (
            <div className="card my-1 w-100 contenedor" to="/">
                <div className="card-body">
                    <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_nut_p70_04_rosa_ad_l.jpg" className="card-img-top" alt="..." />
                    <div className="card-img-overlay ">
                        <span className="badge badge-dark p-1">$35</span>
                    </div>
                </div>
                <div className="card-footer">
                    <h6 className="card-title m-0">Nombre del producto</h6>
                    <p className="card-text">
                        <small className="text-muted text-align-left mr-3">Cuenca, Azuay</small>
                        <small className="text-muted text-align-right">Hace 5 horas</small>
                    </p>
                </div>
            </div>
        )
    }
}
