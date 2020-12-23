var db = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var user = {
  get: function(callback) {
    return db.query('select * from user_table order by id desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user_table where id=$1', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        return db.query(
            'insert into user_table (username,password) values($1,$2)',
            [user.username, hash],
            callback
        )
      }
    );
  },
  delete: function(id, callback) {
    return db.query('delete from user_table where id=$1', [id], callback);
  },
  update: function(id,user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        return db.query(
            'update user_table set username=$1,password=$2 where id=$3',
            [user.username, hash,id],
            callback
        )
      }
    );
  },

  searchByName:function(value,callback) {
    var nameLike="%"+value+"%";
    return db.query('select * from user_table where username ILIKE $1 order by id desc',[nameLike], callback);
  }
};
module.exports = user;