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
    if ( content && content.title) {
      res.render('page', {
        title: content.title,
        content: content
      });
    }else{
      res.status(404).json({
        message: "Error"
      });
    }
  });
});





