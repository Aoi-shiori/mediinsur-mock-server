const util = require('../../public/utils')

var backData = {
    'inHospital_file_create':'$$0~~~~~227268332$$',
    'inHospital_fee_charge':'$$0~~~~~0~$$',
    'inHospital_pre_pay':'$$0~~~~~20191118 081657~7595.62%%767.4%%7.71%%6820.51%%0%%800%%767.4%%1710.79%%2478.19%%5117.43%%0%%0%%5117' +
        '.43%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0~06%%先自费费用%%767.4%%0%%0%%0%%767.4%%07%%乙类药' +
        '品自负%%7.71%%0%%0%%7.71%%0%%11%%起付线%%800%%0%%0%%800%%0%%20%%统筹段%%6020.51%%5117.43%%.85%%903.08%%0$$',
    'inHospital_final_pay':'$$0~~~~~20191118 110639~1329.76%%0%%63.35%%1266.41%%0%%0%%0%%316.63%%316.63%%1013.13%%0%%0' +
        '%%1013.13%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%1053.44%%0%%0%%0%%0~07%%乙类药品自负%%63.35%%0%%0%%63.35%%0%%' +
        '20%%统筹段%%1266.41%%1013.13%%.8%%253.28%%0~100%%西药费%%1267%%0%%63.35%%013%%诊疗费%%22%%0%%0%%010%%材料费%%.36' +
        '%%0%%0%%002%%检查费%%2%%0%%0%%011%%护理费%%26%%0%%0%%001%%床位费%%10%%0%%0%%014%%注射费%%2.4%%0%%0%%004%%化验费%%' +
        '0%%0%%0%%200%%中成药费%%0%%0%%0%%300%%中草药费%%0%%0%%0%%009%%麻醉费%%0%%0%%0%%006%%输血费%%0%%0%%0%%099%%其他费%%' +
        '0%%0%%0%%012%%挂号费%%0%%0%%0%%005%%治疗费%%0%%0%%0%%400%%工伤器具%%0%%0%%0%%007%%输氧费%%0%%0%%0%%008%%手术费%%0%%' +
        '0%%0%%003%%放射费%%0%%0%%0~227424807$$',
    'outHospital_refund':'$$0~~~~~~227466031~20191118 105441~-7008.35%%-133.5%%-70.64%%-6804.21%%0%%0%%-133.5%%-1431.48%%-1564.98%%-5443.37%%' +
        '0%%0%%-5443.37%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0%%0~06%%先自费费用%%-133.5%%0%%0%%0%%-133.5%%' +
        '07%%乙类药品自负%%-70.64%%0%%0%%-70.64%%0%%20%%统筹段%%-6804.21%%-5443.37%%.8%%-1360.84%%0$$',
    'inHospital_info_change':'$$0~~~~$$',
    'inHospital_cancel':'$$0~~~~$$'

}

//住院登记/家庭病床建床
T32 = function T32(para) {
    para = util.ParaToArry(para)
    if(para[4] != '' && para[6] != '' && para[13] != '' && para[14] != '' && para[15] != '' && para[17] != ''){
        var inHospital_type = util.isContain(para[15], ['1','2','3','4'])
        var transaction_type = util.isContain(para[14], ['21','22','44','52'])
        if(inHospital_type && transaction_type){
            return backData['inHospital_file_create']
        }
        else {
            return "传入参数类型错误！"
        }
    }
    else {
        return "必传参数不能为空！"
    }
}


//住院费用记账
T33 = function T33(para){
    para = util.ParaToArry(para)
    if(para.length <= 8){
        if(para[4] != '' && para[5] != '' && para[6] != '' && para[7] != ''){
            return backData['inHospital_fee_charge']
        }
        else {
            return "必传参数不能为空！"
        }
    }
   else{
       return "传入参数位数错误！"
    }
}


//住院预结算
T34 = function T34(para){
    para = util.ParaToArry(para)
    var cardType = util.isContain(para[0], ['0','1'])
    if(para.length <= 7){
        if(para[0] != '' && para[4] != '' && para[5] != '' && para[6] != ''){
            if(cardType){
                return backData['inHospital_pre_pay']
            }
            else {
                return "卡类型传参错误！"
            }
        }
        else {
            return "必传参数不能为空!"
        }
    }
    else {
        return "传入参数位数错误！"
    }
}


//出院结算
T36 = function T36(para){
    para = util.ParaToArry(para)
    var cardType = util.isContain(para[0], ['0','1'])
    if(para.length <= 8){
        if(para[0] != '' && para[4] != '' && para[5] != '' && para[6] != ''){
            if(cardType){
                return backData['inHospital_final_pay']
            }
            else {
                return "卡类型传参错误！"
            }
        }
        else {
            return "必传参数不能为空!"
        }
    }
    else {
        return "传入参数位数错误！"
    }
}


//出院退费
T37 = function T37(para){
    para = util.ParaToArry(para)
    var cardType = util.isContain(para[0], ['0','1'])
    if(para.length <= 7){
        if(para[0] != '' && para[4] != '' && para[5] != ''){
            if(cardType){
                return backData['outHospital_refund']
            }
            else {
                return "卡类型传参错误！"
            }
        }
        else {
            return "必传参数不能为空!"
        }
    }
    else {
        return "传入参数位数错误！"
    }
}

//住院信息变动
T38 = function T38(para){
    para = util.ParaToArry(para)
    var cardType = util.isContain(para[0], ['0','1'])
    var changeType = util.isContain(para[6], ['1','2'])
    if(para.length <= 19){
        if(para[0] != '' && para[4] != '' && para[5] != '' && para[6] != '' && para[14] != ''){
            if(cardType && changeType){
                return backData['inHospital_info_change']
            }
            else {
                return "卡类型或者变更类型传参错误！"
            }
        }
        else {
            return "必传参数不能为空!"
        }
    }
    else {
        return "传入参数位数错误！"
    }
}


//取消住院登记/医保转自费
T40 = function T40(para){
    para = util.ParaToArry(para)
    var cardType = util.isContain(para[0], ['0','1'])
    if(para.length <= 6){
        if(para[0] != '' && para[4] != '' && para[5] != ''){
            if(cardType){
                return backData['inHospital_cancel']
            }
            else {
                return "卡类型或者变更类型传参错误！"
            }
        }
        else {
            return "必传参数不能为空!"
        }
    }
    else {
        return "传入参数位数错误！"
    }
}



module.exports = {
    T32,
    T33,
    T34,
    T36,
    T37,
    T38,
    T40
}