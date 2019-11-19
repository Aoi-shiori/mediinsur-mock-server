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
        let resid  = Mock.mock({'T0|1':[0]});//根据随机值返回
        let MediInsurCardType=paramas['MediInsurCardType']
        console.log('-----------------------------'+paramas['id']+'号交易开始---------------------------------------')
        console.log('接口请求参数',paramas)
        resid =resid['T0']

        //判断数据是否有效
        if (typeof (paramas) !="undefined"&& paramas !=null && paramas['id']!=null&&paramas['para']!=null&&paramas['para'].length>0 ){

            //根据随机数resid，不等于0就返回resid
            if (resid ==0){

                //取出请求的医保接口id
                let interfaceNum = paramas["id"]
                console.log('请求的接口id:',interfaceNum,'卡类型:',MediInsurCardType,)

                //取出请求参数
                let para =paramas['para']

                //序列为字符串
                let str = JSON.stringify(para);
                let a =111;


                // 代码定义规范：前两位 00-全国医保 10-省级医保 大于20的为市级医保
                // 医保代码	医保名称
                // 1001	浙江省一卡通
                // 1002	浙江省移动
                // 2101	嘉兴市医保
                // 2102	嘉兴市一卡通
                // 2103	嘉兴市市民卡医保

                if(MediInsurCardType==='1001'){
                    // 1001	浙江省一卡通
                    console.log('请求的医保类型：1001\t浙江省一卡通')

                }else if(MediInsurCardType==='1002'){
                    // 1002	浙江省移动
                    console.log('请求的医保类型：1002\t浙江省移动')

                }else if(MediInsurCardType==='2101'){
                    // 2101	嘉兴市医保
                    console.log('请求的医保类型：2101\t嘉兴市医保')

                }else if(MediInsurCardType==='2102'){
                    // 2102	嘉兴市一卡通
                    console.log('请求的医保类型：2102\t嘉兴市一卡通')

                }else if(MediInsurCardType==='2103'){
                    // 2103	嘉兴市市民卡医保
                    console.log('请求的医保类型：2103\t嘉兴市市民卡医保')

                }

                try{
                    //根据请求利用eval函数找到并执行对应的函数，并可进行传参和接收返回值
                    let Response = eval("T.T"+interfaceNum+"("+str+","+a+")");


                    console.log('返回参数:',Response)
                    res.status(200).json(Response)
                }catch (err) {
                    console.log('返回参数:发生错误：'+interfaceNum+'该交易未添加')
                    let re='发生错误：'+interfaceNum+'交易未添加'
                    res.status(200).json(re)
                }finally {
                    // let re='因为发生错误交易结束'
                    // res.status(200).json(re)
                    console.log('因为发生错误交易结束')
                }


                console.log('-----------------------------'+paramas['id']+'号交易结束---------------------------------------')

            }else {
                let re='$$'+resid+'$$'
                res.status(200).json(re);
             }


        }
        else {
            console.log('请求参数错误或者为空！')
            res.status(200).json('参数错误');
        }


    });

}
