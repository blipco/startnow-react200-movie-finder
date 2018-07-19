import {connect} from 'react-redux'
import Back from './Back';

function mapStoreToProps(store) {
  return {
    movieDeets: store.search.movieDeets,
    singleMovie: store.search.singleMovie
  };
};

export default connect(mapStoreToProps)(Back);