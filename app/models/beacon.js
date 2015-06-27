// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  shortid = require('shortid');

var BeaconSchema = new Schema({
  _id: {
    type: String,
    unique: true
  },
  name: String,
  loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
    //http://blog.robertonodi.me/how-to-use-geospatial-indexing-in-mongodb-using-express-and-mongoose/
  }
});

mongoose.model('Beacon', BeaconSchema);

