'use strict';
require('dotenv').config();
const axios = require('axios');
// let cors = require('cors');
// server.use(cors());



// https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIES_API_key}&query=${query}


// http:localhost:3020/movie?api_key=79f3cffae9d59c994ba1114162917204&query=joker

function getMovie(req, res) {
    let query = req.query.searchQuery;
    let url = `
    // https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIES_API_key}&query=${query}`;
  
    axios
    .get(url)
    .then( result => {
      // console.log(result.data)
      let newMovie =  result.data.results.map(item => {
        return new Movie(item);
      })
  
      res.send(newMovie)
    })
    .catch(err => console.log(err))
  
    // console.log(url)
    // res.send({
    //   message: 'from the server side'
    // })
  }
  
  
  
  
  class Movie {
    constructor(item){
      this.title = item.title;
      this. overview= item.overview;
      this. average_votes= item.vote_average;
      this. total_votes= item.vote_count;
      this. image_url= `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
      this. popularity= item.popularity;
      this. released_on= item.release_date;
    }
  }


  module.exports=getMovie;