import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProfileInfo from '../components/ProfileInfo';
import UserProducts from '../components/UserProducts';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        marginTop: '90px',
        marginBottom: '20px',
        color: '#ff7e00',
    }
});

/**
 * Profile Page Component
 */
export default function Profile() {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography
                className={classes.title}
                variant='h4'>Profile</Typography>
                <ProfileInfo/>
                <UserProducts/>
        </Container>
    )
}
