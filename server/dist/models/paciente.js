"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core"); //'sequelize';
const connection_1 = __importDefault(require("../db/connection"));
const Paciente = connection_1.default.define('Pacientes', {
    nombre: {
        type: core_1.DataTypes.STRING
    },
    apellido: {
        type: core_1.DataTypes.STRING
    },
    cedula: {
        type: core_1.DataTypes.STRING
    },
    email: {
        type: core_1.DataTypes.STRING
    },
    telefono: {
        type: core_1.DataTypes.STRING
    },
    fechaNac: {
        type: core_1.DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Paciente;
