import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDataBase = async () => {
    try {
        const connectInstance = await mongoose.connect(process.env.MONGODB_URL + process.env.MONGODB_NAME);
        console.log('Successfully connected to the database');
    } catch (error) {
        console.log('Failed to connect to database:', error);
    }
}

export default connectDataBase;