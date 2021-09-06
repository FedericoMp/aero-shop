// API config object
const apiConfig = {
    "API_BASE_URL": "https://coding-challenge-api.aerolab.co",
    "API_HEADERS": {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMyMzM1NGE5MDUzOTAwMjFiNzBiMjQiLCJpYXQiOjE2MzA2Nzk4OTJ9.Y7l7eGT5MP5ZN6u2KajWUZnoNCARyWDi_O0dtqPKQuc`
    }
};

/**
 * Returns a base request promise
 * @param {string} endpoint
 * @param {string} method
 * @param {Object} data
 * @returns {Promise} Promise object with the resources or an error
 */
function baseReq(endpoint, method, data) {
    return fetch(`${apiConfig.API_BASE_URL}/${endpoint}`, {
        method: method,
        headers: apiConfig.API_HEADERS,
        body: JSON.stringify(data) || null
    })
    .then(res => res.json())
    .catch(err => err);
}

export { apiConfig, baseReq };