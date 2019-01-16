import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



export default class FavoriteButton extends Component {
    state = {
        message: '',
        err:''
    }
    sendFavorite = () => {
        fetch('/api/beer/favorite', {method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userId: this.props.user.id, beerId: this.props.beerId})
        }
        )
        .then(res => res.json())
        .then(res => {
        if (res.message) {
            this.setState({err: '', message: res.message})
        } else {
            this.setState({message: '', err: res.err})
        }
    })
    }


    render() {
        return (
            <React.Fragment>
            <Button variant="outlined" color="secondary" size="large" onClick={this.sendFavorite}>Favorite</Button>
            <div style={{color: 'green'}}>{this.state.message}</div>  
            <div style={{color: 'red'}}>{this.state.err}</div>
            </React.Fragment>
        )
    }
}