const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, onlyData = true) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.query(sql);

    if (onlyData) {
        return results[0];
    }

    return results;
}

async function queryWithParameter(sql, params, onlyData = true) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.query(sql, params);

    if (onlyData) {
        return results[0];
    }

    return results;
}

module.exports = {
    query,
    queryWithParameter
}