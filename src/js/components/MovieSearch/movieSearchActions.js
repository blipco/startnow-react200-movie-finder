import axios from 'axios';

export function updateSearch(userQuery) {
  
  return {
    type: 'UPDATE_SEARCH',
    payload: userQuery
  };
};

export function updateMovieInfo(userQuery, movieDeets) {
  const genericSearch = 'http://www.omdbapi.com/?s=';
  const idSearch = 'http://www.omdbapi.com/?i=';
  const key = '&apikey=ab17354e';

  return {
    type: 'UPDATE_MOVIE_PREVIEW',
    payload: axios({
      method: 'get',
      url: `${genericSearch}${userQuery}&type=movie${key}`
      })
      .then(response => {
        let results = response.data.Search.map(item => {
        return axios({
          method: 'get',
          url: `${idSearch}${item.imdbID}&plot=short${key}`
        })
        .then((response1) => {
          
          return response1
        })
        .catch(err => console.log('Your Error is',err))
      })
      return Promise.all(results)
      .then(response => {
        console.log('Promise All response',response)
        return response
      })
      })
      .catch(err => console.log('Your Error is',err))  
  }
}
export default function updateMovieDetails(movieDeets, id) {
  // let rightMovie = movieDeets.find(movie => movie.data.imdbID == id)
  // console.log('rightMovie',rightMovie)
  const idSearch = 'http://www.omdbapi.com/?i=';
  const key = '&apikey=ab17354e';
  return {
    type: 'UPDATE_MOVIE_DETAILS',
    payload: axios({
      method: 'get',
      url: `${idSearch}${id}&plot=full${key}`
    })
    .then(response => {console.log('SingleMovie',response)
      return response})
  }
};