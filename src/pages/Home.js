import React from 'react';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

/**
 * Home Page Component
 */
export default function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Banner text='Electronics'/>
            <Container>
                Home
            </Container>
        </div>
    )
}
