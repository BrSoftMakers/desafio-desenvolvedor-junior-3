const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes/user.route');
const { productRouter } = require('./routes/product.route');
const { saleRouter } = require('./routes/sale.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static('images'));

app.use('/', userRouter);
app.use('/register', userRouter);

app.use('/customer', userRouter);

app.use('/products', productRouter);

app.use('/order', saleRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
