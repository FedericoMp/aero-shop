import React, { useState, useEffect } from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getUser } from '../middleware/requests';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper_name: {
        marginRight: '10px',
        color: '#c7c7c7' 
    },
    wrapper_points: {
        display: 'flex',
        backgroundColor: '#cacaca',
        padding: '3px 8px',
        borderRadius: '50px',
        width: '75px',
        justifyContent: 'flex-end'
    },
    points: {
        color: 'white'
    },
    coin: {
        fill: '#ff7e00'
    }
});

const UserInfo = () => {
    
    const classes = useStyles();
    const [user, setUser] = useState({});
    const {name, points} = user;

    useEffect(() => {
        getUser().then(res => setUser(res))
    }, [user]);

    return (
        <div className={classes.root}>
            <Typography 
                variant="body1" 
                className={classes.wrapper_name}>
                    {name}</Typography>
            <div className={classes.wrapper_points}>
                <Typography 
                    variant="body1" 
                    className={classes.points}>
                        {points}</Typography>
                <MonetizationOnIcon 
                    className={classes.coin}/>
            </div>
        </div>
    )
}

export default UserInfo;