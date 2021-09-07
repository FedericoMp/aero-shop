import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { getUser } from '../middleware/requests';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '50px'
    },
    notProductMsj: {
        textAlign: 'center',
        color: '#cacaca'
    }
});

const UserProducts = () => {
    
    const classes = useStyles();
    const [user, setUser] = useState({});
    const {redeemHistory} = user;
    const notProductMsj = `You don't have any product yet.`;

    // To fix
    // Commented dependency User - continuous api call
    useEffect(() => {
        getUser().then(res => setUser(res));
    }, []);
    // }, [user]);

    return (
        <Container className={classes.container}>
        {
            (!redeemHistory)
                ? (
                    <Typography 
                        variant='h5'
                        className={classes.notProductMsj}>
                            {notProductMsj}</Typography>)
                : (
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
                                redeemHistory.map((product) => (
                                    <TableRow key={product.name}>
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
                )
        }
        </Container>
    )
}

export default UserProducts;
