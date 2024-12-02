import { Request, Response } from "express";
import Paciente from "../models/paciente";

export const getPacientes = async (req:Request, res:Response) =>{
    const listPacientes = await Paciente.findAll()
    res.json(listPacientes)
}

export const getPaciente = async(req:Request, res:Response) =>{
    const { id } = req.params;
    const listPaciente = await Paciente.findByPk(id);

    if (listPaciente){
        res.json(listPaciente)

    }else{
        res.status(404).json({
            msg: 'No existe el paciente'
        })
    }

}

export const deletePaciente =async(req:Request, res:Response) =>{
    const { id } = req.params;
    const listPaciente = await Paciente.findByPk(id);

    if (!listPaciente){
        res.status(404).json({
            msg: 'No existe el paciente'
        })

    }else{
        await listPaciente.destroy();
        res.json({
            msg: 'Paciente eliminado'
        })
    }
}

export const postPaciente = async(req:Request, res:Response) =>{
    const { body } = req;

    await Paciente.create(body);
    res.json({
        msg: 'Paciente agregado correctamente'
    })
}

export const updatePaciente = async(req:Request, res:Response) =>{
    const { body } = req;
    const { id } = req.params;
    const listPaciente = await Paciente.findByPk(id);

    if (listPaciente){

        await listPaciente.update(body);
        res.json({
            msg: 'Paciente actualizado correctamente'
        })

    }else{
        res.status(404).json({
            msg: 'No existe el paciente'
        })
    }
}