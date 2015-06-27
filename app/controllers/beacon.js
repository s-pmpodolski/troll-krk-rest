var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Beacon = mongoose.model('Beacon'),
  _ = require('underscore');

module.exports = function (app) {
  app.use('/beacon', router);
};

router.get('/:bid', function (req, res, next) {
  Beacon.findOne({
    _id: req.params.bid
  }, function (err, beacon) {
    if (err) return next(err);
    res.status(200).json(
      beacon
    );
  });
});

router.post('/', function (req, res, next) {
  var name = req.body.name,
    latitude = req.body.latitude,
    longitude = req.body.longitude;

  if(_.isUndefined(name) || _.isEmpty(name)) {
    res.status(403).json({
      message: "Empty/undefined name"
    });
  }

  if(_.isUndefined(latitude) || _.isEmpty(latitude)) {
    res.status(403).json({
      message: "Empty/undefined latitude"
    });
  }

  if(_.isUndefined(longitude) || _.isEmpty(longitude)) {
    res.status(403).json({
      message: "Empty/undefined longitude"
    });
  }

  var loc = [longitude, latitude];

  var beacon = new Beacon({
    name: '',
    loc: loc
  });

  beacon.save(function (err, beacon) {
    if (err) {
      res.status(500).json({
        message: "couldn't create object. Error: " + err
      });
    }
    res.status(200).json({
      message: "ok!",
      id: beacon._id
    });
  });
});
