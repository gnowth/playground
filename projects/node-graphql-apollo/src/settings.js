module.exports = {
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
};

console.log('exports', module.exports);