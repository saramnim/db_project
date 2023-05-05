const express = require("express");
const path = require("path");
const app = express();
console.log("갑니다잇");
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))
var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello_zoo",
});

app.get("/", (req, res, next) => {
    next();
  },
  (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "/public/index.html"));
    } catch (err) {
      console.error(err);
    }
  }
);

app.post("/start", (req, res, next) => {
  let { textInput } = req.body;
  let what = 0;
  console.log("dd");
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "";
    // var sql = "create table animal_detail(animal_id int primary key, growth_generation int, birth_date date, growth_weight int, growth_health int, growth_date int);"
    // var sql = "drop table animal_detail;"

    if (textInput === "I" || textInput === "i") {
      sql = "insert into animal_detail(animal_id, growth_generation, birth_date, growth_weight, growth_health, growth_date) values (1, 1, '1998-12-24', 52, 2, 26);"
      res.send("<script>if(!confirm('정말 넣어요?')){alert('그럼 안할게용')}else{alert('넣었슴둥')};location.href='/'</script>")
    } else if (textInput === "U" || textInput === "u") {
      sql = "update animal_detail set growth_health = 5 where animal_id = 1;"
      res.send("<script>if(!confirm('정말 바꿔요?')){alert('그럼 안할게용')}else{alert('바꿨슴둥')};location.href='/'</script>")
    } else if (textInput === "D" || textInput === "d") {
      sql = "delete from animal_detail where animal_id = 1;"
      res.send("<script>if(!confirm('정말 지워요?')){alert('그럼 안할게용')}else{alert('지웠슴둥')};location.href='/'</script>")
    } else if (textInput === "S" || textInput === "s") {
      res.send("<script>if(!confirm('정말 봐요?')){alert('그럼 안할게용')}else{alert('우짜쓰까')};location.href='/'</script>")
      console.log("s");
      sql = "select * from animal_detail;"
    } else {
      res.send("<script>alert('I || U || D || S 중에서만 골라봐유');location.href='/'</script>")
    }

    con.query(sql, function (err, result) {
      try {
        if (err) throw err;
        console.log("Table created", result);
      } catch (err) {
        console.log("쿼리 이상", err)
      }
    });
  });
  res.redirect("/");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});