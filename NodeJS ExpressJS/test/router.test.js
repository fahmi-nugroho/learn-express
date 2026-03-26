import express from 'express';
import request from 'supertest';

const app = express();

const router = express.Router();

// NOTE Middleware hanya jalan di router ini, bukan app secara keseluruhan
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/feature/a', (req, res) => {
  res.send('Feature A');
});

const featureEnabled = false;

if (featureEnabled) {
  app.use(router);
}

test('Test Router enabled', async () => {
  const response = await request(app).get('/feature/a');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Feature A');
});

test('Test Router disabled', async () => {
  const response = await request(app).get('/feature/a');
  expect(response.status).toBe(404);
});