var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Beacon = mongoose.model('Beacon'),
  _ = require('underscore');

module.exports = function (app) {
  app.use('/beacon', router);
};


router.get('/', function (req, res, next) {
  Beacon.find(function (err, beacons) {
    if (err) return next(err);
    res.status(200).json(
      beacons
    );
  });
});

//params: latitude, longitude, km radius
router.post('/', function (req, res, next) {
  // get the max distance or set it to 8 kilometers
  var maxDistance = req.body.maxDistance || 8;

  // we need to convert the distance to radians
  // the raduis of Earth is approximately 6371 kilometers
  maxDistance /= 6371;

  // get coordinates [ <longitude> , <latitude> ]
  var coords = [];
  coords[0] = req.body.longitude;
  coords[1] = req.body.latitude;

  // find a location
  Beacon.find({
    loc: {
      $near: coords,
      $maxDistance: maxDistance
    }
  }).exec(function(err, beacons) {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }
    res.json(200, beacons);
  });
});

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

router.post('/create', function (req, res, next) {
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
