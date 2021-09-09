import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import RadioBtn from './RadioBtn';
import './styles/DataFilter.css';

const useStyles = makeStyles({
    btn: {
        color: '#7d7d7d',
        borderRadius: '50px',
        justifyContent: 'flex-end',
        backgroundColor: '#cacaca',
        textTransform: 'inherit',
        fontWeight: 'normal',
        margin: '0 10px'
    },
    btnActive: {
        color: '#ffffff',
        backgroundColor: '##15dbffß',
    },
    arrow: {
        fill: '#cacaca'
    }
});

const DataFilter = () => {

    const classes = useStyles();
    const [productFilter, setProductFilter] = useState(null);

    let actualProd = 16;
    let totalProd = 32;


    const handleFilter = (e) => {
        setProductFilter(e.target.value)
    };

    return (
        <div className='data-filter'>

            <p className='text'>
                <span className='text-total'>
                    {actualProd} of {totalProd}</span>
                <span className='text-separator'>|</span>
                <span className='text-sort'>Sort by:</span>
            </p>

            <div className='btn-wrap'>
                <form className='form' onChange={handleFilter}>
                    <RadioBtn
                        radioId='mostRecent'
                        radioLabel='Most recent'/>
                    <RadioBtn
                        radioId='lowestPrice'
                        radioLabel='Lowest price'/>
                    <RadioBtn
                        radioId='highestPrice'
                        radioLabel='Highest price'/>
                </form>
            </div>

            <div className='nexpre-wrap'>
                <IconButton>
                    <PlayCircleOutlineIcon
                        className={classes.arrow}/>
                </IconButton>
            </div>
        </div>
    )
}

export default DataFilter;