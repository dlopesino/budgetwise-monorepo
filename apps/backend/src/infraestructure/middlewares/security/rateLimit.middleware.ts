import { RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';

export const rateLimitMiddleware: RequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000, // * 15 minutos
  max: 100, // * Máximo 100 peticiones por IP(cada 15 minutos)
  standardHeaders: true, // * Devuelve cabeceras rate-limit estándar
  legacyHeaders: false, // * Desactiva cabeceras 'X-RateLimit-*'
  message: 'Too many requests from this IP, please try again later',
});
