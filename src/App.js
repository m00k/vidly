import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Customers from './components/costumers';
import Rentals from './components/rentals';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/costumers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" to="/movies" exact component={Movies}/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
    );
  }
}

export default App;