const defaultState = {
  userQuery: '',
  movieDeets: [],
  singleMovie: {}
};

export default function searchReducer(state = defaultState, action) {
  const {type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH' : {
      return {
        ...state,
        userQuery: payload
      };
    };
    case 'UPDATE_MOVIE_PREVIEW_FULFILLED' : {
      return {
        ...state,
        movieDeets: payload
      };
    };
    case 'UPDATE_MOVIE_DETAILS_FULFILLED' : {
      return {
        ...state,
        singleMovie: payload
      };
    };
    default: {
      return state;
    };
  };
};