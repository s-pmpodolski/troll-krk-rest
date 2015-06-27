var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Content = mongoose.model('Content');
_ = require('underscore');

module.exports = function (app) {
  app.use('/page', router);
};

router.get('/:id', function (req, res, next) {
  Content.findOne({_id:  req.params.id}, function (err, content) {
    if (err) return next(err);
    res.render('index', {
      title: content.title,
      content: content
    });
  });
});




