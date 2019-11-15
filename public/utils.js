//文件说明：公共类的方法

//请求参数转换数组 省异地 波浪线分割~
function ParaToArry(data) {
    let paras=[];
    let para =data.slice(2,-2);
    // console.log('切片结果',para)

    paras =para.split('~');
    // console.log('列表是',tt)
    // let t1 =tt[0]
    // console.log('转换后数组',paras)
    return  paras
}

function ParaToArry2(data) {
    let paras=[];
    let para =data.slice(2,-2);
    // console.log('切片结果',para)

    paras =para.split('|');
    // console.log('列表是',tt)
    // let t1 =tt[0]
    // console.log('转换后数组',paras)
    return  paras
}

module.exports = {
    ParaToArry,
    ParaToArry2
};