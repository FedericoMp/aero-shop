import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/core';
import { getUser } from '../middleware/requests';
import { nameInitial, parseDate } from '../utils';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    nameWrap: {
        display: 'flex',
        marginBottom: '15px',
        alignItems: 'flex-end'
    },
    avatar: {
        marginRight: '10px',
        backgroundColor: '#ff7e00',
    },
    dateWrap: {
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'baseline'
    },
    pointsWrap: {
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center'
    },
    captionDate: {
        marginRight: '5px',
        color: '#cacaca'
    },
    captionPoint: {
        marginRight: '2px',
        color: '#cacaca'
    },
    coin: {
        fill: '#ff7e00'
    },
    profile: {
        position: 'absolute',
        right: '0',
        bottom: '-30px',
        width: '360px',
        zIndex: '-2'

    }
});

const ProfileInfo = () => {

    const classes = useStyles();
    const [user, setUser] = useState({});
    const {name, points, createDate} = user;

    // To fix
    // Commented dependency User - continuous api call
    useEffect(() => {
        getUser().then(res => setUser(res))
    }, []);
    // }, [user]);

    return (
        <div className={classes.root}>
            <div className={classes.nameWrap}>
                    {
                        (name)
                        ? <Avatar className={classes.avatar}>{nameInitial(name)}</Avatar>
                        : null
                    }
                    <Typography variant='h5'>{name}</Typography>
            </div>

            <div className={classes.dateWrap}>
                    <Typography 
                        variant='caption' 
                        className={classes.captionDate}>
                            Created at</Typography>
                    <Typography variant='subtitle2'>{parseDate(createDate)}</Typography>
            </div>

            <div className={classes.pointsWrap}>
                    <Typography 
                        variant='caption'
                        className={classes.captionPoint}>
                            You have</Typography>
                    <MonetizationOnIcon 
                        className={classes.coin}/>
                    <Typography variant="body1">{points}</Typography>
            </div>

            <img className={classes.profile}
                src="../img/winners.svg" alt="Profile" />
        </div>
    )
}

export default ProfileInfo;