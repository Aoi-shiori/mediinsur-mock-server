////文件说明：业务定义并调用具体的业务
// let Mock = require('mockjs');
//引用工具函数
// const T = require('./utils')
const menzhen = require('../businss/menzhen')
// const zhuyuan =require('/businss/zhuyuan')
const f_ReadICCard =require('../businss/f_ReadICCard')



Tf_ReadICCard = function (res,a) {
    console.log("Tf_ReadICCard")
    console.log('入参接收',res,a)
    return f_ReadICCard.f_ReadICCard(res);
}

T9021 = function (res,a) {
    console.log("9021")
    console.log('入参接收',res,a)
    return menzhen.T9021(res);
}


T9022 = function () {
   console.log("9022")
    return true;
}


T9024 = function(){
    return menzhen.T9024();
}


T9025 = function(){
    return true;
}

module.exports=
{
    Tf_ReadICCard,
    T9021,
    T9022,
    T9024,
    T9025
}