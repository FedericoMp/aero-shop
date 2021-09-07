import { baseReq } from '../config';

// Get products
export default function getProducts() {
    return baseReq('products', 'GET');
}
