var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
Content = mongoose.model('Content');
_ = require('underscore');

module.exports = function (app) {
	app.use('/track', router);
};

router.get('/:deviceId/:contentId', function (req, res, next) {
	console.log("" + req.params.contentId + ":" + req.params.deviceId )
	Content.update({ _id: req.params.contentId }, { $push: { deviceIds: req.params.deviceId }},{upsert:true}, function (err, content) {
		if(err) {

			res.status(404);

		} else {
			console.log("Successfully added");
			res.status(200).json(content);

		}
	});
});

