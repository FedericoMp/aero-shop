import React, { useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import { useAppContext } from '../provider/AppProvider';

const ShopBadge = withStyles({
    badge: {
        top:' 0px',
        right: '-10px',
        color: '#ffffff',
        padding: '0 4px',
        fontWeight:' normal',
        backgroundColor: '#fe7a00',
        border: '1px solid #ffc793',
    }
  })(Badge);

const CartBadge = () => {

    const { user, provGetUser } = useAppContext();
    const { redeemHistory } = user;

    useEffect(() => {
        provGetUser();
    }, []);

    return (
        <IconButton aria-label="cart">
            <ShopBadge badgeContent={(redeemHistory) 
                    ? redeemHistory.length : ''}
                    showZero
                    max={99}>
                <ShoppingCartIcon />
            </ShopBadge>
        </IconButton>
    )
}

export default CartBadge;
