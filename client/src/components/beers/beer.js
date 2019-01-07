import React, { Component } from 'react'
import Navbar from '../navbar'



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
            <div>Hello</div>
            </React.Fragment>
        )
    }
}