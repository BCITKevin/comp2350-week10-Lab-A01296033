const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = require("../databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);


const userModel = sequelize.define(
  "web_user",
  {
    web_user_id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    first_name: { type: Sequelize.STRING, allowNull: false },
    last_name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password_hash: { type: Sequelize.STRING, allowNull: true },
    password_salt: { type: Sequelize.STRING, allowNull: false },
  },
  {
    tableName: "web_user",
    timestamps: false,
    singular: "web_user",
    plural: "web_user",
  }
);

// sequelize.sync()
//   .then(() => {
//     console.log("userModel synced successfully")
//   })
//   .catch((err) => {
//     console.error(err);
//   })

module.exports = userModel;
