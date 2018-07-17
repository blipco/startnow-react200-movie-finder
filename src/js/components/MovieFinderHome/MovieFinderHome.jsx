import React from 'react';
import MovieSearch from '../MovieSearch';
import MoviePreview from '../MoviePreview';

export default class MovieFinderHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Movie Movie Finder
        </h1>
        <MovieSearch />
        <MoviePreview />
      </div>
    )
  };
};