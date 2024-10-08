import {Hono} from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/json', (c) => {
  const name = c.req.query('name') || 'Json';
  return c.json({
    'message': `Hello ${name}!`
  });
});

export default app;