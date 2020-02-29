import React, { Component } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Perfil extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const res = axios.get('http:/localhost:4000/api/user/1');
        this.setState({ users: res.data });
        console.log(this.state.users.data);
    }

    render() {
        return (
            <div className="container px-2 col-lg-7 col-md-8 col-sm-12">
                <div className="card text-white">
                    <img src="https://k37.kn3.net/9E0D271BA.jpg" className="card-body-img" alt="..." />
                    <div className="card-img-overlay">
                        <div className="media h-100">
                            <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="180em" height="180em" className="align-self-end rounded-circle mr-2 mt-2 img-rounded thumbnail" alt="" />
                            <div className="media-body align-self-end ">
                                <h4 className="mt-0 p-3 mb-5">Gabriela Astudillo</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-body my-0 py-3 ml-auto justify-content-between">
                        <div className="btn-group pl-5 btns m-0 rounded-0 w-100" role="group" aria-label="First group">
                            <Link className="btn font-weight-bold border-right" to="/">Biografía</Link>
                            <Link className="btn font-weight-bold border-right" to="/">Información</Link>
                            <Link className="btn font-weight-bold border-right" to="/">Amigos</Link>
                            <Link className="btn font-weight-bold border-right" to="/">Fotos</Link>
                            <Link className="btn font-weight-bold border-right" to="/">Videos</Link>
                            <Link className="btn font-weight-bold border-right" to="/">Archivo</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
