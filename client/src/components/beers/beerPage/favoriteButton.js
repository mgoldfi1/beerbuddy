import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



export default class FavoriteButton extends Component {

    sendFavorite = () => {
        console.log(this.props.user,this.props.beerId)
    }


    render() {
        return (
            <Button variant="outlined" color="secondary" size="large" onClick={this.sendFavorite}>Favorite</Button>
        )
    }
}