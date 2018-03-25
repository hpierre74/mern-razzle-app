import User from "../../User/Model/User";
import jwt from 'jsonwebtoken';
import config from '../../../config/config';


class AuthController {
  static login(req, res, next) {
    return User.findOne({username: req.body.username, password: req.body.password})
      .exec((err, user) => {
        if(err) return next(err);
        const token = jwt.sign({
          username: user.username
        }, config.jwtSecret);
        res.json({
          token,
          username: user.username,
          id: user._id
        })
    })
  }
}
export default AuthController;
