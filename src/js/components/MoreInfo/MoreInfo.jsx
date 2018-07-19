import React from 'react';

export default class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href={`#/movie/${this.props.imdbID}`} className='btn btn-primary mb-0 mt-2 ml-2 mr-3'>
          More Information
        </a>
      </div>
    );
  };
};