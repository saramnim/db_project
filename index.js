var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello_zoo",
});

// function survivalCalc(){
//     var today = new Date(); //오늘 날짜 받기
//     var both_year = parseInt(document.getElementById("year").value); //input 으로 태어난 해 받기
//     var both_month = parseInt(document.getElementById("month").value); //input 으로 태어난 월 받기
//     var both_day = parseInt(document.getElementById("day").value); //input 으로 태어난 날 받기
//     var myBoth = new Date(); //myBoth도 날짜를 저장할 변수이다.
//     myBoth.setFullYear(both_year, both_month, both_day);//myDate에 input으로 받은 생년월일 저장
//     today_Mili = Date.parse(today); //today변수를 파싱한다.
//     both_Mili = Date.parse(myBoth); //myboth 변수를 파싱한다.
//     survival_Mili = today_Mili - both_Mili; // 두 변수의 차를 구한다.
//     survival_Day = survival_Mili/1000/60/60/24;// 두 차를 다시 일수로 구하기 위해 1000/60/60/24를 나눠준다.
// }

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "create table animal_detail(animal_id int primary key, growth_generation int, birth_date date, growth_weight int, growth_health int, growth_date int);"
  // var sql = "drop table animal_detail;"
  var sql =
    "insert into animal_detail(animal_id, growth_generation, birth_date, growth_weight, growth_health, growth_date) values (1, 1, '1998-12-24', 52, 2, 26);";
  // var sql = "delete from animal_detail where animal_id = 1;"
  // var sql = "update animal_detail set growth_health = 5 where animal_id = 1;"
  // var sql = "select * from animal_detail";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
