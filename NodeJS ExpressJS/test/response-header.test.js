import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => {
  res.set({
    'X-Powered-By': 'ExpressJS',
    'X-Author': 'Fahmi'
  }).end();
});

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.headers['x-powered-by']).toBe('ExpressJS');
  expect(response.headers['x-author']).toBe('Fahmi');
});