import React from 'react';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { singleMovie } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-6 mr-0'>
            {singleMovie.data &&
              <img src={singleMovie.data.Poster !== "N/A"
              ?
              singleMovie.data.Poster
              :
              'no_poster_available.jpg'} />
            }
          </div>
          <div className='col-6'>
            <div className='card ml-0' id='movie-details-card'>
              <div className='card-header font-weight-bold' id='movie-details-card-header'>
                Movie Details
              </div>
              <div className='card-body'>
                <div className='row font-weight-bold m-1'>
                  {singleMovie.data && (singleMovie.data.Title !== "N/A"
                    ?
                    singleMovie.data.Title
                    :
                    'No Movie Title Available')}
                </div>
                <div className='row'>
                  <div className='font-weight-bold m-1' id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Year !== "N/A"
                      ?
                      singleMovie.data.Year
                      :
                      'No Year Released Available')}
                  </div>
                  <div className='font-weight-bold m-1' id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Runtime !== "N/A"
                      ?
                      singleMovie.data.Runtime
                      :
                      'No Movie Run Time Available')}
                  </div>
                  <div className='font-weight-bold m-1' id='green-strip'>
                    {singleMovie.data && (singleMovie.data.Genre !== "N/A"
                      ?
                      singleMovie.data.Genre
                      :
                      'No Movie Genres Available')}
                  </div>
                </div>
                <div className='row m-1'>
                  {singleMovie.data && (singleMovie.data.Plot !== "N/A"
                    ?
                    singleMovie.data.Plot
                    :
                    'No Plot Available')}
                </div>
                <div className='row m-1'>
                  {singleMovie.data && (singleMovie.data.Awards !== "N/A"
                    ?
                    singleMovie.data.Awards
                    :
                    'No Awards Available')}
                </div>
                <div className='row m-1'>
                  {singleMovie.data && (singleMovie.data.Metascore !== "N/A"
                    ?
                    `Meta Score: ${singleMovie.data.Metascore}`
                    :
                    'No Meta Score Available')}
                </div>
                <div className='row m-1'>
                  {singleMovie.data && (singleMovie.data.imdbRating !== "N/A"
                    ?
                    `IMDB Rating: ${singleMovie.data.imdbRating}`
                    :
                    'No imdb Rating Available')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};