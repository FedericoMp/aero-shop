import React from 'react';
import { AppProvider } from '../provider/AppProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Profile, NotFound } from '../pages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppMiddleware = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar/>
                <main className='main-wrapper'>
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
                <Footer/>
            </Router>
        </AppProvider>
    )
}

export default AppMiddleware;