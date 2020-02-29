import React, { Component } from 'react'

export default class CreateArchivo extends Component {
    loadimageportada(event) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    render() {
        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'
        }

        return (
            <div className="image-upload text-center" >
                <label htmlFor="file-input2" style={{ cursor: "pointer", marginTop: "5px" }} title="Clic para subir foto de portada">
                    <img src="https://www.blugarden.eu/images/placeholders/placeholder.png" alt="" id="output2" width="20%" className="picturstyle" style={picturstyle} />
                </label>
                <input id="file-input2" type="file" style={{ display: 'none' }} onChange={this.loadimageportada.bind(this.event)}
                    accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif" />
            </div>
        )
    }
}
