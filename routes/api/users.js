const express = require("express");
const router = express.Router();

// User Model

const User = require("../../models/users");

// User Registration Api

router.post("/signup/", (req, res) => {
  if (
    req.body.name === "" ||
    req.body.email === "" ||
    req.body.password === ""
  ) {
    res.send("Required Parameters not found");
    return;
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((response) => res.send({ error: 0, ...response._doc }))
    .catch((err) =>
      res.send({
        error: 1,
        message: "Email already registered",
      })
    );
});

// User Login Api

router.post("/login/", (req, res) => {
  if (req.body.email == "" || req.body.password == "") {
    res.send("Required Parameters not found");
    return;
  }

  User.findOne(
    { email: req.body.email, password: req.body.password },
    (error, result) => {
      if (error) {
        res.send(error);
      } else {
        if (result === null) {
          res.send({
            error: 1,
            message:
              "Invalid Email/Password or User may not have been registered",
          });
        } else {
          res.send({ error: 0, ...result._doc });
        }
      }
    }
  );
});

module.exports = router;
