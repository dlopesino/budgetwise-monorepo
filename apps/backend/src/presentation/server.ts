import express, { Application, RequestHandler, Router } from 'express';
import cors from 'cors';

interface CorsOptions {
  origin: string[];
}

interface ServerOptions {
  port: number;
  corsOptions: CorsOptions;
  routes: Router;
  middlewares?: RequestHandler[];
}

export class Server {
  private readonly app: Application;
  private readonly port: number;
  private readonly routes: Router;
  private readonly corsOptions: CorsOptions;
  private serverListener?: ReturnType<typeof this.app.listen>;

  constructor(options: ServerOptions) {
    const { port, corsOptions, routes, middlewares = [] } = options;
    this.app = express();
    this.port = port;
    (this.corsOptions = corsOptions), (this.routes = routes);
    this.setup(middlewares);
  }

  private setup(middlewares: RequestHandler[]) {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: (origin, callback) => {
          // * Permitir si no hay origin (como Postman) o si está en la lista
          if (!origin || this.corsOptions.origin.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
          }
        },
        credentials: true,
      })
    );

    middlewares.forEach((mw) => this.app.use(mw));

    // * Rutas API
    this.app.use(this.routes);
  }

  public start() {
    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  public stop() {
    this.serverListener?.close();
  }

  public getApp(): Application {
    return this.app;
  }
}
