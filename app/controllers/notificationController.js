var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Beacon = mongoose.model('Beacon'),
  Content = mongoose.model('Content'),
  BeaconContentRelation = mongoose.model('BeaconContentRelation'),
  _ = require('underscore');

module.exports = function (app) {
  app.use('/notification', router);
};

function returnRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

router.get('/:bid', function (req, res, next) {
  BeaconContentRelation.find({
    'beacon': req.params.bid
  }, function (err, relations) {
    if (err) {
      return res.status(500).json({
        message: "couldn't create object. Error: " + err
      });
    }

    if (relations !== null && relations.length > 0) {
      console.log(relations);
      var relation = returnRandom(relations);
      console.log(relation);
      var content = relation.content;
      Content.findById(content,function (err, content) {
        if (err) {
          return res.status(500).json({
            message: "couldn't create object. Error: " + err
          });
        }

        res.status(200).json(
          content
        );
      });
    } else {
      res.status(404).json({
        message: 'empty'
      });
    }
  });
});

