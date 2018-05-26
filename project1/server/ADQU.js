var database=require(database.js);

//user_status单一的user_status表SQL-Command
var user_status = {
    insertOne:'INSERT INTO user_info (username, password,userid) VALUES(?,?,?)',
};

/**
 * 增加用户Action
 */
function addUserAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($user_status.insertOne, 
        [param.username,param.password,param.userid], 
        function(err, result) {
            if(!err){
                result = {
                    code: 200,
                    msg:'successful'
                }; 
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}

// exports
module.exports = {
    addUserAction: addUserAction
};
