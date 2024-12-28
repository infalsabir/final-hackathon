const mongoose = require('mongoose');

// Define the Note schema
const noteSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,  // Title is mandatory
    },
    
    content: {
      type: String,
      required: false,  // Make content optional
    },
    createdBy: {
      type: String,
      required: false,  // Make createdBy optional
    },
   tags:{
    type : [String], default: []
   },
   isPinned: {
    type: Boolean,
    default: false
   },
   userId: {
    type: String,
    required: true
   }
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Export the model
module.exports = mongoose.model('Note', noteSchema);

