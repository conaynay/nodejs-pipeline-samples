const request = require('supertest');
const app = require('./index');

test('GET / responds with Hello World', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toMatch(/Hello World/);
});
