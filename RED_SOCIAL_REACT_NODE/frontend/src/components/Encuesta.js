import React, { Component } from 'react'

export default class Encuesta extends Component {
    render() {
        return (
            <div className="custom-group-control">

                <div className="input-group py-1 px-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Primera opción de respuesta a la Encuesta</label>
                    </div>
                </div>

                <div className="input-group py-1 px-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" classNameName="custom-control-input" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label >Segunda opción de respuesta a la Encuesta</label>
                    </div>
                </div>

                <div className="input-group py-1 px-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label>Tercera opción de respuesta a la Encuesta</label>
                    </div>
                </div>

            </div>




        )
    }
}
