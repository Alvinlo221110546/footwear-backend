import { sequelize, DataTypes } from "../config/footweardb.js";

const Lokals = sequelize.define(
    'Lokals',
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


export default Lokals;


