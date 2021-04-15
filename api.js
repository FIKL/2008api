const express = require('express')  //引入模块
const mysql = require('mysql')
const app = express()               //调用express
const port = 8080                   //服务运行端口
app.get('/user',function (req,res){
    res.send("欢迎你来到用户接口")
})
app.get('/list',(req, res) =>{
    //创建一个数据库连接参数
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',//账号
        password: '123456abc',//密码
        database: 'vue2008',//数据库名
        multipleStatements: true // 支持执行多条 sql 语句
    });
    connection.connect();//创建连接

    // 执行 query
    connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
        // console.log(error)
        // 获取查询的结果
        // console.log(results)
        res.send(JSON.stringify(results))
    });
    connection.end();
})
app.get('/', (req, res) => {
    const list=[{
        userid:1001,
        name:"zhangsan",
        age:11,

    },
    {
        userid:1002,
        name:"lisi",
        age:22
    },
    {
        userid:1003,
        name:"wangwu",
        age:33
    }
    ]

    //将数组传为json

    res.send(JSON.stringify(list))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})