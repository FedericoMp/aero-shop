import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Profile, NotFound } from './pages';

function App() {
  return (
    <Router>
      {/* Basic navbar */}
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
      
      <main>
        React App
        {/* Basic switch */}
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/profile'>
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
