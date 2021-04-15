// 导入mysql模块
var mysql = require('mysql')
// 创建一个数据库连接池
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',//账号
    password: '123456abc',//密码
    database: 'vue2008',//数据库名
    multipleStatements: true // 支持执行多条 sql 语句
});
connection.connect();//连接
// 查询
connection.query('select user_id,user_name,email from p_users limit 10',function(error,result){
    //获取查询结果
    console.log(result[0].username)
})
connection.end();

