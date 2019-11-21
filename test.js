const T=require('./public/utils')
let str1='$$0~~~~~10%%在职普通%%11%%在职公务员补助%%12%%在职单位补助%%13%%在职普通(二乙社会化管理)%%14%%在职普通(二乙单位管理)%%15%%在职公务员补助(二乙社会化管理)%%16%%在职公务员补助(二乙单位管理)%%17%%在职单位补助(二乙社会化管理)%%18%%在职单位补助(二乙单位管理)%%19%%在职三等乙级%%20%%退休普通%%21%%退休公务员补助%%22%%退休单位补助%%23%%退休普通(二乙社会化管理)%%24%%退休普通(二乙单位管理)%%25%%退休公务员补助(二乙社会化管理)%%26%%退休公务员补助(二乙单位管理)%%27%%退休单位补助(二乙社会化管理)%%28%%退休单位补助(二乙单位管理)%%29%%退休三等乙级%%31%%离休%%32%%遗孀(抗战期间)%%33%%遗孀(解放期间)%%34%%退休普通(建国前老工人)%%35%%退休公务员补助(建国前老工人)%%36%%退休单位补助(建国前老工人)%%41%%老办法(一档)%%42%%老办法(二档)%%43%%老办法(三档)%%45%%老办法(五七连)%%46%%老办法(家属连)%%47%%老办法二乙(一档)%%48%%老办法二乙(二档)%%49%%老办法二乙(三档)%%50%%在职单统%%51%%退休单统%%60%%工伤%%70%%生育%%80%%退职普通%%81%%退职公务员补助%%82%%退职单位补助%%83%%退职普通(二乙社会化管理)%%84%%退职普通(二乙单位管理)%%85%%退职公务员补助(二乙社会化管理)%%86%%退职公务员补助(二乙单位管理)%%87%%退职单位补助(二乙社会化管理)%%88%%退职单位补助(二乙单位管理)%%90%%退职(退休普通)%%91%%退职(退休公务员补助)%%92%%退职(退休单位补助)%%93%%退职(退休普通二乙社会化管理)%%94%%退职(退休普通二乙单位管理)%%95%%退职(退休公务员补助二乙社会化管理)%%96%%退职(退休公务员补助二乙单位管理)%%97%%退职(退休单位补助二乙社会化管理)%%98%%退职(退休单位补助二乙单位管理)%%99%%居民医保$$'
let str2='$$330499100001~嘉兴市第一医院~00~330499~B22923957~330109D156000005006C3E81D9B82B7A~330199~330499~12~~~~MZ18207879~J98.800~呼吸道感染~~2019-11-11 19:33:11~18301~急诊内科~10785~袁昳玮~AUTO2~自助机(新)~172.65~10.00~6.10~156.55~6~1|1|2|LA071000003|奥司他韦|2019-11-11 19:33:11|623|(可威)奥司他韦胶囊(基)|75毫克*1粒|胶囊剂|粒|2|150.0|1|0|1|13.7570|2.00|27.51|0.050|1.38||0|毫克|2.00|0.20^2|1|1|x190200010060272|氯化钠|2019-11-11 19:33:11|5978|0.9％氯化钠针(双管双阀)(基)|0.90％ 100毫升*1袋|注射剂|袋|2|200.0|1|0|1|3.1200|2.00|6.24|0|0||0|毫升|2.00|2.00^3|1|2|x010101100120006|阿洛西林|2019-11-11 19:33:11|7|阿洛西林钠针|1.0克*1瓶|注射剂|瓶|2|10.00|1|0|1|9.4300|10.00|94.30|0.050|4.72||0|克|10.00|10.00^4|2|1|f12040000600|静脉输液（门诊/含输液器）|2019-11-11 19:33:11|5983|静脉输液（门诊/含输液器）|0|注射剂|次|2|0||0|1|9.8000|2.00|19.60|0|0||0||2.00|^5|2|3|1000000000000001|省、市离休门诊、住院可使用的诊疗项目|2019-11-11 19:33:11|11697|急诊挂号诊查费加收|0|注射剂|次|2|0||0|1|10.0000|1.00|10.00|1.000|10.00||0||1.00|^6|2|1|f11020000101|门诊诊查费(三级医院)|2019-11-11 19:33:11|8989|门诊诊查费(普通)|0|注射剂|次|2|0||0|1|15.0000|1.00|15.00|0|0||0||1.00|^~~20191111330499100001005601~0~~$$\n' +
    '出参：$$0~传入的费用明细自负比例有误~201911111933112205~0~0~提示信息：~2019-11-11 19:33:11~172.65|10.0|3.66|0|0.0|172.65|0.0|120.83|51.82|0.0|0.0|0|0.0|0|0.0|0.0|0|0.0|0.0|0.0|0|0|0|0|0|0|0|0^~1|0.03|0.0|0.83|0.83|^3|0.03|0.0|2.83|2.83|^~$$'


// let str1res=T.ParaToArry(str1)
// console.log('参数1转换结果',str1res)
// let str2res=T.ParaToArry(str2)
// console.log('参数2转换结果',str2res)


let tt = ['330499100001',
    '嘉兴市第一医院',
    '00',
    '330499',
    'B22923957',
    '330109D156000005006C3E81D9B82B7A',
    '330199',
    '330499',
    '12',
    '',
    '',
    '',
    'MZ18207879',
    'J98.800',
    '呼吸道感染',
    '',
    '2019-11-11 19:33:11',
    '18301',
    '急诊内科',
    '10785',
    '袁昳玮',
    'AUTO2',
    '自助机(新)',
    '172.65',
    '10.00',
    '6.10',
    '156.55',
    '6',
    [['1',
        '1',
        '2',
        'LA071000003',
        '奥司他韦',
        '2019-11-11 19:33:11',
        '623',
        '(可威)奥司他韦胶囊(基)',
        '75毫克*1粒',
        '胶囊剂',
        '粒',
        '2',
        '150.0',
        '1',
        '0',
        '1',
        '13.7570',
        '2.00',
        '27.51',
        '0.050',
        '1.38',
        '',
        '0',
        '毫克',
        '2.00',
        '0.20'],
        ['2',
            '1',
            '1',
            'x190200010060272',
            '氯化钠',
            '2019-11-11 19:33:11',
            '5978',
            '0.9％氯化钠针(双管双阀)(基)',
            '0.90％ 100毫升*1袋',
            '注射剂',
            '袋',
            '2',
            '200.0',
            '1',
            '0',
            '1',
            '3.1200',
            '2.00',
            '6.24',
            '0',
            '0',
            '',
            '0',
            '毫升',
            '2.00',
            '2.00'],
        ['3',
            '1',
            '2',
            'x010101100120006',
            '阿洛西林',
            '2019-11-11 19:33:11',
            '7',
            '阿洛西林钠针',
            '1.0克*1瓶',
            '注射剂',
            '瓶',
            '2',
            '10.00',
            '1',
            '0',
            '1',
            '9.4300',
            '10.00',
            '94.30',
            '0.050',
            '4.72',
            '',
            '0',
            '克',
            '10.00',
            '10.00'],
        ['4',
            '2',
            '1',
            'f12040000600',
            '静脉输液（门诊/含输液器）',
            '2019-11-11 19:33:11',
            '5983',
            '静脉输液（门诊/含输液器）',
            '0',
            '注射剂',
            '次',
            '2',
            '0',
            '',
            '0',
            '1',
            '9.8000',
            '2.00',
            '19.60',
            '0',
            '0',
            '',
            '0',
            '',
            '2.00',
            ''],
        ['5',
            '2',
            '3',
            '1000000000000001',
            '省、市离休门诊、住院可使用的诊疗项目',
            '2019-11-11 19:33:11',
            '11697',
            '急诊挂号诊查费加收',
            '0',
            '注射剂',
            '次',
            '2',
            '0',
            '',
            '0',
            '1',
            '10.0000',
            '1.00',
            '10.00',
            '1.000',
            '10.00',
            '',
            '0',
            '',
            '1.00',
            ''],
        ['6',
            '2',
            '1',
            'f11020000101',
            '门诊诊查费(三级医院)',
            '2019-11-11 19:33:11',
            '8989',
            '门诊诊查费(普通)',
            '0',
            '注射剂',
            '次',
            '2',
            '0',
            '',
            '0',
            '1',
            '15.0000',
            '1.00',
            '15.00',
            '0',
            '0',
            '',
            '0',
            '',
            '1.00',
            ''],
        ''],
    '',
    '20191111330499100001005601',
    '0',
    '',
    '$$\n出参：$$0',
    '传入的费用明细自负比例有误',
    '201911111933112205',
    '0',
    '0',
    '提示信息：',
    '2019-11-11 19:33:11',
    [['172.65',
        '10.0',
        '3.66',
        '0',
        '0.0',
        '172.65',
        '0.0',
        '120.83',
        '51.82',
        '0.0',
        '0.0',
        '0',
        '0.0',
        '0',
        '0.0',
        '0.0',
        '0',
        '0.0',
        '0.0',
        '0.0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0'],
        ''],
    [['1', '0.03', '0.0', '0.83', '0.83', ''],
        ['3', '0.03', '0.0', '2.83', '2.83', ''],
        ''],
    '']

// let list={'aa':'',"bb":''}
// for (let j in tt[28]){
//     for(let i in Object.keys(list)){
//         console.log('当前i',i)
//         list[i]=tt[28][j][4]
//     }
//
// }

// let list={'aa':'',"bb":''}
// for (let j in tt[28]){
//     for(let i in tt[28][j]){
//         // console.log('当前i',i)
//         // console.log('参数',tt[28][j][4])
//
//         list.aa=tt[28][j][4]
//         list.bb=tt[28][j][7]
//
//     }
//     console.log(list)
//
// }


// console.log('转换后数据',list)
let a =T.nowtime()
console.log(a)

