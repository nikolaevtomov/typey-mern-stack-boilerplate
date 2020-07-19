import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import router from '^/router';

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.use('/api', router);

app.get('*', (_req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'client', 'dist'),
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;
