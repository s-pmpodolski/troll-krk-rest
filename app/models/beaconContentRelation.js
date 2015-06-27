// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  shortid = require('shortid');

var BeaconContentRelationSchema = new Schema({
  beacon: {
    type: Schema.ObjectId, ref: 'Beacon', index: true, required: true
  },
  content: {
    type: Schema.ObjectId, ref: 'ContentSchema', index: true, required: true
  }
});

mongoose.model('BeaconContentRelation', BeaconContentRelationSchema);

