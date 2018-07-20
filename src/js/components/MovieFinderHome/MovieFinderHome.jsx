import React from 'react';
import MovieSearch from '../MovieSearch';
import MoviePreview from '../MoviePreview';

export default class MovieFinderHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieDeets } = this.props;
    return (
      <div className='container'>
        <h1 id="title" className='text-center'>
          Movie Finder
        </h1>
            <MovieSearch />
            <MoviePreview />
      </div>
    )
  };
};