import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function mapStoreToProps(store) {
  return {
    userQuery: store.search.userQuery,
    movieDeets: store.search.movieDeets,
    singleMovie: store.search.singleMovie
  };
};

export default connect(mapStoreToProps)(MovieSearch);