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
  return arr[Math.random() * arr.length];
}

router.get('/:bid', function (req, res, next) {
  BeaconContentRelation.find({
    'beacon._id': req.params.bid
  }, function (err, relations) {
    if (err) return next(err);
    console.log(relations);
    if (relations !== null && relations.length > 0) {
      res.status(200).json(
        returnRandom(relations)
      );
    } else {
      res.status(404).json({
        message: 'empty'
      });
    }
  });
});

