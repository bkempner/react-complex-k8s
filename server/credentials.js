module.exports = {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  }
}
