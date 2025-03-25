import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db';

dotenv.config();
const app = express();

// database connection;
dbConnection();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

