import React from 'react';
import {updateSearch, updateMovieInfo} from './movieSearchActions'

export default class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.changeSearchBar = this.changeSearchBar.bind(this);
    this.clickGoButton = this.clickGoButton.bind(this);
  }

  changeSearchBar(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  };

  clickGoButton() {
    const { dispatch } = this.props;
    const { movieDeets } = this.props;
    const { userQuery } = this.props;
    dispatch(updateMovieInfo(userQuery, movieDeets));
  };

  render() {
    const {userQuery} = this.props;
    return (
      <div>
        <div className="input-group input-group-lg">
          <input value={userQuery} 
                 onChange={this.changeSearchBar} 
                 className="form-control mb-4 mt-4" />
          <div className="input-group-append">
            <button onClick={this.clickGoButton} 
                    className="input-group-text mb-4 mt-4">
                    Go!
            </button>
          </div>
        </div>
      </div>
    )
  };
};