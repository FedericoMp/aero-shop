import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAppContext } from '../provider/AppProvider';
import './styles/GridCard.css';
import CustomBadge from './CustomBadge';

const GridCard = ({prodItem}) => {
    
    const {_id, name, category, cost, img } = prodItem;
    const { user, provPostRedeem } = useAppContext();
    const { points } = user;

    const handleRedeemProduct = (productId, productCost) => provPostRedeem(productId, productCost);

    const cardDefault = () => {
        let cardPointFilter = (cost < points)
            ? (<div className='card-default'>
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
            : (<div className='card-nopoints'>
                    <CustomBadge
                        label={`You need ${cost - points}`}/>
                    <CardMedia
                        className='card-media'
                        image={img.url}
                        title={name}/>
                    <CardContent 
                        className='card-nopoints-content'>
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
                </div>);
        return cardPointFilter;
    }

    const cardHover = () => {
        return (<div className='card-hover'>
                    <img className='hover-card-buy-icon'
                        src="../img/buy-white.svg" alt="Buy icon" />
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
                            onClick={() => handleRedeemProduct(_id, cost)}
                            className='redeem-btn'>
                                Redeem now</Button>
                </div>)
    }

    return (
        <Card className='card-container'>
            { cardDefault() }
            { cardHover() }
        </Card>
    )
}

export default GridCard;