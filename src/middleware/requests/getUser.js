import { baseReq } from '../config';

// Get user info
export default function getUser() {
    return baseReq('user/me', 'GET');
}
