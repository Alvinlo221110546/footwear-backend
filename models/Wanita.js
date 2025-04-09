import { sequelize, DataTypes } from "../config/footweardb.js";



const Wanita = sequelize.define(
  'Wanita',
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


export default Wanita;
