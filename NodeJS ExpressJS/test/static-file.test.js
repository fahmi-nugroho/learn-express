import express from 'express';
import request from 'supertest';

const app = express();
// NOTE Contoh buildin middleware untuk membaca static file
// app.use(express.static(__dirname + '/static'));
// NOTE Contoh untuk menambahkan prefix ke static
app.use("/static" ,express.static(__dirname + '/static'));

app.get('/', (req, res) => { 
  res.send(`Hello Response!`);
});

test('Test Static File', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello Response!');
});

test('Test Static File contoh.txt', async () => {
  // const response = await request(app).get('/contoh.txt')
  const response = await request(app).get('/static/contoh.txt')
  expect(response.status).toBe(200);
  expect(response.text).toBe('Sample Text');
});