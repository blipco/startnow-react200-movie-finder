import React from 'react';
import MoreInfo from '../MoreInfo';
export default class MoviePreview extends React.Component {
  render() {
    const {movieDeets} = this.props;
      return (
      <div>
         {movieDeets.map(movieDeet => (
        <div className='card border border-dark b-1 rounded-0 mt-4 mb-2'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-4'>
                <div id='movie-preview-poster'>
                <img className='w-50 h-50' 
                     src={movieDeet.data.Poster !== "N/A"
                          ?
                          movieDeet.data.Poster
                          :'no_poster_available.jpg'}/>
                </div>
              </div>
              <div className='col-8'>
                <div className='row' id='movie-preview-title'>
                {movieDeet.data.Title !== "N/A"
                          ?
                          movieDeet.data.Title
                          :'No Movie Title Available'}
                </div>
                <div className='row' id='movie-preview-year'>
                  {movieDeet.data.Year !== "N/A"
                          ?
                          movieDeet.data.Year
                          :'No Year Released Available'}
                </div>
                <hr />
                <div className='row' id='movie-preview-plot'>
                  {movieDeet.data.Plot !== "N/A"
                          ?
                          movieDeet.data.Plot
                          :'No Plot Available'}
              </div>
                <div className='row d-flex justify-content-end'>
                  <MoreInfo 
                  imdbID = {movieDeet.data.imdbID}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  };
};