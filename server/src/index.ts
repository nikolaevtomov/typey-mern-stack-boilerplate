import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import router from '^/router';

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

// NOTE: Works for production but not on local
// app.use(express.static(path.resolve(process.cwd(), 'client', 'dist')));

// NOTE: Works for local but not for production
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
