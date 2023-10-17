import nodemailer from "nodemailer"
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (to, subject, text) => {
    try {

        const data = {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            username: process.env.MAIL_USERNAME,
            password: process.env.MAIL_PASSWORD,
        }

        const transporter = nodemailer.createTransport({
            host: data.host,
            port: data.port,
            secure: false,
            auth: {
                user: data.username,
                pass: data.password,
            },
        });

        await transporter.sendMail({
            from: data.username,
            to,
            subject,
            text,
        });

        return true;
    } catch (error) {
        return error;
    }
}