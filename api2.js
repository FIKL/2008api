const express = require('express')  //引入模块
const mysql = require('mysql')
const app = express()               //调用express
const port = 8081                   //服务运行端口
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',//账号
    password: '123456abc',//密码
    database: 'vue2008',//数据库名
    multipleStatements: true // 支持执行多条 sql 语句
});
app.get('/list',function(req, res) {
    //创建一个数据库连接参数

})
    app.get('/user',function (request,responese){
        // console.log(request.query)
        let uname=request.query.name  //获取name参数
        let eamil=request.query.eamil  //获取email参数

        // 拼接sql语句
        const sql=`select * from p_users where user_name='${uname}' and email=${email}`
        // console.log(sql)
        //数据库查询用户信息
        connection.query(sql,function (err,result){
            // console.log(err)
            console.log("记录条数：",result)
            //判断是否找到记录
            if(result.length>0){
                let data={
                    error:301,
                    msg:"找到记录"
                }
                responese.send(JSON.stringify(data))
            }else{
                let data={
                    error:404,
                    msg:"没有找到记录"
                }
                responese.send(JSON.stringify(data))
            }
        })

        // respsonese.send("hello API")

        //

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})