import React from 'react';
import { HashRouter as Router, Route } from 'react-router'
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';

/* Incorporate this example into your code */
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ MovieSearch } />
          <Route path='/movie/:id' component={ MovieDetail } />
        </div>
      </Router>
    )
  };
};