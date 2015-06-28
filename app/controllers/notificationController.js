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

function returnRandom(arr, device) {
  console.log("JSON"+ JSON.stringify(arr));
  var contentIds = arr.map(function(item){
    return item.content;
  })

  Content.find({ _id: { $in: contentIds }, "deviceIds": {$ne:req.query.device}},function (err, content) {
    if(err) {
      return res.status(500).json({
        message: "couldn't create object. Error: " + err
      });
    }
    return status(200).json(content[Math.floor(Math.random()*content.length)]);
  })
}

router.get('/:bid', function (req, res, next) {
  console.log("req");

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
      var relation = returnRandom(relations, req.query.device);
    } else {
      res.status(404).json({
        message: 'empty'
      });
    }
  });
});

