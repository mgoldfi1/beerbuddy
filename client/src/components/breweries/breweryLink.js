import React from 'react';
import { Link } from 'react-router-dom'



const BreweryLink = ({brewery}) => {

    return (
            <Link to={"/breweries/" + brewery.id}>{brewery.name} </Link>
    )
}

export default BreweryLink
