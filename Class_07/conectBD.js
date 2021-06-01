const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 's%u#S4z#i396J#$gvnX#m3FGx', {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then(function() {
  console.log("connection success");
}).catch(function(error) {
  console.log("connection failure");
});