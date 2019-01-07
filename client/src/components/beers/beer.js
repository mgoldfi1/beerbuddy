import React from 'react'
import Navbar from '../navbar'
import { Grid, Cell } from 'react-mdl'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const Beer = ({beer}) => {

    return (
        <React.Fragment>
        <Navbar/>
        <Grid>
        <Cell col={12}><h1>{beer.name}</h1></Cell>
        <Cell col={6}>
        <p>
            <strong>
                Description:
            </strong><br/>
            {beer.desc}</p></Cell>
        <Cell className="beerBlurb" col={6}>
        <img className="beerPagePic" src={beer.label}/>
        <div className="beerPageInfo">
            <div><strong>ABV:</strong> {beer.name}</div>
            <div><strong>IBU:</strong> {beer.ibu}</div>
            <div><strong>Style:</strong> {beer.style}</div>
            <div><strong>Brewery Name:</strong>{beer.brewery.name}</div>
        </div>
        </Cell>
        </Grid>
        </React.Fragment>
    )
}

export default Beer
