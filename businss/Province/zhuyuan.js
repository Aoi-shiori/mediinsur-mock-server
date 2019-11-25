////文件说明:住院业务
let Mock = require('mockjs');
const T = require('../../public/utils')
let db=Mock.mock({
    'data|1':[{
        'T0|1':[1,-1,0],
    }],
    'resdata':[{
        'T0|1':[1,-1,0],
        T1:'$$0~~000000000000000~000000000000000~F41665315~330683D15600000504E34053D76FBC68~1001215897~俞秋明~1~01~1982-08-08~330411198208083233~330683~嵊州~06232790~华汇建设集团有限公司~310~16~~10.26~0.00~0.00~~0.00~~2095.32~0.00~0.00~13~0~~$$',
        T2:'',
        T3:'',
        T4:'',
        T5:'',
        T6:'',
        T7:'',
        T8:'',
        T9:'',
        T10:'',
        T11:'',
        T12:'',
        T13:'',
        T14:'',
        T15:'',
        T16:'',
        T17:'',
        T18:'',
        T19:'',
        T20:'',
        T21:'',
        T22:'',
        T23:'',
        T24:'',
        T25:'',
        T26:'',
        T27:'',
        T28:'',
        T29:'',
        T30:'',
        T31:'',
        T32:'',
    }]


});

var backData = {
    'inHospital':'$$0~~2019111610242952$$',
    'inHospitalInfo_change':'$$0~~$$',
    'inHospitalInfo_detail':'$$330499100001~嘉兴市第一医院~00~330499~1532413~2019111610242952~10~215397832|0|0|2|2|f21030000401|' +
        'X线计算机体层（CT）特殊三维成像（64层）|215397832|2019-11-08 12:53:38|2019-11-08 12:53:38|8943|' +
        'X线计算机体层(CT)特殊三维成像（64层）|0|0|人次||||0|1|850.0000|1.00|850.00|0.100|85||0||0||230|' +
        '神经内科(一)(14A)|10418|陈宁^215397833|0|0|2|3|g14020090500|计算机图文报告|215397833|2019-11-08 12:53:38|' +
        '2019-11-08 12:53:38|4941|计算机图文报告|0|0|人次||||0|1|8.0000|1.00|8.00|1.000|8||0||0||230|神经内科(一)' +
        '(14A)|10418|陈宁^215397836|0|0|2|2|f21020000108|MRI扫描增加各项功能加收|215397836|2019-11-08 12:53:58|' +
        '2019-11-08 12:53:58|4960|磁共振扫描增加各项功能加收|0|0|项||||0|1|43.0000|1.00|43.00|0.100|4.3||0||0||' +
        '230|神经内科(一)(14A)|10418|陈宁^215397837|0|0|2|2|f21020000113|磁共振扫描（超导3.0T及以上）|215397837|' +
        '2019-11-08 12:53:58|2019-11-08 12:53:58|9927|磁共振扫描（超导3.0T及以上）|0|0|人次||||0|1|660.0000|' +
        '1.00|660.00|0.100|66||0||0||230|神经内科(一)(14A)|10418|陈宁^215397838|0|0|2|3|g14020090500|' +
        '计算机图文报告|215397838|2019-11-08 12:53:58|2019-11-08 12:53:58|4941|计算机图文报告|0|0|人次||||' +
        '0|1|8.0000|1.00|8.00|1.000|8||0||0||230|神经内科(一)(14A)|10418|陈宁^215398232|0|0|2|3|g14020090500|' +
        '计算机图文报告|215398232|2019-11-08 13:02:20|2019-11-08 13:02:20|4941|计算机图文报告|0|0|人次||||0|1|' +
        '8.0000|1.00|8.00|1.000|8||0||1.00||230|神经内科(一)(14A)|10418|陈宁^215398233|0|0|2|1|f34020000200|' +
        '仪器平衡功能评定(限)|215398233|2019-11-08 13:02:20|2019-11-08 13:02:20|5800|仪器平衡功能评定(限)|0|0|' +
        '次||||0|1|41.0000|1.00|41.00|0|0||0||1.00||230|神经内科(一)(14A)|10418|陈宁^215398234|0|0|2|3|' +
        '1000000000000001|省、市离休门诊、住院可使用的诊疗项目|215398234|2019-11-08 13:02:20|2019-11-08 13:02:20|' +
        '8857|位置平衡试验|0|0|次||||0|1|50.0000|1.00|50.00|1.000|50||0||1.00||230|神经内科(一)(14A)|10418|' +
        '陈宁^215398235|0|0|2|1|f34020000100|徒手平衡功能检查(限)|215398235|2019-11-08 13:02:20|2019-11-08 13:02:20|' +
        '5799|徒手平衡功能检查(限)|0|0|次||||0|1|28.0000|1.00|28.00|0|0||0||1.00||230|神经内科(一)(14A)|10418|' +
        '陈宁^215398236|0|0|2|1|f31150200200|眼动检查|215398236|2019-11-08 13:02:20|2019-11-08 13:02:20|515|' +
        '眼动检查|0|0|次||||0|1|10.0000|1.00|10.00|0|0||0||1.00||230|神经内科(一)(14A)|10418|陈宁^$$',
    'inHospital_pre_pay':'$$0~~2019-11-16 10:42:20~7700.77|510.40|259.56|0.00|600.00|2928.77|4772.00|2928.77|0.00|0.00' +
        '|0.00|0.00|0.00|0.00|0.00|0.00|0.00|510.40|259.56|4002.04|0.00|0.00|0.00|0.00|0.00|0.00|0.35|2425.78^~$$',
    'inHospital_final_pay':'$$0~~2019111653633725~2019-11-16 10:42:46~7700.77|510.40|259.56|0.00|600.00|2928.77|' +
        '4772.00|2928.77|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|0.00|510.40|259.56|4002.04|0.00|0.00|0.00|0.00|' +
        '0.00|0.00|0.35|2425.78^~$$',
    'inHospital_detail_search':'$$0~~$$',
    'inHospitalInfo_download':'$$0~~浙江省.绍兴市.上虞市|浙江省.嘉兴市.嘉兴市市本级|E17018250|杜德花|女|64|330622195502238028' +
        '|390|1532413|脑动脉供血不足||2019-11-08 10:57:28|2019-11-16 10:39:52|8|普通入院|神经内科(一)(14A)|嘉兴市第一医院|' +
        '三级甲等^~7700.77|510.40|4505.03|600.00|2928.77|4772.00^~1|个人账户|0.00^2|公务员补助|0.00^3|统筹基金|2928.77^4|' +
        '重大疾病补助|0.00^5|二乙伤残基金|0.00^6|其他补助|0.00^1|自理|259.56^2|自付|4002.04^3|自费|510.40^~$$',
    'T92531':'$$0~~3304991000010006~20191116330499100001000601~2019-11-16 11:11:59$$',
    'T92532':'$$0~~3304991000010006~20191116330499100001000602~2019-11-16 11:11:59$$'
}



T9025=function() {
    console.log("9024")
}


//住院登记
T9205 = function(para){
    para = T.ParaToArry(para)
    if(para[8] != '' && para[10] != '' && para[10] != '' && para[11] != ''){
        return backData['inHospital']
    }
    else {
        return "必传字段不能为空！"
    }
}

//住院信息变动
T9210 = function T9210(para){
    para = T.ParaToArry(para)
    if(para[4] != '' && para[5] != '' && para[6] != '' && para[7] != '' && para[15] != ''){
        return backData['inHospitalInfo_change']
    }
    else {
        return "必传字段不能为空！"
    }
}


//住院明细上传
T9212 = function T9212(para){
    para = T.ParaToArry(para)
    if(para.length <= 8){
        if(para[4] != '' && para[5] != '' && para[6] != '' && para[7] != ''){
            return backData['inHospitalInfo_detail']
        }
        else {
            return "必传字段不能为空！"
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}

//住院预结算
T9207 = function T9207(para){
    para = T.ParaToArry(para)
    if(para.length <= 13){
        if(para[4] != '' && para[10] != '' && para[11] != '' && para[12] != ''){
            return backData['inHospital_pre_pay']
        }
        else {
            return "必传字段不能为空！"
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}


//住院结算
T9208 = function T9208(para){
    para = T.ParaToArry(para)
    console.log(para.length)
    if(para.length <= 16){
        if(para[4] != '' && para[10] != '' && para[11] != '' && para[12] != ''){
            return backData['inHospital_final_pay']
        }
        else {
            return "必传字段不能为空！"
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}


//住院明细查询
T9215 = function T9215(para){
    para = T.ParaToArry(para)
    console.log(para.length)
    if(para.length <= 7){
        if(para[4] != '' && para[5] != '' && para[6] != ''){
            return backData['inHospital_detail_search']
        }
        else {
            return "必传字段不能为空！"
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}


//住院结算单据下载
T9228 = function T9228(para){
    para = T.ParaToArry(para)
    console.log(para.length)
    if(para.length <= 6){
        if(para[4] != ''){
            return backData['inHospitalInfo_download']
        }
        else {
            return "必传字段不能为空！"
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}



// 接口： 9253- 定点机构操作员签到
// 入参：
// $$330499100001~嘉兴市第一医院~00~330499~3304991000010006~1$$
// 内部入参：平台文档无此接口
// 出参：
// $$0~~3304991000010006~20191116330499100001000601~2019-11-16 11:11:59$$
T9253 = function T9253(para){
    para = T.ParaToArry(para)
    console.log(para.length)
    if(para.length <= 6){
        if(para[5] === '1'){
            return backData['T92531']
        }
        else {
            return backData['T92532']
        }
    }
    else {
        return "传入参数错误，请检查传入数据！"
    }
}

module.exports={
    T9025,
    T9205,
    T9210,
    T9212,
    T9207,
    T9208,
    T9215,
    T9228,
    T9253,
}
