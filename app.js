import express from 'express';
import dotenv from 'dotenv';
import connectDataBase from './src/dB/dBConnection.js';
import phoneRoute from './src/route/phoneRoute.js';

dotenv.config({
    path:'./.env'
})
const app = express();
app.use(express.json());
const PORT=process.env.PORT;

connectDataBase();

app.get('/',(req,res)=>{
    res.send('Hii from backend');
})
app.use('/api',phoneRoute);
app.listen(PORT,()=>{
    console.log(`Your backend is running at the port ${PORT}`);
})