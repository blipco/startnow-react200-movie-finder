import { combineReducers } from 'redux';
import movieDetailReducer from './components/MovieDetail/movieDetailReducer';
import movieSearchReducer from './components/MovieSearch/movieSearchReducer';

const rootReducer = combineReducers({
  search: movieSearchReducer,
  detail: movieDetailReducer
});

export default rootReducer;