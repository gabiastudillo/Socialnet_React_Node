import React, { Component } from 'react'

export default class CreatePublicationFooter extends Component {
    render() {
        return (
            
            <div className="card-footer p-2 px-3">
            <div className="row justify-content-around pb-2">
                <div className="col-4">
                    <div className="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Noticias</label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Tu historia</label>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary p-1 w-100">Publicar</button>
        </div>

        )
    }
}
