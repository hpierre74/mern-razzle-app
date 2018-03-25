import User from "../Model/User";
import cuid from "cuid";

class UserController {
  static getUsers(req, res) {
    User.find().exec((err, users) => {
        err ? res.status(500).send(err) : res.json({ users });
      });
  }
  
  static getUser(req, res) {
      User.findById(req.params.userId).exec((err, user) => {
          err ? res.status(500).send(err): res.json({ user })
      })
  }
  static addUser(req, res) {
    let newUser = new User(req.body);
    newUser.cuid = cuid();
    newUser.save((err, user) => {
        err ? res.status(500).send(err) : res.json({ user });
    })
  }

  static deleteUser(req, res) {
    User.findOne({ _id: req.params.shopId }).exec((err, user) => {
        if (err) {
          res.status(500).send(err);
        }  
        user.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default UserController;
