////文件说明：业务定义并调用具体的业务
// let Mock = require('mockjs');
//引用工具函数
// const T = require('./utils')
const menzhen = require('../businss/menzhen')
// const zhuyuan =require('/businss/zhuyuan')
const f_ReadICCard =require('../businss/f_ReadICCard')



Tf_ReadICCard = function (req,a) {
    console.log("Tf_ReadICCard")
    console.log('入参接收',res,a)
    return f_ReadICCard.f_ReadICCard(req);
}

T9201 = function (req,a) {
    console.log("请求接口9201")
    console.log('入参接收',req,a)
    return menzhen.T9201(req);
}


T9202 = function (req,a) {
   console.log("请求接口9202")
    return menzhen.T9202(req);
}

T9203 = function (req,a) {
   console.log("请求接口9203")
    return menzhen.T9203(req);
}


T9024 = function(req,a){
    return menzhen.T9024(req);
}


T9025 = function(req,a){
    return true;
}

T9247 = function(req,a){
    console.log("请求接口9274")
    return menzhen.T9247(req);
}

module.exports=
{
    Tf_ReadICCard,
    T9201,
    T9202,
    T9203,
    T9024,
    T9025,
    T9247,
}