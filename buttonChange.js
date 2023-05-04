document.getElementById("button_insert").onclick = () => {
  var sql =
    "insert into animal_detail(animal_id, growth_generation, birth_date, growth_weight, growth_health, growth_date) values (1, 1, '1998-12-24', 52, 2, 26);";
};
document.getElementById("button_update").onclick = () => {
  var sql = "update animal_detail set growth_health = 5 where animal_id = 1;";
};
document.getElementById("button_delete").onclick = () => {
  var sql = "delete from animal_detail where animal_id = 1;";
};
document.getElementById("button_select").onclick = () => {
  var sql = "select * from animal_detail";
};
export {sql};