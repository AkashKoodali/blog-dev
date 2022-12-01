import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from '../src/routes/index'


//Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());



//Database
import '../src/config/datbase';

//Routes
app.use('/api', routes.authRouter );


// server listening 
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
    console.log("Server is running...!");
    
});