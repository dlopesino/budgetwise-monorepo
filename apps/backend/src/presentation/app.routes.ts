import { Request, Response, Router } from 'express';

export class AppRouter {
  static get routes(): Router {
    const router = Router();

    router.get('/api', (req: Request, res: Response) => {
      res.status(200).json({
        message: 'reponse ok!',
      });
    });

    return router;
  }
}
