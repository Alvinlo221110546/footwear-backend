import { sequelize, DataTypes } from "../config/footweardb.js";

const Pria = sequelize.define(
  'Pria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
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


export default Pria;


