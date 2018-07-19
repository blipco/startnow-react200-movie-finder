import { connect } from 'react-redux';
import MoreInfo from './MoreInfo';

function mapStoreToProps(store) {
  return {
     userQuery: store.search.userQuery,
     movieDeets: store.search.movieDeets,
     singleMovie: store.search.singleMovie
  };
};

export default connect(mapStoreToProps)(MoreInfo);