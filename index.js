const express = require('express');
const userRouters = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})

app.use('/users', userRouters);


app.listen(process.env.LOCAL_PORT, () => {
    console.log(`API is listening on port ${process.env.LOCAL_PORT}`);
});