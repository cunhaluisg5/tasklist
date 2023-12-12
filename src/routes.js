import { Router } from 'express';

import User from './app/models/User.js';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Teste',
    email: 'teste@teste.com',
    password_hash: '123456',
  });
  return res.json(user);
});

export default routes;
