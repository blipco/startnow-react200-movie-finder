import { connect } from 'react-redux';
import MoviePreview from './MoviePreview';

function mapStoreToProps(store) {
  return {
    MovieInfoPreview: store.detail.MovieInfoPreview
  };
};

export default connect(mapStoreToProps)(MoviePreview);