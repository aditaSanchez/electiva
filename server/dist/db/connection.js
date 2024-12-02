"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
//import { Sequelize } from "sequelize";
const postgres_1 = require("@sequelize/postgres");
const sequelize = new core_1.Sequelize({
    dialect: postgres_1.PostgresDialect,
    database: 'electiva',
    user: 'postgres',
    password: '123123',
    host: 'localhost',
    port: 5432,
    //ssl: true,
    clientMinMessages: 'notice',
});
exports.default = sequelize;
