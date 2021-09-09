import React from 'react';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import DataFilter from '../components/DataFilter';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: '#fbfbfb'
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
                <DataFilter/>
            </Container>
        </div>
    )
}
