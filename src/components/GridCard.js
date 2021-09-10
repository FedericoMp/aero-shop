import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import './styles/GridCard.css';
import { postRedeem } from '../middleware/requests';

const GridCard = ({prodItem}) => {
    
    const {_id, name, category, cost, img } = prodItem;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const popOverId = open ? 'simple-popover' : undefined;

    const handleRedeemProduct = (productId) => {
        handleClose();
        postRedeem(productId)
            .then(res => {console.log(res)})
    };

    const cardDefault = () => {
        return (<div className='card-default' 
                    aria-describedby={popOverId}
                    onClick={handleClick}>
                    <img className='card-buy-icon'
                        src="../img/buy-blue.svg" alt="Buy icon" />
                    <CardMedia
                        className='card-media'
                        image={img.url}
                        title={name}/>
                    <CardContent 
                        className='card-default-content'>
                        <Typography 
                            className='card-category'
                            variant='caption'
                            gutterBottom>
                            {category}
                        </Typography>
                        <Typography
                            className='card-title'
                            variant='subtitle1'
                            gutterBottom>
                            {name}
                        </Typography>
                    </CardContent>
                </div>)
    }

    const cardOver = () => {
        return (<div className='card-over'>
                    <img className='card-buy-icon'
                        src="../img/buy-white.svg" alt="Buy icon" />
                    <CardContent
                        className='card-over-content'>
                        <div className='coin-wrap'>
                            <img className='card-coin-icon'
                                src="../img/coin.svg" alt="Coin" />
                            <Typography
                                className='card-over-title'
                                variant='h4'
                                gutterBottom>
                                {cost}
                            </Typography>
                        </div>
                        <Button 
                            size='small'
                            onClick={() => handleRedeemProduct(_id)}
                            className='redeem-btn'>
                                Redeem now</Button>
                    </CardContent>
                </div>)
    }

    return (
        <Card className='card-container'>
            { cardDefault() }
            <Popover
                id={popOverId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                { cardOver() }
            </Popover>
        </Card>
    )
}

export default GridCard;