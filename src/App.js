import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import MoviesLibrary from './components/MoviesLibrary/MoviesLibrary';
import SelectedMovie from './components/SelectedMovie/SelectedMovie';
import AddMovie from './components/AddMovie/AddMovie';
import ChangeMovieInfo from './components/ChangeMovieInfo/ChangeMovieInfo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />   
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} /> 
              <Route
                exact
                path='/movie'

              />
              <Route
              exact
              path='/movies'

              />
              <Route
                exact
                path='/add'

              />
              <Route
                exact
                path='/change'

              />
            </Switch>
         </div>
      </div>
    </Router>
  )  
};

export default App;
