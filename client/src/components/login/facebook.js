import FacebookLogin from 'react-facebook-login'
import React, { Component } from 'react'


export default class Facebook extends Component {

    responseFacebook = (response) => {
        console.log(response)
    }

    componentClicked = () => {
        console.log("clicked")
    }

    render() {
        return (
            <FacebookLogin
            appId="552435025257967"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        )
    }
}

    
