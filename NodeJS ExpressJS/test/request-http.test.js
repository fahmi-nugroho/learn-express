import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  res.send(`Hello ${req.query.name}!`);
});

test('Test Query Parameter', async () => {
  const response = await request(app).get('/').query({ name: 'Fahmi' });
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Fahmi!');
});