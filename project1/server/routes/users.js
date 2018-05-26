var express = require('express');
var router = express.Router();

var user=require("../ADQU.js");

/* GET users listing. */
router.get('/user', function(req, res, next) {
  user.addUserAction(req,res,next);
});
/**
 * 查询列表页
 */
router.get("/search",function(req,res,next){
  db.query("select * from user_info",function(err,rows){
      if(err){
          res.render("user",{title:"用户列表",datas:[]});
      }else {
          res.render("user",{title:"用户列表",datas:rows});
      }
  });
});
router.post("/search",function(req,res,next){
  var name = req.body.s_name;
  var password = req.body.s_password;
  var sql = "select * from user_info";
  if(name){
      sql += " where name = '"+ name +"'";
  }
  //if(age){
  //    sql += " and age = '" + age + "'";
  //}

  sql.replace("and","where");
  db.query(sql,function(err,rows){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render("user",{title:"用户列表",datas:rows,s_name:name,s_password:password});
      }
  });
})
module.exports = router;
