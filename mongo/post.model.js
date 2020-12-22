const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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

module.exports = mongoose.model('Post', schema);
