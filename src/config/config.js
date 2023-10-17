import cors from 'cors'
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import express from "express";
import rateLimit from "express-rate-limit";
import {syncModels} from "../models/index.js";

dotenv.config()

export const config = async (app) => {
    app.use(cors())
    app.use(fileUpload({
        limits: {fileSize: 50 * 1024 * 1024},
    }));
    app.use(express.json({limit: "40000kb", extended: true}))
    // app.use(express.urlencoded({limit: "4000kb", extended: true}))

    app.use(rateLimit({
        windowMs: 60 * 1000,
        max: 1000,
        message: {error: 'Çok fazla istek yaptınız. Lütfen daha sonra tekrar deneyin.'}
    }));


    await syncModels()

}


export const port = process.env.PORT || 3000