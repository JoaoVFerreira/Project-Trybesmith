import express from 'express';

import productsRouter from './routes/products';

import usersRouter from './routes/users';

import ordersRouter from './routes/orders';

import AppError from './middleware/appError';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

app.use(AppError);

export default app;
