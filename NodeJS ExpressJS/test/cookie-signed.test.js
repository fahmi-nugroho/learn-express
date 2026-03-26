import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
// NOTE Contoh buildin middleware untuk membaca cookie dan secret cookie
app.use(cookieParser('SANGATRAHASIA'));
app.use(express.json());

app.get('/', (req, res) => { 
  // NOTE Membaca signed cookie dengan nama 'name'
  const name = req.signedCookies['Login']
  res.send(`Hello ${name}!`);
});

app.post('/login', (req, res) => {
  // NOTE Menulis cookie dengan nama 'Login' dan nilai kiriman dari body dan dienkripsi
  const name = req.body.name
  res.cookie('Login', name, { path: '/', signed: true });
  res.send('Login Success!');
});

test('Test Read Cookie', async () => {
  const response = await request(app)
    .get('/')
    .set('Cookie', 'Login=s%3AJohn.aZGNZzIUvVLgPL8s0Ywk%2BDuwsFSah1KEEucRicyznpk; Path=/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello John!');
});

test('Test Write Cookie', async () => {
  const response = await request(app).post('/login').send({ name: 'John' });
  expect(response.status).toBe(200);
  expect(response.text).toBe('Login Success!');
  expect(response.get('Set-Cookie').toString()).toContain('John');
});