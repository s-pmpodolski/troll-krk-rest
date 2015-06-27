var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Content = mongoose.model('Content');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/:id', function (req, res, next) {
  Content.findOne({_id:  req.getParameter('id')}, function (err, content) {
    if (err) return next(err);
    res.status(200).json(content);
  });
});

var isBad = function (obj) {
  return  !obj || _.isEmpty(obj);
}

router.post('/', function (req, res, next) {
  var title = req.body.title,
    detail = req.body.detail,
    date_expire= req.body.date_expire,
    date_start= req.body.date_start,
    type= req.body.type,
    licence = req.body.licence;


  if(  isBad( title)  ) {
    res.status(403).json({
      message: "Empty undefined name"
    });
  }

  if( isBad( detail)   ) {
    res.status(403).json({
      message: "Empty detail"
    });
  }

  if(isBad(type) ) {
    res.status(403).json({
      message: "Empty type"
    });
  }


  var content  = new Content({
    title: title,
    type: type,
    detail : detail
  });
  if(date_expire) {
    content.date_expire = date_expire;
  }
  if(date_start) {
    content.date_start = date_start;
  }

  if(licence) {
    content.licence = licence;
  }
  content.save(function (err, beacon) {
    if (err) {
      res.status(500).json({
        message: "Couldn't create Content. Error: " + err
      });
    }
    res.status(200).json({
      message: "ok!",
      id: content._id
    });
  });
});


