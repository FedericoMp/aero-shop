import { baseReq } from '../config';

// Get user history
export default function getUserHistory() {
    return baseReq('user/history', 'GET');
}