import React, { Component } from 'react'

export default class Encuesta extends Component {
    render() {
        return (
            <div ClassName="custom-group-control">

                <div class="input-group py-1 px-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" ClassName="custom-control-input" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Primera opción de respuesta a la Encuesta</label>
                    </div>
                </div>

                <div class="input-group py-1 px-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" ClassName="custom-control-input" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label >Segunda opción de respuesta a la Encuesta</label>
                    </div>
                </div>

                <div class="input-group py-1 px-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="radio" id="customRadio1" name="customRadio" ClassName="custom-control-input" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Tercera opción de respuesta a la Encuesta</label>
                    </div>
                </div>

            </div>




        )
    }
}
