import {Sequelize} from "sequelize";
import dotenv from 'dotenv'
dotenv.config()


const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_LOGGING,
    DB_DIALECT
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: DB_LOGGING === 'true',
});

export default sequelize