import express from 'express';
import request from 'supertest';

const app = express();
// NOTE Karena ada update versi path-to-regexp maka penulisan jadi seperti ini
app.get('/products/:id', (req, res) => { 
  res.send(`Product: ${req.params.id}`);
});

app.get(/^\/categories\/(\d+)\/?$/, (req, res) => { 
  res.send(`Category: ${req.params[0]}`);
});

test('Test Route Parameter', async () => {
  let response = await request(app).get('/products/fahmi')
  expect(response.text).toBe('Product: fahmi');
  response = await request(app).get('/categories/1234')
  expect(response.text).toBe('Category: 1234');
  response = await request(app).get('/categories/fahmi')
  expect(response.status).toBe(404);
});