var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Beacon = mongoose.model('Beacon'),
  Content = mongoose.model('Content'),
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
  BeaconContentRelation.find({
    'beacon._id': req.params.bid
  }, function (err, relations) {
    if (err) return next(err);
    if(relation !== null) {
      res.status(200).json(
        relations
      );
    } else {
      res.status(404).json({
        message: 'beacon not found'
      });
    }
  });
});

router.post('/create', function (req, res, next) {
  var beaconId = req.body.beaconId,
    contentId = req.body.contentId;

  if(!beaconId || _.isEmpty(beaconId)) {
    res.status(403).json({
      message: "Empty/undefined beaconId"
    });
  }

  if(!contentId || _.isEmpty(contentId)) {
    res.status(403).json({
      message: "Empty/undefined contentId"
    });
  }

  var beacon, content;

  //TODO: to refactor
  //callback hell shit
  Beacon.findOne(contentId, function (err, _beacon) {
    if (err) {
      return res.status(403).json({
        message: "Error! " + err
      });
    }
    beacon = _beacon;

    Content.findById(contentId, function (err, _content) {
      if (err) {
        return res.status(403).json({
          message: "Error! " + err
        });
      }
      content = _content;

      var beaconContentRelation = new BeaconContentRelation({
        beacon: beacon._id,
        content: content._id
      });

      beaconContentRelation.save(function (err, beacon) {
        if (err) {
          return res.status(500).json({
            message: "couldn't create object. Error: " + err
          });
        }
        res.status(200).json({
          message: "ok!",
          relation: beaconContentRelation
        });
      });
    });

  });


});
