import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { registrar, login, logout, yo } from '../controllers/auth.controller.js';
import { autenticar } from '../middlewares/autenticar.js';

const router = Router();

const limiteLogin = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  skipSuccessfulRequests: true,
  message: { error: 'Demasiados intentos. Espera 15 minutos' },
});

router.post('/registro', limiteLogin, registrar);
router.post('/login', limiteLogin, login);
router.post('/logout', autenticar, logout);
router.get('/yo', autenticar, yo);

export default router;