// let express = require('express');  //引入express
// let Mock = require('mockjs');  //引入mock
// let app =express();  //实例化express
// let bodyParser =require('body-parser');
//
//
// // 允许跨域
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     // 此处根据前端请求携带的请求头进行配置
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     // 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
//     // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
//
//     next();
// });
//
// app.use('/test/01',function (req,res) {
//         res.json(Mock.mock({
//             'status':200,
//             'data|3-9':[{
//                 'id|1-20':1,
//                 'name|1':['张山','李四','李狗蛋','王二狗','铁蛋'],
//                 'mockContent|1': ['省市医保', '本地医保', '省内异地医保', '省外异地医保', '市级医保'],
//                 'mockAction|1': ['下载', '试听', '喜欢']
//             }]
//         }))
// })
//
//
// // 获取用户信息
// app.get('/user/info', function (req, res) {
//     res.json(Mock.mock(loginAPI.getUserInfo(req)))
// })
//
//
// app.listen('8999',()=>{
//     console.log('监听端口 8999')
// })
