const mysql = require('mysql')
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'new_password',
  database:'lws_note'
})
module.exports = conn
