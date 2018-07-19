import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function mapStoreToProps(store) {
  return {
    movieDeets: store.search.movieDeets,
    singleMovie: store.search.singleMovie
  };
};

export default connect(mapStoreToProps)(MovieDetail);