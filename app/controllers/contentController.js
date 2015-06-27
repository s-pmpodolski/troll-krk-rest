var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Content = mongoose.model('Content');
_ = require('underscore');

module.exports = function (app) {
  app.use('/content', router);
};

router.get('/:id', function (req, res, next) {
  Content.findOne({_id:  req.params.id}, function (err, content) {
    if (err) return next(err);
    res.status(200).json(content);
  });
});

var isBad = function (obj) {
  return  !obj || _.isEmpty(obj);
}

router.post('/', function (req, res, next) {
  var title = req.body.title,
    detailShort = req.body.detailShort,
    detail = req.body.detail,
    date_expire= req.body.date_expire,
    date_start= req.body.date_start,
    type= req.body.type,
    licence = req.body.licence,
    author= req.body.author,
    source = req.body.source,
    address= req.body.address,
    image =req.body.image;

  if(  isBad( title)  ) {
    res.status(403).json({
      message: "Empty undefined name"
    });
  }

  if(isBad(type)  ) {
    res.status(403).json({
      message: "Empty type"
    });
  }
  var types = ["text", "audio", "video"];
  if( types.indexOf(type)<0  ) {
    res.status(403).json({
      message: "Type should be, text, video, audio"});
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

  if(image) {
    content.image = image;
  }
  if(author) {
    content.author = author;
  }
  if(source) {
    content.source = source;
  }
  if(detailShort) {
    content.detailShort = detailShort;
  }
  if(address) {
    content.address = address;
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


