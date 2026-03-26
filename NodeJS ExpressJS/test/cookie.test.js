import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => { 
  // NOTE Membaca cookie dengan nama 'name'
  const name = req.cookies['name']
  res.send(`Hello ${name}!`);
});

app.post('/login', (req, res) => {
  // NOTE Menulis cookie dengan nama 'Login' dan nilai kiriman dari body
  const name = req.body.name
  res.cookie('Login', name, { path: '/' });
  res.send('Login Success!');
});

test('Test Read Cookie', async () => {
  const response = await request(app)
    .get('/')
    .set('Cookie', 'name=John;author=Budi');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello John!');
});

test('Test Write Cookie', async () => {
  const response = await request(app).post('/login').send({ name: 'John' });
  expect(response.status).toBe(200);
  expect(response.text).toBe('Login Success!');
  expect(response.get('Set-Cookie').toString()).toMatch(/Login=John/);
});