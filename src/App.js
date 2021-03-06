import React, { useState, useEffect, Fragment } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './custom.scss';
import './style/styles.scss';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import MoviesLibrary from './components/MoviesLibrary/MoviesLibrary';
import SelectedMovie from './components/SelectedMovie/SelectedMovie';
import AddMovie from './components/AddMovie/AddMovie';
import ChangeMovieInfo from './components/ChangeMovieInfo/ChangeMovieInfo';

function App() {
  const LOCAL_URL = "http://localhost:3000/movies";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(LOCAL_URL, {
      }).then((r) => {
        let d = r.data;
        setMovies(d);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className='App'>
            <Navbar />   
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
                render={()=>
                  <Fragment>
                    <MoviesLibrary prods={MoviesLibrary}
                      movies={movies}
                    />
                  </Fragment>
                }
            />
            <Route
                exact
                path='/movie'
                render={()=>
                  <Fragment>
                    <SelectedMovie prods={SelectedMovie}
                      movies={movies}
                    /> 
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
                path='/edit'
                render={(props)=>
                  <Fragment>
                    <ChangeMovieInfo prods={ChangeMovieInfo}/>                
                  </Fragment>
                }  
            />
            </Switch>
      </div>
    </Router>
  )  
};

export default App;
