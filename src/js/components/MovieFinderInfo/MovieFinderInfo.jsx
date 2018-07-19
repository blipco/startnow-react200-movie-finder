import React from 'react';
import Back from '../Back';
import MovieDetail from '../MovieDetail';
import updateMovieDetails from '../MovieSearch/movieSearchActions';

export default class MovieFinderInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.match.params, "id")
    const {id} = this.props.match.params;
    const { dispatch } = this.props;
    const { movieDeets } = this.props;
    dispatch(updateMovieDetails(movieDeets, id));
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Movie Finder</h1>
        <Back />
        <MovieDetail />
      </div>
    )
  };
};