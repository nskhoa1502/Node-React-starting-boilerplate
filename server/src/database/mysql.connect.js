// How to config MySQL using Sequelize

// 1. npm install mysql2 sequelize-cli sequelize
// 2. In this file: paste the code below
// 3. Inside src folder => run command -> npx sequelize-cli init
// ==> It will create 4 folders:config,models, migration,seeders

// ==> Generate sample models -> run this command
// ------> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
// ==> Delete seeders folder
// ==> Adjust your schema in the models folder
// ==> Migrate your database into XAMPP (need to be installed) --> Run this command
// ------> npx sequelize-cli db:migrate

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("store", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectionDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectionDatabase();
