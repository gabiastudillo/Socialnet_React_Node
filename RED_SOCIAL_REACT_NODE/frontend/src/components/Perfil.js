import React, { Component } from 'react'

import axios from 'axios'

export default class Perfil extends Component {
    state={
        users:[]
    }

    async componentDidMount(){
        const res=axios.get('http:/localhost:4000/user/1');
        this.setState({users:res.data});
        console.log(this.state.users.data);
    }
    render() {
        return (
            <div>
                .col-md-2
                div.col

            </div>
        )
    }
}
