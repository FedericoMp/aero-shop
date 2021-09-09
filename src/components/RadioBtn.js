import React from 'react';
import './styles/RadioBtn.css';

const RadioBtn = ({radioLabel, radioId}) => {

    return (
        <div className='radio-wrap'>
            <input 
                type='radio' 
                name='radioBtn' 
                id={radioId} 
                value={radioId}/>
            <label 
                htmlFor={radioId} 
                name='radioBtn'>{
                radioLabel}</label>
        </div>
    )
}

export default RadioBtn;
