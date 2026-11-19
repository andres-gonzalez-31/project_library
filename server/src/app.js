import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import authRoutes from './routes/auth.routes.js';
import libroRoutes from './routes/libro.routes.js';
import progresoRoutes from './routes/progreso.routes.js';
import importarRoutes from './routes/importar.routes.js';




const app = express();

app.set('trust proxy', 1);

app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());

app.use('/api', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas peticiones, intenta más tarde' },
}));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, hora: new Date().toISOString() });
});

app.use('/api/fuente', importarRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/progreso', progresoRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;