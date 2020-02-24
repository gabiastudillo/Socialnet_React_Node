import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePublication extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const res = axios.get('http://localhost:4000/api/publicaciones');
        console.log(res);
    }

    render() {
        return (
            <div className="card mx-2 my-2">
                <h6 className="card-header">Crear publicación</h6>
                <div className="form-inline">

                    <div className="card-body p-1 m-0 w-100 d-flex">
                        <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                        <div className="m-0 p-0 w-100">
                            <div className="form-group m-0 p-0 w-100">
                                <textarea className="form-control w-100 font-weight-normal m-0 pt-3 border-0 mitextarea" rows="2" placeholder="¿Qué estás pensando, Gabriela?"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body border-top p-2">
                    <div className="row justify-content-between mx-2">
                        <button type="button" className="btn bg-light rounded-pill">Foto/video</button>                        
                        <button type="button" className="btn bg-light rounded-pill">Archivo</button>
                        <button type="button" className="btn bg-light rounded-pill">Encuesta</button>                        
                        <button type="button" className="btn bg-light rounded-pill">Etiquetar</button>
                    </div>
                </div>
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
            </div>
        )
    }
}
