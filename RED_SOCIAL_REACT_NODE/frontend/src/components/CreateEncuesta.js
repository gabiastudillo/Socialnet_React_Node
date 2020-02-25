import React, { Component } from 'react'

export default class CreateEncuesta extends Component {
    render() {
        return (
            <form className="px-5 m-1">
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="agrega una opción..." />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="agrega una opción..." />
                </div>
                <div class="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="agrega una opción..." />
                </div>
            </form>
        )
    }
}
