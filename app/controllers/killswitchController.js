var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Content = mongoose.model('Content');
_ = require('underscore');

module.exports = function (app) {
  app.use('/killswitch', router);
};

router.get('/', function (req, res, next) {
  var conditions = { },
    update = {  $set: { deviceIds: [] }}
    , options = { multi: true };

  Content.update(conditions, update, options, function(err, numAffected){
    if (err) {
      return res.status(500).json({
        message: "couldn't update object. Error: " + err
      });
    }

    res.status(200).json({
      numAffected: numAffected
    });
  });
});

