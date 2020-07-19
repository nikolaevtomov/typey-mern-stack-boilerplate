import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/ping', (_req: Request, res: Response) => {
  res.send({
    message: 'Pong!',
  });
});

router.post('/ping', (req: Request, res: Response) => {
  res.send(req.body);
});

router.use((_req: Request, res: Response) => {
  res.status(404).send({ error: 'No API route!' });
});

export default router;
