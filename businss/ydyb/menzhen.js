//移动医保门诊相关业务
let Mock = require('mockjs');
const util = require('../../public/utils')

var backData = Mock.mock({
    'patientInfo_scan':'$$0~~330499~330400D156000005000496AAD949457C%%0102200167%%周海琪%%1%%01%%19750323%%' +
        '330419197503234811%%企业%%浙江新安国际医院有限公司%%330411%%秀洲区%%12%%000%%0%%0%%0%%%%0%%0%%0%%' +
        '479.42%%0%%0%%15%%0%%0%%9%%0%%0%%%%20%%0%%1~A13026130~330400D156000005000496AAD949457C~33000001016' +
        '23530259878248448$$',
    'prescription_upload':'$$0~$$',
    'pay_result':'$$0~~2~20190919091825360|170157203|624172856640536576|2019-09-09 09:12:42|105.55|0.0|0.0|0.0|105.55|' +
        '105.55|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|105.55|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|' +
        '~363245173345|1|10|75.0|0.0|0.0|0.0|0.0|75.0|^905906212487|1|01|30.55|0.0|0.0|0.0|0.0|30.55|$$',
    'refund':'$$0~~20190919091825360|170157206|624230479788244992|2019-09-01 13:01:15|-105.55|0.0|0.0|0.0' +
        '|-105.55|-105.55|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|0.0|-105.55|0.0|0.0' +
        '|0.0|0.0|0.0|0.0|0.0|0.0|0^$$'
})

//移动医保-获取参保人基本信息
T8001 = function T8001(para) {
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    var cardType = util.isContain(para[0],["01",'02','03'])
    if(para != ""){
        if(cardType && para[1] != ""){
            switch (para[0]) {
                case '01':
                    return "读医保卡"
                case '02':
                    return  backData['patientInfo_scan']
                case '03':
                    return "支付令牌读卡"
            }
        }
        else {
            return '传入参数有误，请检查传参！'
        }
    }
    else {
        return "参数不能为空！"
    }
}


//医生处方上传
T8002 = function T8002(para){
    para = util.ParaToArry(para.trim())
   if(para!= ""){
       if(para.length <= 23){
           return backData['prescription_upload']
       }
       else {
           return "传入参数有误，请检查传参！"
       }
   }
   else {
       return "参数不能为空!"
   }
}

//获取处方支付结果
T8004 = function T8004(para){
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    if(para[0] != "" && para[1] != ""){
        if(para[0].length <= 20 && para[1].length <= 9){
            return backData['pay_result']
        }
        else {
            return "传入参数有误，请检查传参！"
        }
    }
    else {
        return "参数不能为空！"
    }
}

//退费
T8005 = function T8005(para){
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    var cardType = util.isContain(para[0],["01",'02','03'])
    if(para[0] != "" && para[1] != "" && para[2] != ""){
        if(cardType){
            return backData['refund']
        }
        else{
            return "传入参数有误，请检查传参！"
        }
    }
    else {
        return "参数不能为空！"
    }
}

module.exports = {
    T8001,
    T8002,
    T8004,
    T8005
}