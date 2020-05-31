import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import router from '^/router';

const app = express();
const { PORT = 3000 } = process.env;

app.use(
  express.static(path.resolve(process.cwd(), '..', '..', 'client', 'dist')),
);

app.use(bodyParser.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;
