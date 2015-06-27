var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Beacon = mongoose.model('Beacon'),
  BeaconContentRelation = mongoose.model('BeaconContentRelation'),
  _ = require('underscore');

module.exports = function (app) {
  app.use('/relate', router);
};

router.get('/', function (req, res, next) {
  BeaconContentRelation.find(function (err, relations) {
    if (err) return next(err);
    res.status(200).json(
      relations
    );
  });
});

router.get('/:bid', function (req, res, next) {
  BeaconContentRelation.findOne({
    'beacon._id': req.params.bid
  }, function (err, relation) {
    if (err) return next(err);
    res.status(200).json(
      relation
    );
  });
});

router.post('/create', function (req, res, next) {
  var beaconId = req.body.beaconId,
    contentId = req.body.contentId;

  if(beaconId || _.isEmpty(beaconId)) {
    res.status(403).json({
      message: "Empty/undefined beaconId"
    });
  }

  if(contentId || _.isEmpty(contentId)) {
    res.status(403).json({
      message: "Empty/undefined contentId"
    });
  }

  var beacon, content;

  Beacon.findOne({
    _id: req.params.bid
  }, function (err, _beacon) {
    if (err) return next(err);
    beacon = _beacon;
  });

  Content.findOne({
    _id: req.params.bid
  }, function (err, _content) {
    if (err) return next(err);
    content = _content;
  });

  var beaconContentRelation = new BeaconContentRelation({
    beacon: beacon,
    content: content
  });

  beaconContentRelation.save(function (err, beacon) {
    if (err) {
      res.status(500).json({
        message: "couldn't create object. Error: " + err
      });
    }
    res.status(200).json({
      message: "ok!",
      relation: beaconContentRelation
    });
  });
});
