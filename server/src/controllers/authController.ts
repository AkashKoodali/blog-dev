import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from 'bcrypt'
import sendMail from '../config/sendMail'
import { validateEmail } from '../middleware/valid'

import {generateAccessToken, generateActiveToken, generateRefreshToken } from '../config/generateToken';

const CLIENT_URL= `${process.env.BASE_URL}`


const authController = {
    register: async (req: Request, res: Response) => {
        try {

            const { name, account, password } = req.body

            const user = await Users.findOne({ account })

            if(user) return res.status(400).json({ msg: "Email or phone number already exists..!" });

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = {
                name, account, password: passwordHash
            }

            const active_token = generateActiveToken({newUser});
            const url = `${CLIENT_URL}/active/${active_token}`

            if(validateEmail(account)){
                sendMail(account, url, 'Verify your email address');
                return res.json({ message: 'Success! Please check your email..',})
            }

            res.json({ 
                status: 'OK',
                msg: "Register successfully.", 
                data: newUser,
                active_token 
            });
            
        } catch (error: any) {
            return res.status(500).json({mes: error.message})
        }
    }
}

export default authController;