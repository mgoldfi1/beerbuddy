import React from 'react';
import { Cell } from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import RatingSelect from './ratingSelect'
const BeerMisc = ({user, beerId, colLength, desc, ratings, avg}) => {


const ratingInput = () => {
 if (user) {
   return (
    <React.Fragment>
    <RatingSelect user={user} beerId={beerId}/>
    </React.Fragment>
   )
 }
}




  return (
    <Cell className='beer-misc' col={colLength}>
      <p>
        <strong>Description:</strong>
        <br />
        {desc}
      </p>
        <strong>Reviews for this beer: 0 </strong>
        <br/>
        <strong>Ratings for this beer: {ratings}</strong>
        <br/>
        <strong>Average Rating for this beer: {avg}/5</strong>
        <br/>
        {ratingInput()}

    </Cell>
  );
};

export default BeerMisc
