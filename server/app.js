const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// read
app.get('/getAll', (request, response) => {
    console.log('test')
    response.send('server is working 🚀');
})


app.listen(process.env.PORT, () => console.log(`app is running on port ${process.env.PORT}`));