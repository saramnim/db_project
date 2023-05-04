var mysql = require("mysql2");
const express = require("express");
const path = require("path");
const app = express();

app.set('port',process.env.PORT || 3000);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello_zoo",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "create table animal_detail(animal_id int primary key, growth_generation int, birth_date date, growth_weight int, growth_health int, growth_date int);"
  // var sql = "drop table animal_detail;"
  // var sql = "insert into animal_detail(animal_id, growth_generation, birth_date, growth_weight, growth_health, growth_date) values (1, 1, '1998-12-24', 52, 2, 26);";
  // var sql = "delete from animal_detail where animal_id = 1;"
  // var sql = "update animal_detail set growth_health = 5 where animal_id = 1;"
  var sql = "select * from animal_detail";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});