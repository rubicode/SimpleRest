var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Todo.find().then((data)=>{
    res.json(data);
  });
});

router.post('/', function(req, res, next) {
  let todo = new Todo(req.body)
  todo.save().then((todoCreated)=>{
    res.status(201).json(todoCreated);
  })
});

router.put('/:id', function(req, res, next) {
  Todo.findOneAndUpdate(
    {_id: req.params.id},
    {title: req.body.title, complete: JSON.parse(req.body.complete)},
    {new: true}
  ).then((todoUpdated)=>{
    res.status(201).json(todoUpdated);
  })
});

router.delete('/:id', function(req, res, next) {
  Todo.findOneAndRemove({_id: req.params.id}).then((todoRemoved)=>{
    res.status(201).json(todoRemoved);
  })
});



module.exports = router;
