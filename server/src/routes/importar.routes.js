import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { buscarExterno, importarLibro } from '../controllers/importar.controller.js';
import { autenticar } from '../middlewares/autenticar.js';

const router = Router();

const limite = rateLimit({ windowMs: 60 * 1000, max: 15 });

router.get('/buscar', autenticar, limite, buscarExterno);
router.post('/importar', autenticar, limite, importarLibro);

export default router;