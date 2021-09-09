import React from 'react';
import RadioBtn from './RadioBtn';
import './styles/DataFilter.css';
import { FILTER_TYPES } from '../constants';

const DataFilter = ({productLength, actualPage, onPageChange, onFilterChange}) => {

    let actualProd = (actualPage === 1) ? productLength / 2 : productLength;

    return (
        <div className='data-filter'>

            <p className='text'>
                <span className='text-total'>
                    {actualProd} of {productLength}</span>
                <span className='text-separator'>|</span>
                <span className='text-sort'>Sort by:</span>
            </p>

            <div className='btn-wrap'>
                <form className='form' onChange={onFilterChange}>
                    <RadioBtn
                        checked={true}
                        radioId={FILTER_TYPES.mostRecent}
                        radioLabel='Most recent'/>
                    <RadioBtn
                        radioId={FILTER_TYPES.lowestPrice}
                        radioLabel='Lowest price'/>
                    <RadioBtn
                        radioId={FILTER_TYPES.highestPrice}
                        radioLabel='Highest price'/>
                </form>
            </div>

            <div className='nexpre-wrap'>
                <img className={`arrow ${(actualPage === 2) ? 'turned' : ''}`}
                    src="../img/arrow-right.svg" 
                    alt="arrow" 
                    onClick={onPageChange}/>
            </div>
        </div>
    )
}

export default DataFilter;