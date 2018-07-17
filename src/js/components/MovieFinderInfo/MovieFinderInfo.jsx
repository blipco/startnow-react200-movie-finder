import React from 'react';
import Back from '../Back';
import MovieDetail from '../MovieDetail';

export default class MovieFinderInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Finder</h1>
        <Back />
        <MovieDetail />
      </div>
    )
  };
};