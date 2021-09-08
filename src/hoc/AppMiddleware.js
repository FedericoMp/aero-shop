import React from 'react';
import { AppProvider } from '../provider/AppProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Profile, NotFound } from '../pages';
import Navbar from '../components/Navbar';

const AppMiddleware = () => {
    return (
        <AppProvider>
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
        </AppProvider>
    )
}

export default AppMiddleware;