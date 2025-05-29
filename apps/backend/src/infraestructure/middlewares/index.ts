import { compressionMiddleware } from './performance/compression.middleware';
import { helmetMiddleware } from './security/helmet.middleware';
import { hppMiddleware } from './security/hpp.middleware';
import { rateLimitMiddleware } from './security/rateLimit.middleware';

export const globalMiddlewares = [
  helmetMiddleware,
  rateLimitMiddleware,
  hppMiddleware,
  compressionMiddleware,
];
