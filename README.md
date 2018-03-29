# Bullish-API

This API contains user, survey, and response resources that one can fully CRUD on.

## Getting Started

The prompt we were working to create: Make an app that can be used to create custom surveys and collect the responses on a dashboard for that particular survey.

To get started with the API please fork and clone this repository. This application is deployed with Heroku.

### Wireframes & User Stories

* https://imgur.com/a/dzuLD


### Development Process
Peer programming! We started using CURL scripts to fully CRUD on users and surveys. Once surveys were working we moved on to responses. Responses needed to be a separate entity from surveys because responses needed to be updated by people who didn't create the survey. If responses were simply a property of surveys, then they wouldn't be editable, or the entire survey would be editable.

We used the git workflow demonstrated during class. Never working on master, and working on development as little as possible, we made feature branches off of the development branch and then would submit a PR and merge them into development. Only during the final stages of development did we start merging the development branch into the master branch.

We conducted daily standups each morning to talk about our goals for the day and if we were stuck with any blocks. Additionally the team would regroup at the end of the day (and sometimes during lunch) to check in on each others progress and ensure we were all on the same page.

## Unsolved Issues/Future Iterations

* We want to set Survey.responses back to an empty array when the survey gets updated, so survey creators can't troll people who've responded by changing the survey after people have voted. But for right now, this is a feature. The secret name of this project is Troll Poll

## Deployment

This application is deployed and hosted for free by [Heroku] https://powerful-earth-74392.herokuapp.com
[API Respository] https://github.com/Team-Bullish/bullish-api

## Client Link
[Survey Client Repo](https://github.com/Team-Bullish/bullish-client-)
[Client Application Deployed Site](https://team-bullish.github.io/bullish-client-/)

## Built With

* JS/Node/Express
* Heroku
* GA Rails Express API template

## Contributing

Please message me directly through github if you want to submit pull a pull request.

## Authors

* **Louis Bookoff** - *Initial work* - [Personal Repo](https://github.com/louisbookoff)
* **Jesse Adams-Lukowsky** - *Initial work* - [Personal Repo](https://github.com/jal90)
* **Malcolm Thomas** - *Initial work* - [Personal Repo](https://github.com/mxavier91)
* **Jean Mompremier** - *Initial work* - [Personal Repo](https://github.com/jeangardy509)

## Special Thanks

* Shoutout to Mr. Crockett, the kiffest guy alive
