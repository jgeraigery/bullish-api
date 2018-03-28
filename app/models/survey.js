'use strict'

const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  optionOne: {
    type: String,
    required: true
  },
  optionTwo: {
    type: String,
    required: true
  },
  responses: [
    // if we want to pass in ResponseIds, we'll need to have this ref Object
    // but if we just want to pass in 1s and 0s (the response selections) then
    // responses should be of type Number, as seen above
    // {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Response'
  // }
  ],
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

// surveySchema.virtual('length').get(function length () {
//   return this.title.length
// })

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
