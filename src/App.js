import React, { Fragment } from 'react';
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
            <Route 
                  exact 
                  path='/'
                  render={(props)=>
                    <Fragment>
                      <Home prods={Home}/>
                    </Fragment>
                  }
                /> 
              <Route
                exact
                path='/movies'
                render={(props)=>
                  <Fragment>
                    <MoviesLibrary prods={MoviesLibrary}/>
                  </Fragment>
                }
              />
              <Route
                exact
                path='/movie'
                render={(props)=>
                  <Fragment>
                    <SelectedMovie prods={SelectedMovie}/> 
                  </Fragment>
                }
              />
              <Route
                exact
                path='/add'
                render={(props)=>
                  <Fragment>
                    <AddMovie prods={AddMovie}/>
                  </Fragment>
                }
              />
              <Route
                exact
                path='/change'
                render={(props)=>
                  <Fragment>
                    <ChangeMovieInfo prods={ChangeMovieInfo}/>                
                  </Fragment>
                }  
              />
            </Switch>
         </div>
      </div>
    </Router>
  )  
};

export default App;
