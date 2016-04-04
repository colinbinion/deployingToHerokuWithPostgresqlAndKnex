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
