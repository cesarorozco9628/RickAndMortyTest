import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Characters from './components/Characters';
import Character from './components/Character';
import Episodes from './components/Episodes';
import Episode from './components/Episode';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
 


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/characters/character/:id'>
          <ProtectedRoute>
              <Character/>
          </ProtectedRoute>
        </Route>
        <Route exact path='/episodes/episode/:id'>
            <ProtectedRoute>
                <Episode/>
            </ProtectedRoute>
        </Route>
        <Route exact path='/characters'>
            <ProtectedRoute>
                <Characters/>
            </ProtectedRoute>
        </Route>
        <Route exact path='/episodes'>
            <ProtectedRoute>
                <Episodes/>
            </ProtectedRoute>
        </Route>
        <Route exact path='/home'>
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        </Route>
        <Route exact path='/register'>
              <Register/>
        </Route>
        <Route exact path='/'>
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        </Route>
        <Route path='*'>
              <p>Not Found 404</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
