import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



export default class FavoriteButton extends Component {

    sendFavorite = () => {
        fetch('/api/beer/favorite', {method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({userId: this.props.user.id, beerId: this.props.beerId})
        }
        )
        .then(res => res.json())
        .then(message => console.log(message))
    }


    render() {
        return (
            <Button variant="outlined" color="secondary" size="large" onClick={this.sendFavorite}>Favorite</Button>
        )
    }
}