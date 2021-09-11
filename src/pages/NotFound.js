import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    },
    link: {
        textDecoration: 'none'
    },
    btn: {
        color: '#fe7a00',
        marginTop: '10px',
        border: '1px solid #ff7e00',
        textDecoration: 'none'
    },
    image: {
        maxWidth: '300px',
        marginTop: '30px'
    }
});

/**
 * Not Found Page Component
 */
export default function NotFound() {
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h4'>
                Page not found
            </Typography>
            <Link to='/' className={classes.link}>
                <Button 
                    variant="outlined" 
                    size="medium"
                    className={classes.btn}>
                    Return to shop
                </Button>
                </Link>
            <img className={classes.image} 
                src="../img/not-found.svg" alt="Not Found" />
        </div>
    )
}
