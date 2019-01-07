import React, { Component } from 'react'
import Navbar from '../navbar'
import { Grid, Cell } from 'react-mdl'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

export default class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: ''
        }
    }

    componentWillMount() {
        fetch('/api/beer' + '/' + this.props.match.params.id)
        .then(res => res.json())
        .then(json => this.setState({beer: json}))
    }

    render() {
        {console.log(this.state.beer)}
        return (
            <React.Fragment>
            <Navbar/>
            <Grid>
            <Cell col={12}><h1>{this.state.beer.name}</h1></Cell>
            <Cell col={6}>
            <p>
                <strong>
                    Description:
                </strong><br/>
                {this.state.beer.desc}</p></Cell>
            <Cell className="beerBlurb" col={6}>
            <img className="beerPagePic" src={this.state.beer.label}/>
            <div className="beerPageInfo">
                <div><strong>ABV:</strong> {this.state.beer.abv}</div>
                <div><strong>IBU:</strong> {this.state.beer.ibu}</div>
                <div><strong>Style:</strong> {this.state.beer.style}</div>
                <div><strong>Brewery Name:</strong> {this.state.beer.brewery.year}</div>
            </div>
            </Cell>
            </Grid>
            </React.Fragment>
        )
    }
}