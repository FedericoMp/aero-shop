/**
 * Parse Date
 * @param {Date} date from user info
 * @returns {string} string parsed info 
 */
export default function parseDate(date) {
    const dateToParse = Date.parse(date);
    const newDateParsed = new Date(dateToParse);
    return newDateParsed.toLocaleDateString();
}