import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

export default dbConnection