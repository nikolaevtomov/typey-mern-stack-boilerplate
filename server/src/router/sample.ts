import express, { Request, Response } from 'express';

import SampleModel from '../models/sample';

const router = express.Router();

router.get('/samples', async (_req: Request, res: Response) => {
  const samples = await SampleModel.find({});

  try {
    res.send(samples);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/sample', async (req: Request, res: Response) => {
  const sample = new SampleModel(req.body);

  try {
    await sample.save();
    res.send(sample);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/sample/:id', async (req: Request, res: Response) => {
  try {
    await SampleModel.findByIdAndUpdate(req.params.id, req.body);
    const updated = await SampleModel.findOne({ _id: req.params.id });
    res.send(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/sample/:id', async (req: Request, res: Response) => {
  try {
    const sample = await SampleModel.findByIdAndDelete(req.params.id);

    if (!sample) res.status(404).send('No sample found!');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
