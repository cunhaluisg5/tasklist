import { Router } from 'express';

import authMiddlewares from './app/middlewares/auth.js';

import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import TaskController from './app/controllers/TaskController.js';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Todas as rotas abaixo passarão pelo authMiddlewares antes de seguirem o caminho.
// Forma para não precisar passar o authMiddlewares em cada rota que precisar utilizá-lo
routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
