import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'
import { Cell } from 'react-mdl'
import '../../css/beer.css'



 const BeerCard = ({beer}) => {

      return (
        <Cell col={2}>
          <Link className="beer-links" to={'/beer' + '/' + beer.id} >
            <Card className="cards">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="beerpic"
                    height="140"
                    image={beer.label}
                    title={beer.name}
                    />
                    <CardContent className='beer-content'>
                    <Typography style={{fontSize: '100%'}} gutterBottom variant="h5" component="h2">
                        <strong>{beer.name}</strong>
                    </Typography>
                    <Typography component="p">
                       {beer.abv}% ABV<br/>
                       {beer.style}<br/>
                        Brewed By: {beer.brewery.name}
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
                </Link>
              </Cell>
      )

}

export default BeerCard