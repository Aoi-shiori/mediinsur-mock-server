//文件说明：读卡函数 人员信息返回
let Mock = require('mockjs');
const T = require('../public/utils')


let db=Mock.mock({
    'data|1':[{
        'T0|1':[1,-1,0],
    }],
    'resdata':[{
        'T0|1':[1,-1,0],
        T1:'$$0|330683|330411198208083233|F41665315|330683D15600000504E34053D76FBC68|俞秋明|00810088378665330607094C38|1.00|20161223|20261223|330400815985||$$',
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


//读卡，需要根据卡号获取 第四位的
f_ReadICCard=function f_ReadICCard(para, a) {

    console.log('读卡获得入参:',para)
    // console.log('卡号是',  para[0])

    //在db.resdata中查找卡号符合的数据并返回
    for (let i in db.resdata[0]){
        // console.log('打印一下',i,db.resdata[0][i])
        //当前循环到的
        let current = db.resdata[0][i]

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

module.exports={
    f_ReadICCard,
}
