var express = require("express");
var router = express.Router();
var db = require("../database/connect-database");
router.get('',(req,res)=>{
  var sql = `SELECT * FROM users`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    return res.json(result);
  });
})

router.post("/register", (req, res) => {
  console.log(req.body);
  // const {
  //   firstName,
  //   lastName,
  //   username,
  //   password,
  //   userType,
  //   npi,
  //   specialty,
  //   city,
  // } = req.body;
  // var sql = `INSERT INTO users(firstName, lastName, username, password, userType, npi, specialty, city) VALUES ('${firstName}','${lastName}','${username}','${password}','${userType}','${npi}','${specialty}','${city}')`;
  // db.query(sql, function (err, result) {
  //   if (err) throw err;
  //   return res.json({ messages: "register success" });
  // });
});

router.post('/login',(req,res)=>{
  const {username,password} = req.body
  var sql = `SELECT username, password,id FROM users WHERE username='${username}' and password='${password}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result.length >0){
      return res.status(200).json({"message":'sucess',"id":`${result[0].id}`})
    }
    else{
      return res.status(400).json({"message":'error'})
    }

  });

})

router.post('/update-profile',(req,res)=>{
  console.log(req.body)
  return res.json({'image':'success'})
})

module.exports = router;
