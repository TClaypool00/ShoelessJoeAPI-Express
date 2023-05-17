require('dotenv').config();

const config = {
    db : {
        host : process.env.LOCAL_DB_HOST,
        user: process.env.LOCAL_DB_USERNAME,
        password: process.env.LOCAL_DB_PASSWORD,
        database: process.env.LOCAL_DB_DATABASE_NAME
    }
}

module.exports = config;