'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  selected: {
    type: Number,
    min: 0,
    max: 2,
    required: true
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

// responseSchema.virtual('length').get(function length () {
//   return this.text.length
// })

const Response = mongoose.model('Response', responseSchema)

module.exports = Response
