//文件说明：主接收请求并分发
let Mock = require('mockjs');
//引用工具函数
const Tools1 =require('../public/utils')
//const T9021 = require("../datas/9021");
const T = require("../public/business")
// let T9021 =require('../datas/9021')





module.exports = function (app) {


    //新增一条数据post
    app.post('/api/mediinsur', function (req, res) {

        let paramas = req.body;//接收请求数据
        let resid  = Mock.mock({'T0|1':[-1,0]});//根据随机值返回
        resid =resid['T0']

        console.log('当前参数是',resid)

        //判断数据是否有效
        if (typeof (paramas) !="undefined"&& paramas !=null && paramas['id']!=null&&paramas['para']!=null&&paramas['para'].length>0 ){

            //根据随机数resid，不等于0就返回resid
            if (resid ==0){

                //取出请求的医保接口id
                let interfaceNum = paramas["id"]
                console.log('接口id',interfaceNum)

                //取出请求参数
                let para =paramas['para']
                //调用switch函数
                //let Response =Tools1.Mdswitch(interfaceNum,para)
                let Response = "";
                let str = JSON.stringify(para);
                let a =111;

                //根据请求利用eval函数找到并执行对应的函数，并可进行传参和接收返回值
                Response = eval("T.T"+interfaceNum+"("+str+","+a+")");
                console.log(Response)


                res.status(200).json(Response)



            //     //调用函数将参数转换为数组
            //     para =Tools.Tools(para)
            //     // console.log('请求参数转换结果是',para)
            //     // console.log('卡号是',  para[0])
            //
            //
            //     console.log('看看数据',db)
            //
            //
            //     //在db.resdata中查找卡号符合的数据并返回
            //     for (let i in db.resdata[0]){
            //         // console.log('打印一下',i,db.resdata[0][i])
            //         //当前循环到的
            //         let current = db.resdata[0][i]
            //
            //         //判断是否有数据
            //         if(current.length>0){
            //             //转换数组
            //             let arry =Tools.Tools(current)
            //
            //             //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            //             let sfz1=arry[11]
            //
            //             //读取mock产生的数据中，12号的参数身份证号码，数组从0开始所以是11
            //             let sfz2=para[14]
            //
            //             //如果找到符合的将当前找到的数据返回
            //             if(sfz1==sfz2){
            //                 console.log('9201找到并返回返回参数',current)
            //                 res.status(200).json(current);
            //
            //             }else {
            //
            //                 res.status(200).json('$$-1&&');
            //             }
            //         }
            //
            //
            //     }
            //
            }else {
                let re='$$'+resid+'$$'
                res.status(200).json(re);
             }


        }
        else {
            res.status(200).json('参数错误');
        }


    });

}
