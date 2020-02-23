import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePublication extends Component {
    
    state={
        users:[]
    }

    async componentDidMount(){
        const res=axios.get('http://localhost:4000/api/publicaciones');
     console.log(res);
    }
    
    render() {
        return (
            <div className="card m-2">
                <h6 className="card-header">Crear publicación</h6>
                <div className="form-inline">

                    <div className="card-body p-1 m-0 w-100 d-flex">
                        <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                        <div className="m-0 p-0 w-100">
                            <div className="form-group m-0 p-0 w-100">
                                <textarea className="form-control w-100 text-muted font-weight-normal m-0 pt-3 border-0" rows="3" placeholder="¿Qué estás pensando, Gabriela?"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer bg-transparent d-flex btn-group-sm" role="group">
                    <button type="button" className="btn bg-light w-100 rounded-pill mr-3"><label className="font-weight-bold"></label>Foto/video</button>
                    <button type="button" className="btn bg-light w-100 rounded-pill mr-3"><label className="font-weight-bold"></label>Etiquetar am...</button>
                    <button type="button" className="btn bg-light w-100 rounded-pill mr-3"><label className="font-weight-bold"></label>Sentimiento/...</button>
                    <button type="button" className="btn bg-light w-100 rounded-pill"><label className="font-weight-bold"></label>Más...</button>

                </div>
            </div>
        )
    }
}
