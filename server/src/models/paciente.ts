import { DataTypes } from '@sequelize/core';//'sequelize';
import db from '../db/connection';


const Paciente = db.define('Pacientes', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    fechaNac: {
        type: DataTypes.DATE
    }
},
{
    createdAt: false,
    updatedAt: false
})

export default Paciente;
