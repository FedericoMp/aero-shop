import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../provider/AppProvider';
import { localId } from '../utils';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    notProductMsj: {
        textAlign: 'center',
        color: '#cacaca'
    }
});

const UserProducts = () => {
    
    const classes = useStyles();
    // Use custom hook to take data from global state by reducer
    const { history } = useAppContext();
    const notProductMsj = `You don't have any product yet.`;
    
    let table;
    if(!history) {
        table = (
            <Typography 
                variant='h5'
                className={classes.notProductMsj}>
                {notProductMsj}</Typography>
        );
    } else {
        table = (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Cost</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        history.map((product) => (
                            <TableRow key={localId()}>
                                <TableCell component="th" scope="product">
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>
                                    <Avatar 
                                        alt={product.name}
                                        src={product.img.url} />
                                </TableCell>
                                <TableCell>{product.cost}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <div className='productsContainer'>
            { table }
        </div>
    )
}

export default UserProducts;
