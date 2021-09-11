import React, { useState } from 'react';
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
import { localId } from '../utils';
import RadioBtn from './RadioBtn';
import { FILTER_PROFILE } from '../constants';
import './styles/UserProducts.css';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    notProductMsj: {
        textAlign: 'center',
        color: '#cacaca'
    }
});

const CustomSwitch = withStyles({
    switchBase: {
      color: '#ffab5f',
      '&$checked': {
        color: '#fe7a02',
      },
      '&$checked + $track': {
        backgroundColor: '#fe7a02',
      },
    },
    checked: {},
    track: {},
  })(Switch);

const UserProducts = ({data}) => {

    const { redeemHistory } = data;
    const classes = useStyles();
    const notProductMsj = `You don't have any product yet.`;

    const [productFilter, setProductFilter] = useState(FILTER_PROFILE.takeFive);
    const [switchState, setSwitchState] = useState(false);
    
    const onFilterChange = (e) => {
        setProductFilter(e.target.value);
    }

    const applyFilters = (historyArr) => {
        switch (productFilter) {
            case FILTER_PROFILE.takeFive: 
                return historyArr.slice(0, 5);
            
            case FILTER_PROFILE.takeTen: 
                return historyArr.slice(0, 10);
            
            case FILTER_PROFILE.takeAll: 
                return historyArr;
        }
    }

    let table;
    if(!redeemHistory) {
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
                        applyFilters(redeemHistory).map((product) => (
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

    const handleChange = () => {
        if(switchState) {
            setSwitchState(false);
            redeemHistory.reverse();
        } else {
            setSwitchState(true);
            redeemHistory.reverse();

        }
    };

    return (
        <div className='productsContainer'>
            <div className='btn-wrap'>
                <form className='form' onChange={onFilterChange}>
                    <RadioBtn
                        checked={true}
                        radioId={FILTER_PROFILE.takeFive}
                        radioLabel='Show 5 products'/>
                    <RadioBtn
                        radioId={FILTER_PROFILE.takeTen}
                        radioLabel='Show 10 products'/>
                    <RadioBtn
                        radioId={FILTER_PROFILE.takeAll}
                        radioLabel='Show all products'/>
                </form>
                <div className='toggle-wrap'>
                    <Typography variant='subtitle1'>
                        {switchState ? 'Last Redeem' : 'First Redeem'}
                    </Typography>
                    <CustomSwitch
                        checked={switchState}
                        onChange={handleChange}
                        name="switch"/>
                </div>
            </div>
            { table }
        </div>
    )
}

export default UserProducts;
