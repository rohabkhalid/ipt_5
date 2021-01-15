const express = require("express");
const router = express.Router();

// User Model

const Task = require("../../models/tasks");

// Get All Tasks

router.get("/:email", function (req, res) {
  Task.find({ email: req.params.email }, (error, results) => {
    res.send(results);
  });
});

// Post a Task

router.post("/", function (req, res) {
  if (req.body.task === "" || req.body.email === "") {
    res.send("Required Parameters not found");
    return;
  }

  const newTask = new Task({
    email: req.body.email,
    task: req.body.task,
  });

  newTask
    .save()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

router.put("/", function (req, res) {
  Task.findById(req.body.id, function(err, t) {
    if (!t)
      return res.send(new Error('Could not load Document'));
    else {
      t.isCompleted = req.body.isCompleted;
  
      t.save(function(err, response) {
        if (err)
          res.send(err)
        else
          res.send(response)
      });
    }
  });
});

module.exports = router;
