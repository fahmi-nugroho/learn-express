import express from 'express';
import request from 'supertest';

const app = express();
// NOTE Karena ada update versi path-to-regexp maka penulisan jadi seperti ini
app.route('/products')
  .get((req, res) => {
    res.send('Products');
  }).post((req, res) => {
    res.send('Create Product');
  }).put((req, res) => {
    res.send('Update Product');
  });

test('Test Route Parameter', async () => {
  let response = await request(app).get('/products')
  expect(response.text).toBe('Products');
  response = await request(app).post('/products')
  expect(response.text).toBe('Create Product');
  response = await request(app).put('/products')
  expect(response.text).toBe('Update Product');
});