import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';3e4\


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
 export default class SearchableMovieReviewsContainer extends Component{
   constructor(){
     super();
     this.state={
       search:[];
       
     };
   }
   
   componentDidMount(){
     fetch(URL)
     .then(res => res.json)
    .then(data => this.setState({search :data.search}))
   }
   
   render(){
     return(
       <div className="searchable-movie-reviews">
       <SearchableMovieReviewsContainera search={this.state.search}/>
       </div>
       );
   }
 }