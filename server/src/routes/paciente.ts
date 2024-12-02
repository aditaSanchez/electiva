import { Router } from "express";
import { getPacientes, getPaciente, deletePaciente, postPaciente, updatePaciente} from "../controllers/paciente";


const router= Router();

router.get('/', getPacientes);
router.get('/:id', getPaciente);
router.delete('/:id', deletePaciente);
router.post('/', postPaciente);
router.put('/:id', updatePaciente);

export default router;
