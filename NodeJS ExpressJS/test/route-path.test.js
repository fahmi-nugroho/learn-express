import express from 'express';
import request from 'supertest';

const app = express();
// NOTE Karena ada update versi path-to-regexp maka penulisan jadi seperti ini
app.get(/^\/products\/.*\.json$/, (req, res) => { 
  res.send(req.originalUrl);
});

app.get(/^\/categories\/(\d+)\.json$/, (req, res) => { 
  res.send(req.originalUrl);
});

test('Test Route Path', async () => {
  let response = await request(app).get('/products/fahmi.json')
  expect(response.text).toBe('/products/fahmi.json');
  response = await request(app).get('/categories/123.json')
  expect(response.text).toBe('/categories/123.json');
  response = await request(app).get('/categories/fahmi.json')
  expect(response.status).toBe(404);
});