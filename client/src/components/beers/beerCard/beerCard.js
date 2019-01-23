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
import '../../../css/beer.css'
import noData from '../../HOC/noData'



 const BeerCard = (props) => {

      return (
        <Cell col={2}>
          <Link className="beer-links" to={'/beer' + '/' + props.id} >
            <Card className="beer-card">
                <CardActionArea
                className='beer-card-action'
                >
                    <CardMedia
                    component="img"
                    alt="beerpic"
                    height="140"
                    image={props.label}
                    title={props.name}
                    />
                    <CardContent className='beer-content'>
                    <Typography style={{fontSize: '100%'}} gutterBottom variant="h5" component="h2">
                        <strong>{props.name}</strong>
                    </Typography>
                    <Typography component="p">
                      { props.abv ? props.abv + "% ABV" : "N/A"}<br/>
                       {props.style}<br/>
                        Brewed By: {props.brewery.name}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <div className='beer-spacer'>.</div>
                    <div className="star-div">
                    <StarRatings
                        rating={props.ratingAvg}
                        numberOfStars={5}
                        name='rating'
                        starDimension="25px"
                        starSpacing="1px"
                        starRatedColor="rgb(255, 204, 0)"
                        />
                        </div>
                  </Card>
                </Link>
              </Cell>
      )

}

export default noData(BeerCard, "beer")
