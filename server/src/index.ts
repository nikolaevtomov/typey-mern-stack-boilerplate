import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from '^/router';

dotenv.config({ path: path.resolve(process.cwd(), '..', '.env') });

const app = express();
const { PORT = 3000, USERNAME, DATABASE, PASSWORD } = process.env;

app.use(bodyParser.json());

mongoose.connect(
  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.3qdwg.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// TODO Works for production but not on local
// app.use(express.static(path.resolve(process.cwd(), 'client', 'dist')));

// TODO: Works for local but not for production
app.use(express.static(path.resolve(process.cwd(), '..', 'client', 'dist')));

app.use('/api', router);

app.get('/*', (_req, res) => {
  res.sendFile('index.html', {
    root: path.join(path.resolve(process.cwd(), '..', 'client', 'dist')),
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;
