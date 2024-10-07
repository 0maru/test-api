import {Hono} from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/json', (c) => {
  return c.json({
    'message': 'Hello Hono!'
  });
});

export default app;