import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  res.set({'Content-Type': 'text/html'}).send('<html><head><title>Hello HTML</title></head></html>');
});

test('Test Response Body', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toContain('text/html');
  expect(response.text).toBe('<html><head><title>Hello HTML</title></head></html>');
});