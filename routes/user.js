import express from 'express';
import userController from '../controllers/userController';
import userValidation from '../middlewares/userValidation';

const router = express.Router();

router
      .post('/login',userController.login) // ,userValidation.login
      .post('/register',userController.register) // userValidation.register
      .get('/', userController.all)
    

export default router;