"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePaciente = exports.postPaciente = exports.deletePaciente = exports.getPaciente = exports.getPacientes = void 0;
const paciente_1 = __importDefault(require("../models/paciente"));
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPacientes = yield paciente_1.default.findAll();
    res.json(listPacientes);
});
exports.getPacientes = getPacientes;
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listPaciente = yield paciente_1.default.findByPk(id);
    if (listPaciente) {
        res.json(listPaciente);
    }
    else {
        res.status(404).json({
            msg: 'No existe el paciente'
        });
    }
});
exports.getPaciente = getPaciente;
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listPaciente = yield paciente_1.default.findByPk(id);
    if (!listPaciente) {
        res.status(404).json({
            msg: 'No existe el paciente'
        });
    }
    else {
        yield listPaciente.destroy();
        res.json({
            msg: 'Paciente eliminado'
        });
    }
});
exports.deletePaciente = deletePaciente;
const postPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield paciente_1.default.create(body);
    res.json({
        msg: 'Paciente agregado correctamente'
    });
});
exports.postPaciente = postPaciente;
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const listPaciente = yield paciente_1.default.findByPk(id);
    if (listPaciente) {
        yield listPaciente.update(body);
        res.json({
            msg: 'Paciente actualizado correctamente'
        });
    }
    else {
        res.status(404).json({
            msg: 'No existe el paciente'
        });
    }
});
exports.updatePaciente = updatePaciente;
