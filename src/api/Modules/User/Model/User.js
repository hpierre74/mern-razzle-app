//import bcrypt from "bcrypt";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  restaurants: [{ type: String }]
});

userSchema.static('findByUsername', function(username, cb) {
  return this.findOne({ username: username }).exec((err, user) => {
    return cb(err, user)
  })
})

userSchema.static('findByEmail', function(email, cb) {
  return this.findOne({ email: email }).exec((err, user) => {
    return cb(err, user)
  })
})
//authenticate input against database
// userSchema.statics.authenticate = function(email, password, callback) {
//   User.findOne({ email: email }).exec(function(err, user) {
//     if (err) {
//       return callback(err);
//     } else if (!user) {
//       var err = new Error("User not found.");
//       err.status = 401;
//       return callback(err);
//     }
//     bcrypt.compare(password, user.password, function(err, result) {
//       if (result === true) {
//         return callback(null, user);
//       } else {
//         return callback();
//       }
//     });
//   });
// };

// userSchema.pre("save", function(next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   });
// });

export default mongoose.model("User", userSchema);
