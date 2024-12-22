const { ref, required, string } = require('joi');
const mongoose = require('mongoose');
const shortid = require('shortid')



const TaskSchema = new mongoose.Schema(
  {
    _id: {
      type: String, 
      default: shortid.generate
    },

    user_id: { 
      type: String, 
      required: true, 
      ref: 'user'

    },
    text: { 
      type: String, 
      required: true 
    },

    status: {
      type: String, 
      required: true, 
      default: "pending", 
      enum: ['pending', 'completed', 'deleted']
    },
  },
    { timestamps: true}
)


const TaskModel = mongoose.model('task', TaskSchema);

module.exports = TaskModel;