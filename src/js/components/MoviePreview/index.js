import { connect } from 'react-redux';
import MoviePreview from './MoviePreview';

function mapStoreToProps(store) {
  return {
    movieDeets: store.search.movieDeets,
    };
};

export default connect(mapStoreToProps)(MoviePreview);