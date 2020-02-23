import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class MarketplaceProducto extends Component {
    render() {
        return (
            <div className="container p-5">
                <div className="card border mt-5 m-5">
                    <div className="card-header">
                        <h4 className="card-title p-2 pl-3">Vende en Marketplace</h4>
                    </div>
                    <div className="card-body ml-3 mr-3">
                        <form>
                            <fieldset>
                                <div className="form-group">
                                    <input type="text" className="form-control mt-3" placeholder="¿Qué vendes?" />
                                </div>
                                <div className="form-group">
                                    <input type="money" className="form-control" placeholder="Precio" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ubicación" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Selecciona una categoría</option>
                                        <option>Alquileres</option>
                                        <option>Ropa y accesorios</option>
                                        <option>Casa y jardín</option>
                                        <option>Familia</option>
                                        <option>Vehículos</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleTextarea" placeholder="Descripción" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Foto</label>
                                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="card-footer ">
                        <div className="row justify-content-between ml-3 mr-3">
                            <Link type="button " className="btn btn-light border" to="/marketplace">Cancelar</Link>
                            <Link type="submit " className="btn btn-primary" to="/marketplace">Publicar producto</Link>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}
