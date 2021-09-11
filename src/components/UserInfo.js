import React, { useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../provider/AppProvider';
import CustomBadge from './CustomBadge';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper_name: {
        marginRight: '10px',
        color: '#c7c7c7' 
    }
});

const UserInfo = () => {
    
    const classes = useStyles();
    // Use custom hook to take data from global state by reducer
    const { user, provGetUser } = useAppContext();
    const { name, points } = user;

    useEffect(() => {
        provGetUser();
    }, []);

    return (
        <div className={classes.root}>
            <Typography 
                variant="body1" 
                className={classes.wrapper_name}>
                    {name}</Typography>
            <CustomBadge 
                points={points}/>
        </div>
    )
}

export default UserInfo;