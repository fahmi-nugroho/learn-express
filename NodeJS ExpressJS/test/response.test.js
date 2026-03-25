import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  res.send(`Hello Response!`);
});

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Response!');
});