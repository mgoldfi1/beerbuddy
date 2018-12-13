import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                    title="beer"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                    <Typography component="p">
                       {this.props.abv}% ABV<br/>
                       {this.props.style}<br/>
                        Brewed By: {this.props.brewery}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
        )
    }
}