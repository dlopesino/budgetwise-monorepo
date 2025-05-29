import { envs } from './config/envs.config';
import { AppRouter } from './presentation/app.routes';
import { Server } from './presentation/server';

(() => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    corsOptions: { origin: [envs.CORS_ORIGIN] },
    routes: AppRouter.routes,
  });

  server.start();
}
