import React from 'react';
import { Link } from 'react-router-dom'
import { Cell } from 'react-mdl'


const BreweryLink = ({brewery}) => {

    return (
            <Cell col={2}>
            <Link to={brewery.name}>{brewery.name} </Link>
            </Cell>
    )
}

export default BreweryLink
