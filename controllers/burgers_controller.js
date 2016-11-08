var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  //sequelize update
  burger.findAll()
  .then(function(res) {
    res.render('index', {burgers : res});
  });

});

router.post('/burgers/insertOne', function (req, res) {
  //sequelize update
  burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  })
  .then(function() {
    res.redirect('/burgers');
  });

});

router.put('/burgers/updateOne/:id', function (req, res) {
  //sequelize update
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/burgers');
  });
});

router.delete('/burgers/deleteOne/:id', function (req, res) {
    //sequelize update
  var condition = 'id = ' + req.params.id;

  burger.deleteOne({
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/burgers');
  });
});

  
module.exports = router;