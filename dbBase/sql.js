const sql = {
  // user
  loginSql: 'select * from account where openid = ?',
  registerSql: 'insert into account (openid, avatar, nickname) values (?,?,?)',
  updateUserSql: 'update account set nickname=?, avatar=? where openid = ?',
  getNoteListSql: 'select * from note_list where openid = ?',
  getNoteListAllSql: 'select * from (select * from note_list where type=? order by noteTime desc limit ?,?)as a left join(select * from account )as b on a.openid=b.openid ',
  getNoteListPrivateSql: 'select * from (select * from note_list where type=? and openid=? order by noteTime desc limit ?,?)as a left join(select * from account )as b on a.openid=b.openid ',
  addNoteSql: 'insert into note_list (openid, content, type, images, editOpenid, color) values (?,?,?,?,?,?)',
  deleteNoteSql: 'delete from note_list where noteId=?',
  deleteNoteCollectSql: 'delete from collect_note where noteId=?',
  collectNoteSql: 'insert into collect_note (noteId, openid) values (?,?)',
  cancenCollectNoteSql: 'delete from collect_note where collectId = ?',
  getFollowSql: 'select * from (select * from relation where openid=?)as a left join account on a.openid=account.openid',
  getFensSql: 'select * from (select * from relation where friendid=?)as a left join account on a.openid=account.openid',
  getRecommendSql: 'select * from (select openid as id from relation where openid=?)as a left join account on a.id<>account.openid order by rand() limit 3',
  addFollowSql: 'insert into relation (openid, friendid) values (?,?)',
  cancelFollowSql: 'delete from relation where openid=? and friendid=?'
}
module.exports = sql