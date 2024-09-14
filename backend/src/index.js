const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const dbConnect = require('./config/dbConfig');


dotenv.config();

dbConnect();

const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));