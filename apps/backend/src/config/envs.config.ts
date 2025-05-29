import { config } from 'dotenv';
import { get } from 'env-var';
config();

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  CORS_ORIGIN: get('CORS_ORIGIN').required().asUrlString(),
};
