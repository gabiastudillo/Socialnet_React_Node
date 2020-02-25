import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class CreatePublication extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const res = axios.get('http://localhost:4000/api/publicaciones');
        console.log(res);
    }

    onChangeHandler = event => {
        console.log(event.target.files[0])
    }
    
    render() {
        return (
            <div className="card mx-2 my-2">
                <h6 className="card-header">Crear publicación</h6>
                <div className="form-inline pb-0">
                    <div className="card-body p-1 m-0 w-100 d-flex">
                        <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                        <div className="m-0 p-0 w-100">
                            <div className="form-group m-0 p-0 w-100">
                                <textarea className="form-control w-100 font-weight-normal m-0 pt-3 pb-0 border-0 mitextarea" rows="2" placeholder="¿Qué estás pensando, Gabriela?"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body p-0 m-0">
                    <ul className="list-group list-group-flush m-0">
                        <li className="list-group-item px-2 py-1 w-100">
                           


                           
                        </li>

                        <li className="list-group-item rounded py-1 w-100">
                            <div className="row justify-content-between px-2 ">
                                <Link  className="btn bg-light rounded-pill m-1"><i className="fas fa-image mr-2"></i>Foto/video</Link>
                                <button type="button" className="btn bg-light rounded-pill m-1"><i className="fas fa-file-upload mr-2"></i>Archivo</button>
                                <button type="button" className="btn bg-light rounded-pill m-1"><i className="fas fa-poll mr-2"></i>Encuesta</button>
                                <button type="button" className="btn bg-light rounded-pill m-1"><i className="fas fa-user-plus mr-2"></i>Etiquetar</button>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
