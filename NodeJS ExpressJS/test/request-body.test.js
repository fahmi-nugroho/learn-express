import express, { text } from 'express';
import request from 'supertest';
import expressFileUpload from 'express-fileupload';

const app = express();
// NOTE Contoh buildin middleware untuk membaca body request, baik itu JSON maupun form-urlencoded
app.use(express.json());
// NOTE jika extended true, maka query parameter juga akan dibaca, jika false maka hanya body saja yang dibaca
app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload());

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

app.post('/', async (req, res) => {
  // NOTE Jika files maka akan auto masuk ke .files
  const textFile = req.files.article
  await textFile.mv(__dirname + '/upload/' + textFile.name);

  res.send(`Hello ${req.body.name}, upload ${textFile.name} is success!`);
})

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

test('Test Response Upload', async () => {
  const response = await request(app)
    .post('/')
    .set('Content-Type', 'multipart/form-data')
    .attach('article', __dirname + '/contoh.txt')
    .field('name', 'John');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello John, upload contoh.txt is success!');
});