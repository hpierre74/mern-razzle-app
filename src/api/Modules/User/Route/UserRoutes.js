import UserController from '../Controller/UserController.js';
import Router from 'express';
const UserRouter = new Router();


// Get all Users
UserRouter.route('/users').get(UserController.getUsers);

// Get one User by UserId
UserRouter.route('/users/:userId').get(UserController.getUser);

// Add a new User
UserRouter.route('/user').post(UserController.addUser);

// Delete a User by UserId
UserRouter.route('/users/:userId').delete(UserController.deleteUser);





export default UserRouter;