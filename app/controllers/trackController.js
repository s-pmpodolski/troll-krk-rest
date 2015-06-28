var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
Content = mongoose.model('Content');
_ = require('underscore');

module.exports = function (app) {
	app.use('/track', router);
};

router.get('/:deviceId/:contentId', function (req, res, next) {
	Content.update({ _id: req.params.contentId }, { $push: { deviceIds: req.params.deviceId } })
});





