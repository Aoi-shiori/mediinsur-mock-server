////文件说明:门诊业务
let Mock = require('mockjs');
const T = require('../public/utils')
let db9201=Mock.mock({
    'data|1':[{
        'T0|1':[1,-1,0],
    }],
    'resdata':[{
        'T0|1':[1,-1,0],
        T1:'$$0~success~000000000000000~0~B22923957~330109D156000005006C3E81D9B82B7A~30130907~徐亦明~1~01~1983-11-14~339005198311145913~330199~杭州市~6020116~杭州萧山园林集团有限公司~310~16~~0.0~1044.5~0~~0~~328.39~0.0~0.00~0~0~~$$',
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

let db9202=Mock.mock({
    'data|1':[{
        'T0|1':[1,-1,0],
    }],
    'resdata':[{
        'T0|1':[1,-1,0],
        B22923957:'$$0~传入的费用明细自负比例有误~201911111933112205~0~0~提示信息：~2019-11-11 19:33:11~172.65|10.0|3.66|0|0.0|172.65|0.0|120.83|51.82|0.0|0.0|0|0.0|0|0.0|0.0|0|0.0|0.0|0.0|0|0|0|0|0|0|0|0^~1|0.03|0.0|0.83|0.83|^3|0.03|0.0|2.83|2.83|^~$$',
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

let db9203=Mock.mock({
    'data|1':[{
        'T0|1':[1,-1,0],
        'T1|1':['有参数不正确','交易成功',0],
    }],
    'resdata':[{
        'T0|1':[1,-1,0],
        B22923957:'$$0~传入的费用明细自负比例有误~201911111933112205~0~0~提示信息：~2019-11-11 19:33:11~172.65|10.0|3.66|0|0.0|172.65|0.0|120.83|51.82|0.0|0.0|0|0.0|0|0.0|0.0|0|0.0|0.0|0.0|0|0|0|0|0|0|0|0^~1|0.03|0.0|0.83|0.83|^3|0.03|0.0|2.83|2.83|^~$$',
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



T9201=function T9201(para,a) {
    // console.log('para是',para,a)
    //调用函数将参数转换为数组
    // para =Tools.ParaToArry(para)
    para =T.ParaToArry(para)
    // console.log('请求参数转换结果是',para)
    // console.log('卡号是',  para[0])


    // console.log('看看数据',db)


    //在db.resdata中查找卡号符合的数据并返回
    for (let i in db9201.resdata[0]){
        // console.log('打印一下',i,db.resdata[0][i])
        //当前循环到的
        let current = db9201.resdata[0][i]

        //判断是否有数据
        if(current.length>0){
            //转换数组
            let arry =T.ParaToArry(current)
            // console.log('9201转换后的结果',arry)
            console.log('9201长度',arry.length)


            //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            let sfz1=arry[11]

            //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            let sfz2=para[14]

            //如果找到符合的将当前找到的数据返回
            if(sfz1==sfz2){
                // console.log('9201找到并返回返回参数',current)
                return current;

            }else {
                let re ='$$-1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~&&'
                // res.status(200).json('$$-1&&');
                return re
            }
        }


    }

}


//读卡，需要根据卡号获取 第四位的
T9202=function T9202(para, a) {

    console.log('T9202预结算入参:',para)
    para=T.ParaToArry(para)
    // console.log('T9202社会保障卡卡号',  para[4])
    // console.log('转换后结果',  para)
    let res = db9202.resdata[0][para[4]]

    if( res != null){
        console.log('T9202预结算返回参数',  res)
        let pp=T.ParaToArry(res)
        console.log('参数是什么',pp)
        return res
    }else {
        return '$$-1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~&&'
        console.log('未找到病人')
    }


    //在db.resdata中查找卡号符合的数据并返回
    // for (let i in db9202.resdata[0]){
    //     // console.log('打印一下',i,db.resdata[0][i])
    //     //当前循环到的
    //     let current = db9202.resdata[0][i]
    //
    //     //判断是否有数据
    //     if(current.length>0){
    //         //转换数组
    //         let arry =T.ParaToArry(current)
    //         console.log('读卡函数转换后的arry:',arry)
    //
    //         //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
    //         let cardnum1=arry[3]
    //         // console.log('卡1',cardnum1)
    //
    //         //读取入参数据中，对应的卡号，数组从0开始
    //         let cardnum2=para
    //
    //         //如果找到符合的将当前找到的数据返回
    //         if(cardnum1==cardnum2){
    //             // console.log('9201找到并返回返回参数',current)
    //             return current;
    //
    //         }else {
    //             let re ='$$-1&&'
    //             // res.status(200).json('$$-1&&');
    //             return re
    //         }
    //     }
    //
    //
    // }

}


//读卡，需要根据卡号获取 第四位的
T9203=function T9203(para, a) {

    console.log('T9203预结算入参:',para)
    para=T.ParaToArry(para)
    // console.log('T9203社会保障卡卡号',  para[4])
    // console.log('转换后结果',  para)
    let res = db9203.resdata[0][para[4]]
    if( res != null){
        console.log('T9203预结算返回参数',  res)
        return res
    }else {
        return '$$-1&&'
        console.log('未找到病人')
    }


    //在db.resdata中查找卡号符合的数据并返回
    // for (let i in db9202.resdata[0]){
    //     // console.log('打印一下',i,db.resdata[0][i])
    //     //当前循环到的
    //     let current = db9202.resdata[0][i]
    //
    //     //判断是否有数据
    //     if(current.length>0){
    //         //转换数组
    //         let arry =T.ParaToArry(current)
    //         console.log('读卡函数转换后的arry:',arry)
    //
    //         //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
    //         let cardnum1=arry[3]
    //         // console.log('卡1',cardnum1)
    //
    //         //读取入参数据中，对应的卡号，数组从0开始
    //         let cardnum2=para
    //
    //         //如果找到符合的将当前找到的数据返回
    //         if(cardnum1==cardnum2){
    //             // console.log('9201找到并返回返回参数',current)
    //             return current;
    //
    //         }else {
    //             let re ='$$-1&&'
    //             // res.status(200).json('$$-1&&');
    //             return re
    //         }
    //     }
    //
    //
    // }

}

T9204=function() {
console.log("9204")
}

T9247=function(para) {
    console.log('T9247交易作废入参:',para)
    para=T.ParaToArry(para)
    // console.log('T9203社会保障卡卡号',  para[4])
    // console.log('转换后结果',  para)
    let res  = Mock.mock({'T0|1':['$$0~交易成功$$','$$-1~交易失败$$']});//根据随机值返回
    res=res['T0']
    console.log('T9247交易作废返回参数:',res)
    return res
}

module.exports={
    T9201,
    T9202,
    T9203,
    T9204,
    T9247,
}