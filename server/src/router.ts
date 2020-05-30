import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/message', (_req: Request, res: Response) => {
  res.send({
    message: 'Hello world!',
  });
});

router.post('/message', (req: Request, res: Response) => {
  res.send(req.body);
});

router.use((_req: Request, res: Response) => {
  res.status(404).send({ error: 'Page not found' });
});

export default router;
