import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieFinderHome from './components/MovieFinderHome';
import MovieFinderInfo from './components/MovieFinderInfo';

/* Incorporate this example into your code */
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={MovieFinderHome}/>
          <Route path='/movie/:id' component={MovieFinderInfo}/>
        </div>
      </Router>
    );
  };
};