import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '480px',
        position: 'relative',
        backgroundColor: '#15dbff'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    bannerText: {
        position: 'absolute',
        bottom: '50px',
        left: 'calc(17%)',
        color: '#ffffff'
    }
});

const Banner = ({text}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="../img/hero.png" 
                alt={text} 
                className={classes.bgImage}/>
            <Typography 
                variant='h3'
                className={classes.bannerText}>
                    {text}</Typography>
        </div>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
}

export default Banner;