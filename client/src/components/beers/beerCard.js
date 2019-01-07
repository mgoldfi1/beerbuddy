import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import '../../css/beer.css'



export default  class BeerCard extends Component {

    render() {
        return (
            <Card className="cards">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="beerpic"
                    height="140"
                    image={this.props.label}
                    title={this.props.name}
                    />
                    <CardContent>
                    <Typography style={{fontSize: '100%'}} gutterBottom variant="h5" component="h2">
                        <strong>{this.props.name}</strong>
                    </Typography>
                    <Typography component="p">
                       {this.props.abv}% ABV<br/>
                       {this.props.style}<br/>
                        Brewed By: {this.props.brewery}
                    </Typography>
                    </CardContent>
                    <div>
                    <StarRatings
                        rating={0}
                        numberOfStars={5}
                        name='rating'
                        starDimension="25px"
                        starSpacing="1px"
                        starRatedColor="rgb(255, 204, 0)"
                        />
                        </div>
                    </CardActionArea>
                </Card>
        )
    }
}
