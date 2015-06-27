// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ContentSchema = new Schema({
  title: String,
  detail: String,
  type: String,
  date_expire: {type: Date, default: Date.now},
  date_start: {type: Date, default:  new Date().getTime() + (30 * 24 * 60 * 60) }
});


mongoose.model('Content', ContentSchema);

