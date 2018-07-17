import React from 'react';
import MoreInfo from '../MoreInfo';
export default class MoviePreview extends React.Component {
  render() {
    const movieInfoPreview = this.props;
    return (
      <div>
          <div className='row'>
            <div className='card'>
              <div className='col-3'>
                Movie Poster
              </div>
              <div className='col-9'>
                <div className='row'>
                  Movie Title
                </div>
                <div className='row'>
                  Release Year
                </div>
                <hr />
                <div className='row'>
                  PLOT
                </div>
                <div className='row'>
                  <MoreInfo />
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  };
};