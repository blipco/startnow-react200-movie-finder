import React from 'react';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-6'>
            MOVIE POSTER
          </div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-header'>
                Movie Details
              </div>
              <div className='card-body'>
              MOVIE TITLE 
              RELEASED, LENGTH, GENRE
              PLOT
              METASCORE
              IMDB SCORE
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};