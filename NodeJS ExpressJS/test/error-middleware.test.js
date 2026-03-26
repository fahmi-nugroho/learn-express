import express from 'express';
import request from 'supertest';

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}

const app = express();

app.get('/', (req, res) => { 
  throw new Error('Ups');
});

// NOTE biasanya ditaruh paling bawah
app.use(errorMiddleware);

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(500);
  expect(response.text).toBe('Something went wrong!');
});