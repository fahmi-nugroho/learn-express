import express from 'express';
import request from 'supertest';
import mustacheExpress from 'mustache-express';

const app = express();

// NOTE Setup mustache express
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get('/', (req, res) => { 
  res.render("index", { title: "Hello Mustache", say: "Hello Response!" });
});

test('Test Response', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200);
  expect(response.text).toContain('Hello Mustache');
  expect(response.text).toContain('Hello Response!');
});