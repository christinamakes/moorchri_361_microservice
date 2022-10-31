require('dotenv').config()
const config = {
db: {
  host: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE
}};
module.exports = config
