import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        <nav>
          <Link to="/">Go to Home Page</Link>{' '}
          <Link to="/procedures">See Our Procedures</Link>{' '}
          <Link to="/contact">Contact Us!</Link>
        </nav>


          <Route exact path="/" component={Home} />
          <Route exact path="/procedures" component={Procedures} />
          <Route exact path="/contact" component={Contact} />


        </div>
      </Router>
    );
  }
}

export default App;
