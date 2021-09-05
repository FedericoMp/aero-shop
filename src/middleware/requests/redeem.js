import { baseReq } from '../config';

/**
 * Redeem a product
 * @param {string} productId
 */
export default function postRedeem(productId) {
    return baseReq('redeem', 'POST', {
        "productId": productId
      });
}
