import express from 'express';

import productsRouter from './routes/products';

import AppError from './middleware/appError';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use(AppError);

export default app;
