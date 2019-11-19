////文件说明：业务定义并调用具体的业务
// let Mock = require('mockjs');
//引用工具函数
// const T = require('./utils')
const menzhen = require('../businss/Province/menzhen')
// const zhuyuan =require('/businss/zhuyuan')
const f_ReadICCard =require('../businss/f_ReadICCard')
//引用download
const download = require('../businss/download')
const city = require('../businss/city/menzhen')
const mobile_menzhen = require('../businss/ydyb/menzhen')




Tf_ReadICCard = function (req,a) {
    console.log("Tf_ReadICCard")
    console.log('入参接收',res,a)
    return f_ReadICCard.f_ReadICCard(req);
}

T9201 = function (req,a) {
    console.log("请求接口9201")
    console.log('入参接收',req,a)
    // return menzhen.T9201(req);
    let res =menzhen.T9201(req)

    return res
}


T9202 = function (req,a) {
   console.log("分发T9022")
    return menzhen.T9202(req);
}

T9203 = function (req,a) {
   console.log("分发T9023")
    return menzhen.T9203(req);
}


T9024 = function(req,a){
    console.log("分发T9024")
    return menzhen.T9024(req);
}


T9025 = function(req,a){
    console.log("分发T9025")
    return true;
}

T9247 = function(req,a){
    console.log("分发T9247")
    console.log("请求接口9274")
    return menzhen.T9247(req);
}


//定点医疗结构下载
T75 = function(req){
    console.log("分发T75")
    console.log("接收到的入参为："+req)
    return download.T75(req)
}

//中心字典下载
T77 = function(req){
    console.log("分发T77")
    console.log("接收到的入参为："+req)
    return download.T77(req)
}

//疾病下载
T78 = function(req){
    console.log("分发T77")
    console.log("接收到的入参为："+req)
    return download.T78(req)
}

//疾病下载
T54 = function(req){
    console.log("分发T54")
    // console.log("接收到的入参为："+req)
    return download.T54(req)
}

//市医保：获取参保人信息
T22 = function(req){
    console.log("分发T22")
    console.log("接收到的入参为："+req)
    return city.T22(req)
}


//市医保：门诊/挂号预结算
T27 = function(req){
    console.log("分发T27")
    console.log("接收到的入参为："+req)
    return city.T27(req)
}

//市医保：门诊/挂号结算
T28 = function(req){
    console.log("分发T28")
    console.log("接收到的入参为："+req)
    return city.T28(req)
}

//市医保：交易确认
T49 = function(req){
    console.log("分发T49")
    console.log("分发接收到的入参为："+req)
    return city.T49(req)
}

//移动医保-获取参保人基本信息
T8001 = function(req){
    console.log("T8001")
    console.log("接收到的入参为："+req)
    return mobile_menzhen.T8001(req)
}

//移动医保-医生处方上传
T8002 = function(req){
    console.log("T8002")
    console.log("接收到的入参为："+req)
    return mobile_menzhen.T8002(req)
}


//移动医保-获取处方支付结果
T8004 = function(req){
    console.log("T8004")
    console.log("接收到的入参为："+req)
    return  mobile_menzhen.T8004(req)
}

//移动医保-退费
T8005 = function(req){
    console.log("T8005")
    console.log("接收到的入参为："+req)
    return mobile_menzhen.T8005(req)
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
    T22,
    T27,
    T28,
    T49,
    T75,
    T77,
    T78,
    T54,
    T8001,
    T8002,
    T8004,
    T8005

}