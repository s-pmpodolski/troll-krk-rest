// Example model

var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 shortid = require('shortid');


var ContentSchema = new Schema({
  title: String,
  detail: String,
  type: String,
  image : String,
  date_expire: {type: Date, default: new Date().getTime() + (30 * 24 * 60 * 60 *1000) },
  date_start: {type: Date, default:  Date.now},
  licence  : String,
  author: String,
  source: String,
  _id: {
    type: String,
    unique: true,
    'default': shortid.generate
  }
});


mongoose.model('Content', ContentSchema);

