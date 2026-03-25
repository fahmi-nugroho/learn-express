import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  res.send(`Hello ${req.get('accept')}!`);
});

test('Test Query Parameter', async () => {
  const response = await request(app).get('/').set("Accept", "text/plain");
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello text/plain!');
});