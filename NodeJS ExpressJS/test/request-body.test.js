import express from 'express';
import request from 'supertest';

const app = express();
// NOTE Contoh buildin middleware untuk membaca body request, baik itu JSON maupun form-urlencoded
app.use(express.json());
// NOTE jika extended true, maka query parameter juga akan dibaca, jika false maka hanya body saja yang dibaca
app.use(express.urlencoded({ extended: false }));

app.post('/json', (req, res) => {
  const name = req.body.name;
  res.json({
    message: `Hello ${name}!`
  })
});

app.post('/form', (req, res) => {
  const name = req.body.name;
  res.json({
    message: `Hello ${name}!`
  })
});

test('Test Response JSON', async () => {
  const response = await request(app)
    .post('/json')
    .set('Content-Type', 'application/json')
    .send({ name: 'John' });
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Hello John!');
});

test('Test Response Form', async () => {
  const response = await request(app)
    .post('/form')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send("name=John");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Hello John!');
});