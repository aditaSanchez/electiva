import { Sequelize } from '@sequelize/core';
//import { Sequelize } from "sequelize";
import { PostgresDialect } from '@sequelize/postgres'

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'electiva',
    user: 'postgres',
    password: '123123',
    host: 'localhost',
    port: 5432,
    //ssl: true,
    clientMinMessages: 'notice',
  });



export default sequelize;