var db = require('../database');
var book = {
  get: function(callback) {
    return db.query('select * from book_table order by id desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book_table where id=$1', [id], callback);
  },
  add: function(book, callback) {
    console.log(book);
    return db.query(
      'insert into book_table(bookname, author, isbn) values($1,$2,$3)',
      [book.bookname, book.author, book.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book_table where id=$1', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book_table set bookname=$1,author=$2, isbn=$3 where id=$4',
      [book.bookname, book.author, book.isbn, id],
      callback
    );
  },
  searchByName:function(value,callback) {
    var nameLike="%"+value+"%";
    return db.query('select * from book_table where bookname ILIKE $1 order by id desc',[nameLike], callback);
  },
  searchByAuthor:function(value,callback) {
    var authorLike="%"+value+"%";
    return db.query('select * from book_table where author ILIKE $1 order by id desc',[authorLike], callback);
  }
};
module.exports = book;