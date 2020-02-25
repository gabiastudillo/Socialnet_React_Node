import React, { Component } from 'react'

export default class CreateEncuesta extends Component {
    render() {
        return (
            <form className="px-5 m-1">
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="agrega una opción..." />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="agrega una opción..." />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="agrega una opción..." />
                </div>
            </form>
        )
    }
}
