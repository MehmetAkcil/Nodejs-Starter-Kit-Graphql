import {DataTypes} from 'sequelize';
import sequelize from './connect.js';


const tableName = 'db_example';
const Example = sequelize.define(tableName, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName
});


export default Example;
