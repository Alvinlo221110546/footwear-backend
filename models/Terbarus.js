import { sequelize, DataTypes } from "../config/footweardb.js";

const Terbarus = sequelize.define(
    'Terbarus',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        }, description: {
            type: DataTypes.STRING, 
        },
        pricedescription: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    { timestamps: false }
);

export default Terbarus;


