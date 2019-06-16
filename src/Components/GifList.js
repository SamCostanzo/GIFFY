import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';


const GifList = props => { 
  
// Store the data passed from the response object in App, to the GifList component in the App render method, and then here.
// Then map over that array of gifs to render a Gif component for each one
  const results = props.data;
  
  //Conditional rendering if no gifs are found with search
  let gifs;
  if(results.length > 0){
    gifs = results.map(gif => 
      <Gif url={gif.images.fixed_height.url} key={gif.id} /> );
  } else {
    gifs = <NoGifs />
  }


  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
