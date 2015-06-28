// Example model

var mongoose = require('mongoose'),
Schema = mongoose.Schema,
shortid = require('shortid');

var BeaconContentRelationSchema = new Schema({
	beacon: {
		type: String, ref: 'Beacon', index: true, required: true
	},
	content: {
		type: String, ref: 'ContentSchema', index: true, required: true
	}
});

mongoose.model('BeaconContentRelation', BeaconContentRelationSchema);

