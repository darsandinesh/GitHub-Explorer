import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './config/db';
import userRouter from './routes/userRoutes';

dotenv.config();
const app = express();

// database connection;
dbConnection();

app.use(cors());
app.use(express.json());

app.use('/', userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

