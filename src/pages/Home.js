import React, { useState } from 'react';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import DataFilter from '../components/DataFilter';
import DataGrid from '../components/DataGrid';
import { useAppContext } from '../provider/AppProvider';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: '#fbfbfb'
    },
    container: {
        height: 'calc(100vh - 544px)'
    }
});

/**
 * Home Page Component
 */
export default function Home() {

    const classes = useStyles();
    const { products } = useAppContext();
    const [productFilter, setProductFilter] = useState(null);
    const [page, setPage] = useState(1);

    const handleFilter = (e) => {
        setProductFilter(e.target.value)
    };

    const handlePage = () => {
        return (page === 1) ? setPage(2) : setPage(1);
    };

    return (
        <div className={classes.root}>
            <Banner text='Electronics'/>
            <Container className={classes.container}>
                <DataFilter
                    productLength={products.length}
                    actualPage={page}
                    onPageChange={handlePage}
                    onFilterChange={handleFilter}/>
                <DataGrid
                    filterType={productFilter}
                    actualPage={page}
                    productToShow={'half'}
                    productToList={products}/>
            </Container>
        </div>
    )
}
