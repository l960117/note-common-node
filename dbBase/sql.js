const sql = {
  // user
  loginSql: 'select * from account where openid = ?',
  registerSql: 'insert into account (openid, avatar, nickname) values (?,?,?)',
  updateUserSql: 'update account set nickname=?, avatar=? where openid = ?',
  getNoteListSql: 'select * from note_list where openid = ? order by noteTime DESC',
  getPublicNoteListSql: 'select * from (select * from note_list where type="public" and openid=? order by noteTime DESC limit ?,?)as a left join(select * from account )as b on a.openid=b.openid',
  getNoteListAllSql: 'select * from (select * from note_list where type=? order by noteTime DESC limit ?,?)as a left join(select * from account )as b on a.openid=b.openid',
  getNoteListPrivateSql: 'select * from (select * from note_list where type=? and openid=? order by noteTime DESC limit ?,?)as a left join(select * from account )as b on a.openid=b.openid',
  addNoteSql: 'insert into note_list (openid, content, type, images, editOpenid, color) values (?,?,?,?,?,?)',
  deleteNoteSql: 'delete from note_list where noteId=?',
  deleteNoteCollectSql: 'delete from collect_note where noteId=?',
  collectNoteSql: 'insert into collect_note (noteId, openid) values (?,?)',
  cancenCollectNoteSql: 'delete from collect_note where collectId = ?',
  getNoteDetailSql: 'select * from (select * from note_list where noteId=?)as a left join(select * from account )as b on a.openid=b.openid',
  getFollowSql: 'select * from (select * from relation where openid=?)as a left join account on a.openid=account.openid',
  getFensSql: 'select * from (select * from relation where friendid=?)as a left join account on a.openid=account.openid',
  getRecommendSql: 'select cu.openid,cu.avatar,cu.nickname,cm.friendid from account as cu left join (select friendid from relation where openid=?) as cm on cu.openid = cm.friendid where cm.friendid is NULL and cu.openid <> ? order by rand() limit 3',
  addFollowSql: 'insert into relation (openid, friendid) values (?,?)',
  cancelFollowSql: 'delete from relation where openid=? and friendid=?',
  getNoteInfoSql: 'select count(*) from note_list where openid=?',
  getUserInfo: 'select * from account where openid=?'
}
module.exports = sql