import FacebookLogin from 'react-facebook-login'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logIn } from '../../actions/logIn';


 class Facebook extends Component {

    responseFacebook = (response) => {
        if (response.name) {
        fetch('/api/users/facebook/login',
        {method: 'post',
        headers: {
        "Content-Type": "application/json"
                     },
            body: JSON.stringify(response)
        }
        )
        .then(res => res.json())
        .then(user => this.props.logIn(user.user))
        }
    }

   

    render() {
        return (
            <FacebookLogin
            appId="552435025257967"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook} />
        )
    }
}


    export default connect(null, { logIn} )(Facebook)
