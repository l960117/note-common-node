const sql = {
  // user
  loginSql: 'select * from account where openid = ?',
  registerSql: 'insert into account (openid) values (?)',
  getNoteListSql: 'select * from note_list where openid = ?',
  getNoteListAllSql: 'select * from note_list where type=? order by noteTime desc limit ?, ?',
  getNoteListPrivateSql: 'select * from note_list where type=? and openid=? order by noteTime desc limit ?, ?',
  addNoteSql: 'insert into note_list (openid, content, type, nickname) values (?,?,?,?)',
  updateImagesSql: 'update note_list set images=? where noteId = ?',
  deleteNoteSql: 'delete from note_list where noteId=?',
  deleteNoteCollectSql: 'delete from collect_note where noteId=?',
  collectNoteSql: 'insert into collect_note (noteId, openid) values (?,?)',
  cancenCollectNoteSql: 'delete from collect_note where collectId = ?'
}
module.exports = sql