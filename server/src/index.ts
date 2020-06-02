import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import router from '^/router';

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use(express.static(path.resolve(process.cwd(), '..', 'public')));

app.get('/', function (_req, res) {
  res.render('index.html');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;
