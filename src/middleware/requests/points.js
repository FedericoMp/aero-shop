import { baseReq } from '../config';

/**
 * Got some points
 * @param {number} points, valid: 1000, 5000 or 7500
 */
export default function postUserPoints(points) {
    return baseReq('user/points', 'POST', {
        "amount": points
      });
}
