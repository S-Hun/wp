const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection("mongodb://localhost:27017/posts"); 
autoIncrement.initialize(connection);

const schema = new mongoose.Schema({
  seq: Number,
  subject: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  text: String,
}, {
  timestamps: { createdAt: 'uploadedAt' }
});

schema.plugin(autoIncrement.plugin,{ 
  model : 'Post', 
  field : 'seq',
  startAt : 1, //시작 
  increment : 1 // 증가 
});


module.exports = mongoose.model('Post', schema);
