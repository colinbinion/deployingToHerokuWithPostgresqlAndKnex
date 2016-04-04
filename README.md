# Deploying to Heroku with Postgresql and Knex

# Slides: http://slides.com/akyunaakish/deploying#/

## Fork and clone

* Install dependencies:

```
$ cd deployingToHerokuWithPostgresqlAndKnex
$ npm install
$ createdb knex-heroku
$ touch .env
```

* Run the migration and seed files locally:

```
$ knex migrate:latest --env production
$ knex seed:run --env production

```
* Confirm thats all working by running nodemon and checking if 3 amphibians are rendered at localhost:3000

### Setting up for Heroku

* Require the dotenv module at the top of your knexfile.js

```
require('dotenv').load();

module.exports = {

  production: {
    client: 'postgresql',
    connection: 'postgres://localhost/knex-heroku',
    pool : {
      min: 2,
      max: 10
    }
  }
};
```

* Now create a .env file and then add the connection from your knexfile.js to your .env file as an environment variable called DATABASE_URL

```
//in the .env file
DATABASE_URL=postgres://localhost/knex-heroku
```

* Now you'll need to change your connection in your knexfile.js to use the environment variable

```
//knexfile.js
require('dotenv').load();

module.exports = {

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool : {
      min: 2,
      max: 10
    }
  }
};

```

* Good, now your database connection will be able to use either your local environment variable or the upcoming heroku database environment variable

* Create a heroku app in the root directory of this exercise

```
$ heroku create
```

* Setup a remote heroku postgresql database with the free hobby-dev package

```
$ heroku addons:create heroku-postgresql:hobby-dev
```

* Push up your code to heroku

```
$ git add -A
$ git commit -m"ready for heroku"
$ git push heroku master
```

* Now run your migrations and your seeds via heroku

```
$ heroku run knex migrate:latest
$ heroku run knex seed:run
```

* Check your results

```
$ heroku open
```

* Congrats you have a remote heroku database !
