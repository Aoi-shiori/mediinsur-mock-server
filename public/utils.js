//文件说明：公共类的方法

//请求参数转换数组 省异地 波浪线分割~
function ParaToArry(data) {
    // let paras=[];
    // data ='$$330499100001~嘉兴市第一医院~00~330499~I20259653~331024D15600000500E6D3A39BCD1B7A~331024~330499~12~~~~MZ18226806~J40.X00~喘息性气管炎~~2019-11-13 11:54:22~18303~急诊儿科~10939~程锋~AUTO2~自助机(新)~71.35~10.00~0~61.35~7~1|2|3|1000000000000001|省、市离休门诊、住院可使用的诊疗项目|2019-11-13 11:54:22|11697|急诊挂号诊查费加收|0|null|次|0|0||0|1|10.0000|1.00|10.00|1.000|10.00||0||1.00|^2|2|1|f11020000101|门诊诊查费(三级医院)|2019-11-13 11:54:22|8989|门诊诊查费(普通)|0|null|次|0|0||0|1|25.0000|1.00|25.00|0|0||0||1.00|^3|2|1|f25010101500|血常规（五分类）|2019-11-13 11:54:22|3869|血液细胞自动化分析(血常规)（五分类）|0|null|次|0|0||0|1|15.0000|1.00|15.00|0|0||0||1.00|^4|2|1|f25030101700|超敏C反应蛋白测定|2019-11-13 11:54:22|4131|超敏C反应蛋白测定|0|null|项|0|0||0|1|14.0000|1.00|14.00|0|0||0||1.00|^5|2|2|cl120400025g|一次性真空采血器|2019-11-13 11:54:22|9406|一次性采血管针(广州阳普)|0|null|枚|0|0||0|1|0.3300|1.00|0.33|0|0||0||1.00|^6|2|1|f12040000201|静脉采血|2019-11-13 11:54:22|5977|静脉采血|0|null|次|0|0||0|1|6.2000|1.00|6.20|0|0||0||1.00|^7|2|2|cl120400025g|一次性真空采血器|2019-11-13 11:54:22|9401|一次性真空采血管(紫色)(广州阳普)|0|null|只|0|0||0|1|0.8200|1.00|0.82|0|0||0||1.00|^~~20191113330499100001005601~0~~$$'
    let para =data.slice(2,-2);

    if(para.indexOf('~') != -1 && para.indexOf('%%')!=-1){
        para=para.split('~')
        // console.log('循环条件1',para)
        for (let j in para){
            if(para[j].indexOf('^') != -1){
                para[j]=para[j].split('^')

                for(let i in para[j]){
                    if(para[j][i].indexOf('%%')!=-1){
                        para[j][i]=para[j][i].split('%%')
                        // console.log('细分项目',test[o][j])
                    }else {
                        para[j][i]=para[j][i]
                    }
                }
            }else {
                    if(para[j].indexOf('%%')!=-1){
                        // console.log('切片前：',para[j])
                        para[j]=para[j].split('%%')
                        // console.log('切片后：',para[j])
                    }else {
                        para[j]=para[j]
                    }

                }
        }


    }else {
        para=para.split('~')
        // console.log('循环条件2',para)
        for (let o in para){
            if(para[o].indexOf('^') != -1){
                para[o]=para[o].split('^')
                for(let j in para[o]){
                    if(para[o][j].indexOf('|')!= -1){
                        // console.log('切片前：',para[o])
                        para[o][j]=para[o][j].split('|')
                        // console.log('切片后：',para[o])
                        // console.log('细分项目',test[o][j])
                    }else {
                        para[o][j]=para[o][j]
                    }
                }
            }else {
                para[o]=para[o]
            }
        }
    }

    return  para
}

//判断参数是否在数组中存在,必须传入纯数值数组或者纯字符串的数组
function isContain(para,arry){

        if (arry.includes(para))
        {
            return true
        }else {
            return false
        }


}
// function isContain(para,arry){
//    if(typeof (arry[0])!="string"){
//        if (para in arry)
//        {
//            return true
//        }else {
//            return false
//         }
//
//     }else {
//        for(let i in arry){
//            // if(arry[i].indexOf(para)>-1){
//            if(para ==arry[i]){
//                return true
//            }else {
//                return false
//            }
//        }
//    }
// }

//返回当前时间
function nowtime(){
    //今天的时间
    let date = new Date();
    date.setTime(date.getTime());
    let nowtime = add0(date.getFullYear().toString())+"-" + add0((date.getMonth()+1).toString()) + "-" + add0(date.getDate().toString())+' '+add0(date.getHours().toString())+':'+add0(date.getMinutes().toString())+':'+add0(date.getSeconds().toString())+'.'+add0(date.getMilliseconds().toString());
    // console.log(nowtime)
    function add0(time) {
        if(time.length<=1){
           time ='0'+time
        }
        return  time

    }
    return nowtime
    // //昨天的时间
    // var day1 = new Date();
    // day1.setDate(day1.getDate() - 1);
    // var s1 = day1.format("yyyy-MM-dd");
    // //前天的时间
    // var day3 = new Date();
    // day2.setDate(day2.getDate() - 2);
    // var s3 = day2.format("yyyy-MM-dd");
}

module.exports = {
    ParaToArry,
    isContain,
    nowtime,
};