import { RequestHandler } from 'express';
import hpp from 'hpp';

export const hppMiddleware: RequestHandler = hpp();
