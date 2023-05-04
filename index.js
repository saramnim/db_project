var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello_zoo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "create table animal_detail(animal_id int primary key, growth_generation int, birth_date date, growth_weight int, growth_health int, growth_date date);"
    var sql = "drop table animal_detail;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});