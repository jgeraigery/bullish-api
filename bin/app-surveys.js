'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useMongoClient: true
})
const db = mongoose.connection

const Survey = require('../app/models/survey.js')

const done = function () { // eslint-disable-line no-unused-vars
  db.close()
}

// CRUD Actions
const create = function (title, _owner) {
  Survey.create({
    title
  })
  .then(console.log)
  .catch(console.error)
  .then(done)
}

const index = function () {
  Survey.find()
    .then(places => {
      places.forEach(place => {
        console.log(place)
      })
    })
    .catch(console.log)
    .then(done)
}

const show = function (id) {
  Survey.findById(id)
  .populate('visitor')
  .then(place => {
    console.log(place.toObject())
  })
  .catch(console.error)
  .then(done)
}

const update = function (id, field, value) {
  Survey.findById(id)
  .then(place => {
    place[field] = value
    return place
  })
  .then(place => place.save())
  .then(console.log)
  .catch(console.error)
  .then(done)
}

const destroy = function (id) {
  Survey.findById(id)
  .then(place => place.remove())
  .catch(console.error)
  .then(done)
}

db.once('open', function () {
  const command = process.argv[2]

  let field
  let id

  switch (command) {
    case 'create':
      const title = process.argv[3]
      create(title)

      break

    case `show`:
      id = process.argv[3]
      show(id)
      break

    case 'update':
      id = process.argv[3]
      field = process.argv[4]
      let value = process.argv[5]
      if (field === 'visitor') {
        value = mongoose.Types.ObjectId(value)
      }
      update(id, field, value)
      break

    case 'destroy':
      id = process.argv[3]
      destroy(id)
      break

    default:
      index()
      break
  }
})
