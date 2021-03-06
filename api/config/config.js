require('dotenv').config()

const config = {
  "development": {
    "database": "cocinapp",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "password":"123"
  },
  "test": {
    "database": "cocinaapp_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": 'HEROKU_POSTGRESQL_JADE_URL',
   }
}
module.exports = config;
