import { Router } from 'express';
import UserController from './controller/UserController';


const routes = Router();

routes.post("/user", UserController.create);



export default routes;