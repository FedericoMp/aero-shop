import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FILTER_TYPES, PRODUCT_TO_SHOW } from '../constants';
import localId from '../utils/localId';
import GridCard from './GridCard';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '16px',
      textAlign: 'center',
    }
  });

const DataGrid = ({filterType, actualPage, productToShow, productToList}) => {

    const classes = useStyles();

    let pageProdOne, pageProdTwo;

    const getFilteredProds = () => {
        let cpyProds = [...productToList];

        switch (filterType) {
            case FILTER_TYPES.mostRecent:
                return cpyProds;

            case FILTER_TYPES.lowestPrice:
                return cpyProds.sort((p1, p2) => {
                    return ((p1.cost > p2.cost) ? 1 : 
                        ((p1.cost < p2.cost) ? -1 : 0)) });
                
            case FILTER_TYPES.highestPrice:
                return cpyProds.sort((p1, p2) => {
                    return ((p1.cost < p2.cost) ? 1 : 
                        ((p1.cost > p2.cost) ? -1 : 0)) });
        }
        return cpyProds;
    }

    const renderGrid = () => {
        if(productToShow === PRODUCT_TO_SHOW.all)
            return loopGridItems(getFilteredProds());

        if (productToShow === PRODUCT_TO_SHOW.half) {
            let cpyProds = getFilteredProds();
            pageProdOne = cpyProds.slice(0, cpyProds.length / 2);
            pageProdTwo = cpyProds.slice(cpyProds.length / 2, cpyProds.length);

            if(actualPage === 1)
                return loopGridItems(pageProdOne);

            if(actualPage === 2)
                return loopGridItems(pageProdTwo);
        }
    }

    const loopGridItems = (arr) => arr.map(p => {
        return(
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${localId()}${p.id}`}>
                <GridCard prodItem={p}/>
            </Grid>
        )
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                { renderGrid() }
            </Grid>
        </div>
    )
}

export default DataGrid;