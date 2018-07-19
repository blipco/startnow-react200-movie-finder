import {connect} from 'react-redux'
import MovieFinderInfo from './MovieFinderInfo';

function mapStoreToProps(store) {
  return {
    movieDeets: store.search.movieDeets,
    singleMovie: store.search.singleMovie
  };
};

export default connect(mapStoreToProps)(MovieFinderInfo);