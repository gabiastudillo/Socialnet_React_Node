import React, { Component } from 'react'

export default class CreateEtiqueta extends Component {
    render() {
        return (
            <div className="input-group px-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Con</span>
                </div>
                <input type="text" class="form-control" placeholder="¿Con quién estabas?" aria-label="Username" aria-describedby="basic-addon1" />
            </div>)
    }
}
