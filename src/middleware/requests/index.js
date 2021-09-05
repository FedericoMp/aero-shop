/**
 * A module that exports all request functions
 * @module requests
 */
import getUser from './user';
import postUserPoints from './points';
import getUserHistory from './history';
import postRedeem from './redeem';
import getProducts from './products';

export { 
    getUser, 
    postUserPoints, 
    getUserHistory, 
    postRedeem,
    getProducts
};