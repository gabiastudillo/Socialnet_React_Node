import React, { Component } from 'react'
import CreateComment from './CreateComment'
import Comment from './Comment'


export default class SeccionComentarios extends Component {
    render() {
        return (
            <div className="card-body p-2 m-0">
                <ul className="list-group list-group-flush">
                    <Comment/>
                    <Comment/>
                    <div className="p-2">
                        <CreateComment/>
                    </div>
                </ul>
            </div>
        )
    }
}
