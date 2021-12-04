import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import {Products} from './components/Products';
import {Client} from './components/Client';
import {Sells} from './components/Sells';
import {Reports} from './components/Reports';
import {Consoloditions} from './components/Consoloditions';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';

 


function App() {
  return (
        <Router>
            <Switch>
                <Route exact path='/Consolidation'>
                    <ProtectedRoute>
                        <Consoloditions/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Reports'>
                    <ProtectedRoute>
                        <Reports/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Sells'>
                    <ProtectedRoute>
                        <Sells/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Products'>
                    <ProtectedRoute>
                        <Products/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Client'>
                    <ProtectedRoute>
                        <Client/>
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
