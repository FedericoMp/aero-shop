const REDUCER_TYPES = {
    getUser: 'GET_USER',
    getProducts: 'GET_PRODUCTS',
    getUserHistory: 'GET_USER_HISTORY'
};

const FILTER_TYPES = {
    mostRecent: 'mostRecent', 
    lowestPrice: 'lowestPrice',
    highestPrice: 'highestPrice'
};

const PRODUCT_TO_SHOW = {
    half: 'half',
    all: 'all',
};

export {
    REDUCER_TYPES,
    FILTER_TYPES,
    PRODUCT_TO_SHOW
}