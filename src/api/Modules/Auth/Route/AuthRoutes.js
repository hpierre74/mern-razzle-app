import AuthController from '../Controller/AuthController';
import { Router } from 'express';
const AuthRouter = new Router();

// Get all Auths
AuthRouter.route('/login').post(AuthController.login);

// Get one Auth by AuthId
//AuthRouter.route('/logout').get(AuthController.logout);

export default AuthRouter;




// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });
