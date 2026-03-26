import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => { 
  // NOTE Salah satu contoh response body lain (.send, .download, .json, .sendFile, .redirect, )
  res.sendFile(__dirname + '/contoh.txt');
});

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.text).toBe('Sample Text');
});