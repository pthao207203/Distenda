const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const messageSchema = new mongoose.Schema({
  sender: {
    userId: {
      type: String,  
      required: true
    },
    senderRole: {
      type: String,
      enum: ['user', 'admin'],   
    }
  },
  receiver: {
    userId: {
      type: String, 
      required: true
    },
    receiverRole: {
      type: String,
      enum: ['user', 'admin'],   
      required: true
    }
  },
  content: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  file: {
    fileName: { type: String, default: '' },
    fileUrl: { type: String, default: '' }
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deletedBy: {
    userId: {
      type: String,  
    },
    deletedAt: Date
  }
});

const Message = mongoose.model("Message", messageSchema, "Message");

module.exports = Message;

