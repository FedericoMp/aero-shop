import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#fff'
    },
    logo: {
        width: '30px',
        height: '30px'
    },
    space: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none'
    }
});

const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar 
                position="static" 
                className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Link to='/' className={classes.link}>
                            <img className={classes.logo} 
                                src="../img/aerolab-logo.svg" alt="Aero-Shop"/>
                        </Link>
                        <div className={classes.space}></div>
                        <Link to='/profile' className={classes.link}>
                            <UserInfo/>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar;