const express = require('express');
const path = require('path');
const keys = require('./keys/keys');

// .env file
require('dotenv').config({path: '.env'})

const app = express();
app.use(express.json());


if(process.env.NODE_ENV && ['production','ci'].includes(process.env.NODE_ENV)) {
    // SET THE STATIC FOLDER TO frontend/build
    app.use(express.static(path.resolve(__dirname,'frontend','build')));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Hello From API /');
    });
}

app.get('/api', (req, res) => {
    res.send('Hello From API /api');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});