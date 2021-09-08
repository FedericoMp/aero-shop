import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url('../img/hero.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        height: '480px',
        width: '100%'
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