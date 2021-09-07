import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Profile, NotFound } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
