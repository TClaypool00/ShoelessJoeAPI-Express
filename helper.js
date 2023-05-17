require('dotenv').config();

function getOffSet(currentPage = 1) {
    return (currentPage - 1) * [process.env.LIST_PER_PAGE];
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }

    return rows;
}

module.exports = {
    getOffSet,
    emptyOrRows
}