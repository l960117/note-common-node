const sql = {
  // user
  loginSql: 'select * from account where openid = ?',
  registerSql: 'insert into account (openid) values (?)'
}
module.exports = sql