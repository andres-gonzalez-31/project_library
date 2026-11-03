import { Router } from 'express';
import { misLecturas, obtenerProgreso, guardarProgreso, eliminarProgreso } from '../controllers/progreso.controller.js';
import { autenticar } from '../middlewares/autenticar.js';

const router = Router();

router.get('/mis-lecturas', autenticar, misLecturas);
router.get('/:libroId', autenticar, obtenerProgreso);
router.put('/:libroId', autenticar, guardarProgreso);
router.delete('/:libroId', autenticar, eliminarProgreso);

export default router;