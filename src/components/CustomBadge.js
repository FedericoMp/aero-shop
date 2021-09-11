import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper_points: {
        width: '75px',
        display: 'flex',
        padding: '3px 8px',
        borderRadius: '50px',
        backgroundColor: '#cacaca',
        justifyContent: 'flex-end'
    },
    wrapper_label: {
        top: '10px',
        right: '10px',
        width: '150px',
        display: 'flex',
        borderRadius: '50px',
        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: '#67676796'
    },
    points: {
        color: 'white'
    },
    coin: {
        width: '22px'
    }
});

const CustomBadge = ({points, label}) => {

    const classes = useStyles();

    return (
        <div className={`
            ${points ? classes.wrapper_points : ''}
            ${label ? classes.wrapper_label : ''}`}>
            <Typography 
                variant="body1" 
                className={classes.points}>
                    { label || points }
            </Typography>
            <img className={classes.coin}
                src="../img/coin.svg" alt="Coin" />
        </div>
    )
}

export default CustomBadge
