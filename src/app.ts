import express, { Express, json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { CryptoCoinRoutes } from './routes/CryptoCoinRoutes';
import * as dotenv from 'dotenv';

const app: Express = express();
dotenv.config();

app.use(json());
app.use(cors());

try {
  app.get('/health', (req, res) => {
    res.status(200).send('Service is alive!');
  });

  new CryptoCoinRoutes(app);
} catch (err) {
  console.error({
    message: 'Internal server error',
    error: err
  });
}

export { app };