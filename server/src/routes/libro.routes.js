import { Router } from 'express';
import { listarLibros, obtenerLibro, obtenerPaginas } from '../controllers/libro.controller.js';
import { autenticar } from '../middlewares/autenticar.js';

const router = Router();

router.get('/', autenticar, listarLibros);
router.get('/:id', autenticar, obtenerLibro);
router.get('/:id/paginas', autenticar, obtenerPaginas);

export default router;