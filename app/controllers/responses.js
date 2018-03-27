'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Response = models.response
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Response.find()
    .then(responses => res.json({
      responses: responses.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    response: req.response.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const response = Object.assign(req.body.response, {
    _owner: req.user._id
  })

  let savedResponse
  let foundSurvey
  // creating response to survey instance
  Response.create(response)
    .then(response => {
      savedResponse = response
      return response
    })
    .then(() => {
      Survey.findById(savedResponse.surveyId)
        .then(survey => {
          foundSurvey = survey
          foundSurvey.responses.push(savedResponse)
          console.log(foundSurvey)
        })
    })
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body.response._owner  // disallow owner reassignment.

  req.response.update(req.body.response)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.response.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Response), only: ['show'] },
  { method: setModel(Response, { forUser: true }), only: ['update', 'destroy'] }
] })
