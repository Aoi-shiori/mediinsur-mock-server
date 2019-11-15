////文件说明:门诊业务
let Mock = require('mockjs');
const T = require('../public/utils')
let db9201=Mock.mock({
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



T9021=function T9021(para,a) {
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

            //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            let sfz1=arry[11]

            //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            let sfz2=para[14]

            //如果找到符合的将当前找到的数据返回
            if(sfz1==sfz2){
                // console.log('9201找到并返回返回参数',current)
                return current;

            }else {
                let re ='$$-1&&'
                // res.status(200).json('$$-1&&');
                return re
            }
        }


    }

}


//读卡，需要根据卡号获取 第四位的
T9022=function T9022(para, a) {

    console.log('预结算入参:',para)
    // console.log('卡号是',  para[0])

    //在db.resdata中查找卡号符合的数据并返回
    for (let i in db9202.resdata[0]){
        // console.log('打印一下',i,db.resdata[0][i])
        //当前循环到的
        let current = db9202.resdata[0][i]

        //判断是否有数据
        if(current.length>0){
            //转换数组
            let arry =T.ParaToArry(current)
            console.log('读卡函数转换后的arry:',arry)

            //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            let cardnum1=arry[3]
            // console.log('卡1',cardnum1)

            //读取入参数据中，对应的卡号，数组从0开始
            let cardnum2=para

            //如果找到符合的将当前找到的数据返回
            if(cardnum1==cardnum2){
                // console.log('9201找到并返回返回参数',current)
                return current;

            }else {
                let re ='$$-1&&'
                // res.status(200).json('$$-1&&');
                return re
            }
        }


    }

}

T9024=function() {
console.log("9024")
}

module.exports={
    T9021,
    T9024,
}