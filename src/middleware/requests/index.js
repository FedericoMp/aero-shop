/**
 * A module that exports all request functions
 * @module requests
 */
import getUser from './getUser';
import postUserPoints from './postUserPoints';
import getUserHistory from './getUserHistory';
import postRedeem from './postRedeem';
import getProducts from './getProducts';

export { 
    getUser, 
    postUserPoints, 
    getUserHistory, 
    postRedeem,
    getProducts
};