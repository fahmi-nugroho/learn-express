import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  res.send(`Hello Response!`);
});

app.use((req, res) => {
  res.status(404).send('Not Found!');
});

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Response!');
});

test('Test Response Not Found', async () => {
  const response = await request(app).get('/not-found')
  expect(response.status).toBe(404);
  expect(response.text).toBe('Not Found!');
});