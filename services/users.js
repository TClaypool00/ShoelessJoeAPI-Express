const db = require('./db');
const helper = require('../helper');
const tableName = 'users';
require('dotenv').config();

var sql = '';

async function getAll(index = 1) {
    const offset = helper.getOffSet(index);
    
    sql = 'CALL sp_sel_users(?, ?)'

    const rows = await db.queryWithParameter(sql, [offset, process.env.LIST_PER_PAGE]);
    const data = helper.emptyOrRows(rows);
    const meta = { index };

    return {
        data,
        meta
        
    }
}

module.exports = {
    getAll
}