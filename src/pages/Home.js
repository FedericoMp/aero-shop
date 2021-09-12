import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import DataFilter from '../components/DataFilter';
import DataGrid from '../components/DataGrid';
import { useAppContext } from '../provider/AppProvider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fbfbfb'
    },
    container: {
        // height: 'calc(100vh - 544px)'
    },
    fabBtnWrapp: {
        width: '60px',
        height: '60px',
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    },
    modalTitle: {
        color: '#cacaca',
        fontWeight: 'lighter',
        fontStyle: 'italic',
        marginBottom: '10px'
    },
    modalBody: {
        top: '50%',
        left: '50%',
        width: '230px',
        height: '210px',
        display: 'flex',
        borderRadius: '10px',
        position: 'absolute',
        flexDirection: 'column',
        padding: '0px 32px 32px',
        backgroundColor: '#ffffff',
        transform: `translate(-50%, -50%)`,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
    },
    btn: {
        width: '100px',
        margin: '10px 0'
    },
    coin: {
        fill: '#ff7e00'
    },
    pointsImg: {
        width: '150px',
        position: 'absolute',
        bottom: '10px',
        right: '6px',
        opacity: '0.8'
    }
});

/**
 * Home Page Component
 */
export default function Home() {

    const classes = useStyles();
    const { products, provGetProducts, provPostUserPoints } = useAppContext();
    const [productFilter, setProductFilter] = useState(null);
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        provGetProducts();
    }, [])

    const handleFilter = (e) => {
        setProductFilter(e.target.value)
    };

    const handlePage = () => {
        return (page === 1) ? setPage(2) : setPage(1);
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handlePoints = (points) => {
        handleCloseModal();
        provPostUserPoints(points);
    }

    const body = (
        <div className={classes.modalBody}>
            <h2 className={classes.modalTitle}>Choose the amount</h2>
            <Button 
                variant='outlined'
                className={classes.btn}
                onClick={() => handlePoints(1000)}
                startIcon={<MonetizationOnIcon 
                    className={classes.coin}/>}>
                1000</Button>
            <Button 
                variant='outlined'
                className={classes.btn}
                onClick={() => handlePoints(5000)}
                startIcon={<MonetizationOnIcon 
                    className={classes.coin}/>}>
                5000</Button>
            <Button 
                variant='outlined'
                className={classes.btn}
                onClick={() => handlePoints(7500)}
                startIcon={<MonetizationOnIcon 
                    className={classes.coin}/>}>
                7500</Button>
            <img
                className={classes.pointsImg} 
                src='../img/transfer.svg' alt="Points" />
        </div>
    );

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
            <div className={classes.fabBtnWrapp}>
                <Fab
                    onClick={handleOpenModal}
                    aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}>
                {body}
            </Modal>
        </div>
    )
}
