import express from 'express';
import request from 'supertest';

const logger = (req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
}

const addPoweredHeader = (req, res, next) => {
  res.setHeader('X-Powered-By', 'NodeJS Express');
  next();
}

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.query.api_key;
  if (apiKey === '123456') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

const requestTimeMiddeleware = (req, res, next) => {
  req.requestTime = new Date();
  next();
}

const app = express();
// NOTE Sesuai urutan, logger akan dijalankan terlebih dahulu, lalu requestTimeMiddeleware, apiKeyMiddleware, dan addPoweredHeader
app.use(logger);
app.use(requestTimeMiddeleware);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);

app.get('/', (req, res) => { 
  res.send(`Hello Response!`);
});

app.get('/time', (req, res) => { 
  res.send(`Hello Today is ${req.requestTime}!`);
});

test('Test Middleware', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(401);
  expect(response.text).toBe('Unauthorized');
});

test('Test Middleware2', async () => {
  const response = await request(app).get('/fahmi')
  expect(response.status).toBe(401);
  expect(response.text).toBe('Unauthorized');
});

test('Test Middleware3', async () => {
  const response = await request(app).get('/fahmi').query({api_key: '123456'})
  expect(response.status).toBe(404);
  expect(response.get('x-powered-by')).toBe('NodeJS Express');
});

test('Test Middleware', async () => {
  const response = await request(app).get('/time').query({api_key: '123456'})
  expect(response.status).toBe(200);
  expect(response.text).toContain('Hello Today is');
});