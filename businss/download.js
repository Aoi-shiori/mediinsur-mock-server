//医保相关下载业务
let Mock = require('mockjs');
const util = require('../public/utils')

var backData = Mock.mock({
            'department'
                :'$$0~~~~~1~50~110100005%%中国人民解放军总医院（三零一医院）（北京市）%%110100006%%北京大学' +
                '第一医院%%110100007%%北京大学人民医院%%110100008%%中日友好医院%%110100009%%北京积水潭医院%%11' +
                '0100010%%首都医科大学附属北京友谊医院%%110100014%%首都医科大学附属北京天坛医院%%110100015%%中' +
                '国医学科学院北京协和医院%%110100017%%首都医科大学宣武医院%%110100018%%北京大学第三医院（北医三院）' +
                '%%110100020%%首都医科大学附属北京安贞医院%%110100021%%中国人民解放军空军总医院（北京市）%%110100023%' +
                '%中国人民解放军第三零九医院（北京市）%%110100024%%中国人民解放军第三零六医院（北京市）%%110100025%%中国' +
                '人民解放军第三零四医院（北京市）%%110100026%%中国人民武装警察部队总医院（北京市）%%110100027%%中国人民' +
                '解放军第四六六医院（北京市）%%110100028%%中国人民解放军第三零七医院（北京市）%%110100029%%中国人民' +
                '解放军第三零五医院（北京市）%%110100031%%北京中医医院%%110100034%%首都医科大学附属北京妇产医院%%11010' +
                '0035%%北京地坛医院%%110100036%%首都医科大学附属北京安定医院%%110100038%%中国医学科学院阜外心血管病医院' +
                '（北京市）%%110100040%%首都医科大学附属北京口腔医院%%110100041%%中国医学科学院肿瘤医院肿瘤研究所（北京市）' +
                '%%110100043%%中国人民解放军第三零二医院（传染病专科）（北京市）%%110100044%%北京博爱医院%%110100045%%北' +
                '京肿瘤医院%%110100046%%北京大学口腔医院%%110100047%%北京大学口腔医院%%110100050%%中国人民解放军第二六一' +
                '医院（北京市）%%110100053%%中国人民解放军第二炮兵总医院（北京市）%%110100055%%北京市宣武中医医院%%' +
                '110100058%%北京市人民医院%%110100065%%中日友好医院%%110100066%%首都医科大学附属朝阳医院%%110100079%%' +
                '北京同仁医院%%110100125%%首都医科大学附属复兴医院%%110100131%%北京大学第一附属医院%%110100143%%北京市' +
                '武警总队第二医院%%110100148%%北京市世纪坛医院%%110100151%%北京电力医院%%110100155%%首都医科大学三博脑' +
                '科医院%%110100161%%北京三博脑科医院%%110100172%%北京市航空总医院%%110100193%%首都医科大学附属北京儿童' +
                '医院%%11000020001%%北京海淀医院%%12000030005%%天津市第一中心医院%%12010000001%%天津市人民医院$$',
            'dictionary_classType':'$$0~~~~~10%%在职普通%%11%%在职公务员补助%%12%%在职单位补助%%13%%在职普通(二乙社会化管理)%%14%%' +
                '在职普通(二乙单位管理)%%15%%在职公务员补助(二乙社会化管理)%%16%%在职公务员补助(二乙单位管理)%%17%%在职单位' +
                '补助(二乙社会化管理)%%18%%在职单位补助(二乙单位管理)%%19%%在职三等乙级%%20%%退休普通%%21%%退休公务员补助%%' +
                '22%%退休单位补助%%23%%退休普通(二乙社会化管理)%%24%%退休普通(二乙单位管理)%%25%%退休公务员补助(二乙社会化管理)' +
                '%%26%%退休公务员补助(二乙单位管理)%%27%%退休单位补助(二乙社会化管理)%%28%%退休单位补助(二乙单位管理)%%29%%' +
                '退休三等乙级%%31%%离休%%32%%遗孀(抗战期间)%%33%%遗孀(解放期间)%%34%%退休普通(建国前老工人)%%35%%退休公务员' +
                '补助(建国前老工人)%%36%%退休单位补助(建国前老工人)%%41%%老办法(一档)%%42%%老办法(二档)%%43%%老办法(三档)%%' +
                '45%%老办法(五七连)%%46%%老办法(家属连)%%47%%老办法二乙(一档)%%48%%老办法二乙(二档)%%49%%老办法二乙(三档)%%' +
                '50%%在职单统%%51%%退休单统%%60%%工伤%%70%%生育%%80%%退职普通%%81%%退职公务员补助%%82%%退职单位补助%%83%%' +
                '退职普通(二乙社会化管理)%%84%%退职普通(二乙单位管理)%%85%%退职公务员补助(二乙社会化管理)%%86%%退职公务员补助' +
                '(二乙单位管理)%%87%%退职单位补助(二乙社会化管理)%%88%%退职单位补助(二乙单位管理)%%90%%退职(退休普通)%%91%%' +
                '退职(退休公务员补助)%%92%%退职(退休单位补助)%%93%%退职(退休普通二乙社会化管理)%%94%%退职(退休普通二乙单位管理)' +
                '%%95%%退职(退休公务员补助二乙社会化管理)%%96%%退职(退休公务员补助二乙单位管理)%%97%%退职(退休单位补助二乙社会' +
                '化管理)%%98%%退职(退休单位补助二乙单位管理)%%99%%居民医保$$',
            'dictionary_feeType':'$$0~~~~~001%%床位费%%002%%检查费%%003%%放射费%%004%%化验费%%005%%治疗费%%006%%输血费%%007%%' +
                '输氧费%%008%%手术费%%009%%麻醉费%%010%%材料费%%011%%护理费%%012%%挂号费%%013%%诊疗费%%014%%注射费%%099%%其他费' +
                '%%100%%西药费%%200%%中成药费%%300%%中草药费%%400%%工伤器具$$',
            'disease_default':'$$0~~~~~1~10~9368%%000.000%%检查%%JC%%%%1100627%%A00.000%%古典生物型霍乱%%GDSWXHL%%%%1100628%%A00.100%%' +
                '埃尔托型霍乱%%AETXHL%%%%1100629%%A00.900%%霍乱%%HL%%%%1100630%%A01.000%%伤寒%%SH%%%%1100631%%' +
                'A01.001+%%伤寒性肝炎%%SHXGY%%%%1100632%%A01.002+%%伤寒性脑膜炎%%SHXNMY%%%%1100633%%A01.003%%伤寒杆菌性败血症' +
                '%%SHGJXBXZ%%%%1100634%%A01.100%%副伤寒甲%%FSHJ%%%%1100635%%A01.200%%副伤寒乙%%FSHY%%$$',
            'disease_other':'$$0~~~~~1~10~1100636%%A01.300%%副伤寒丙%%FSHB%%%%1100637%%A01.400%%副伤寒%%FSH%%%%1100638%%A02.000%%' +
                '沙门菌肠炎%%SMJCY%%%%1100639%%A02.001%%阿哥拉沙门菌肠炎%%AGLSMJCY%%%%1100640%%A02.002%%沙门菌伦敦血清型肠炎%%' +
                'SMJLDXQXCY%%%%1100641%%A02.003%%沙门菌胃肠炎%%SMJWCY%%%%1100642%%A02.004%%鼠伤寒沙门菌肠炎%%SSHSMJCY%%%%' +
                '1100643%%A02.100%%沙门菌败血症%%SMJBXZ%%%%1100644%%A02.101%%猪霍乱沙门菌败血症%%ZHLSMJBXZ%%%%1100645%%' +
                'A02.200%%局限性沙门菌感染%%JXXSMJGR%%$$',
            'diagnoseType_medicine':'$$0~~~~~1~10~157564%%1%%3000000000000001%%省、市离休干部可使用的治疗性西药%%%%100%%20110701%%%%0%%0%%' +
                '无%%%%无%%%%%%0%%SZSLXGBKSYDZLXXY%%%%0%%%%%%%%%%%%%%157565%%1%%3000000000000002%%杭州市二级保健干部及离休一号证可使用的西药' +
                '%%%%100%%20100101%%%%0%%0%%无%%%%无%%%%%%0%%HZSEJBJGBJLXYHZKSYDXY%%%%0%%%%%%%%%%%%%%157567%%1%%4000000000000001%%' +
                '省、市离休干部可使用中成药%%%%200%%20110701%%%%0%%0%%无%%%%无%%%%%%0%%SZSLXGBKSYZCY%%%%0%%%%%%%%%%%%%%157574%%1%%' +
                'e01010110008a000%%氨苄西林%%Ampicillin%%100%%20110701%%%%0%%%%干糖浆%%%%无%%%%限儿童%%0%%ABXL%%%%0%%%%%%%%%%%%%%' +
                '157575%%1%%e01010120023a000%%头孢氨苄%%Cefalexin%%100%%20110701%%%%0%%%%干糖浆%%%%无%%%%限儿童%%0%%TBAB%%%%0%%%%%%%%%%%%%%' +
                '157594%%1%%e01010300054a000%%庆大霉素%%Gentamycin%%100%%20110701%%%%0%%%%溶液剂%%%%无%%%%限儿童%%0%%QDMS%%%%0%%%%%%%%%%%%%%' +
                '157595%%1%%e01010600067a000%%阿奇霉素%%Azithromycin%%100%%20110701%%%%0%%%%干混悬剂、散剂%%%%盒%%%%限儿童%%0%%AQMS' +
                '%%%%0%%%%%%%%%%%%%%157602%%1%%e01010600068a000%%红霉素%%Erythromycin%%100%%20110701%%%%0%%%%干糖浆、栓剂%%%%无%%%%限儿童' +
                '%%0%%HMS%%%%0%%%%%%%%%%%%%%157603%%1%%e01010600070a000%%琥乙红霉素%%ErythromycinEthylsuccinate%%100%%20110701%%%%0%%%%干糖浆' +
                '%%%%无%%%%限儿童%%0%%HYHMS%%%%0%%%%%%%%%%%%%%157604%%1%%e01010600072a000%%罗红霉素%%Roxithromycin%%100%%20110701%%%%0%%%%' +
                '混悬剂、颗粒剂%%%%盒%%%%限儿童%%0%%LHMS%%%%0%%%%%%%%%%%%~649015%%3000000000000001%%1%%10%%7%%1%%435844%%3000000000000002%%' +
                '1%%10%%7%%1%%649020%%4000000000000001%%1%%10%%7%%1%%608511%%e01010110008a000%%1%%10%%2%%.05%%608516%%e01010120023a000%%' +
                '1%%10%%1%%0%%558873%%e01010300054a000%%1%%10%%2%%.05%%558906%%e01010600067a000%%1%%10%%1%%0%%553946%%e01010600068a000%%' +
                '1%%10%%1%%0%%553953%%e01010600070a000%%1%%10%%2%%.05%%553998%%e01010600072a000%%1%%10%%2%%.05$$',
            'diagnoseType_diagnose':'$$0~~~~~1~10~138182%%2%%f33120201101%%睾丸切除术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次' +
                '%%%%%%0%%GWQCSSC%%TVFBSCW%%0%%%%%%%%%%%%%%138183%%2%%f33120201200%%睾丸肿瘤腹膜后淋巴结清扫术%%%%008%%20050301' +
                '%%%%0%%%%%%%%次%%%%%%0%%GWZLFMHLBJQSS%%TVEUEERICXIRS%%0%%%%%%%%%%%%%%138184%%2%%f33120201201%%睾丸肿瘤双侧淋巴清扫术' +
                '%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%GWZLSCLBQSS%%TVEUCWICIRS%%0%%%%%%%%%%%%%%138185%%2%%f33120201202%%' +
                '阴茎肿瘤双侧淋巴清扫术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%YJZLSCLBQSS%%BAEUCWICIRS%%0%%%%%%%%%%%%%%138186' +
                '%%2%%f33120201400%%隐睾切除术（单侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%YGQCSDC%%BTFBSUW%%0%%%%%%%%%%%%%%' +
                '138187%%2%%f33120201401%%隐睾切除术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%YGQCSSC%%BTFBSCW%%0%%%%%%%%%%%%%%' +
                '138188%%2%%f33120300100%%附睾切除术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%FGQCS%%BTFBS%%0%%%%%%%%%%%%%%138189%%2%%' +
                'f33120300101%%附睾肿物切除术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%FGZWQCS%%BTETFBS%%0%%%%%%%%%%%%%%138190%%2%%f33120300200' +
                '%%输精管附睾吻合术（单侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%SJGFGWHSDC%%LOTBTKWSUW%%0%%%%%%%%%%%%%%138191%%2%%f33120300201' +
                '%%输精管附睾吻合术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%SJGFGWHSSC%%LOTBTKWSCW%%0%%%%%%%%%%%%~364388%%f33120201101' +
                '%%2%%10%%1%%0%%364389%%f33120201200%%2%%10%%1%%0%%364390%%f33120201201%%2%%10%%1%%0%%364391%%f33120201202%%2%%10%%1%%0' +
                '%%364392%%f33120201400%%2%%10%%1%%0%%364393%%f33120201401%%2%%10%%1%%0%%364394%%f33120300100%%2%%10%%1%%0%%364395%%' +
                'f33120300101%%2%%10%%1%%0%%364396%%f33120300200%%2%%10%%1%%0%%364397%%f33120300201%%2%%10%%1%%0$$',
            'diagnoseType_all':'$$0~~~~~1~10~138182%%2%%f33120201101%%睾丸切除术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次' +
                '%%%%%%0%%GWQCSSC%%TVFBSCW%%0%%%%%%%%%%%%%%138183%%2%%f33120201200%%睾丸肿瘤腹膜后淋巴结清扫术%%%%008' +
                '%%20050301%%%%0%%%%%%%%次%%%%%%0%%GWZLFMHLBJQSS%%TVEUEERICXIRS%%0%%%%%%%%%%%%%%138184%%2%%f33120201201' +
                '%%睾丸肿瘤双侧淋巴清扫术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%GWZLSCLBQSS%%TVEUCWICIRS%%0%%%%%%%%%%%%%%' +
                '138185%%2%%f33120201202%%阴茎肿瘤双侧淋巴清扫术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%YJZLSCLBQSS%%BAEUCWICIRS' +
                '%%0%%%%%%%%%%%%%%138186%%2%%f33120201400%%隐睾切除术（单侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%YGQCSDC' +
                '%%BTFBSUW%%0%%%%%%%%%%%%%%138187%%2%%f33120201401%%隐睾切除术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%' +
                'YGQCSSC%%BTFBSCW%%0%%%%%%%%%%%%%%138188%%2%%f33120300100%%附睾切除术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%' +
                'FGQCS%%BTFBS%%0%%%%%%%%%%%%%%138189%%2%%f33120300101%%附睾肿物切除术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%' +
                'FGZWQCS%%BTETFBS%%0%%%%%%%%%%%%%%138190%%2%%f33120300200%%输精管附睾吻合术（单侧）%%%%008%%20050301%%%%0%%%%%%%%次' +
                '%%%%%%0%%SJGFGWHSDC%%LOTBTKWSUW%%0%%%%%%%%%%%%%%138191%%2%%f33120300201%%输精管附睾吻合术（双侧）%%%%008%%20050301' +
                '%%%%0%%%%%%%%次%%%%%%0%%SJGFGWHSSC%%LOTBTKWSCW%%0%%%%%%%%%%%%~364388%%f33120201101%%2%%10%%1%%0%%364389%%' +
                'f33120201200%%2%%10%%1%%0%%364390%%f33120201201%%2%%10%%1%%0%%364391%%f33120201202%%2%%10%%1%%0%%364392%%' +
                'f33120201400%%2%%10%%1%%0%%364393%%f33120201401%%2%%10%%1%%0%%364394%%f33120300100%%2%%10%%1%%0%%364395%%' +
                'f33120300101%%2%%10%%1%%0%%364396%%f33120300200%%2%%10%%1%%0%%364397%%f33120300201%%2%%10%%1%%0$$',
            'diagnoseType_other':'$$0~~~~~1~10~138192%%2%%f33120300300%%精索静脉转流术%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%' +
                'JSJMZLS%%OFGELIS%%0%%%%%%%%%%%%%%138193%%2%%f33120300400%%精索静脉瘤切除术%%%%008%%20050301%%%%0%%%%%%%%次' +
                '%%%%%%0%%JSJMLQCS%%OFGEUFBS%%0%%%%%%%%%%%%%%138194%%2%%f33120300500%%精索静脉曲张栓塞术%%%%008%%20050301' +
                '%%%%0%%%%%%%%次%%%%%%0%%JSJMQZSSS%%OFGEMXSPS%%0%%%%%%%%%%%%%%138195%%2%%f33120300600%%精索静脉曲张高位结扎术（单侧）' +
                '%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%JSJMQZGWJZSDC%%OFGEMXYWXRSUW%%0%%%%%%%%%%%%%%138196%%2%%f33120300601%%' +
                '精索静脉曲张高位结扎术（双侧）%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%JSJMQZGWJZSSC%%OFGEMXYWXRSCW%%0' +
                '%%%%%%%%%%%%%%138197%%2%%f33120300700%%输精管插管术%%%%008%%20050301%%%%0%%%%%%%%人次%%%%%%0%%SJGCGS%%' +
                'LOTRTS%%0%%%%%%%%%%%%%%138198%%2%%f33120300800%%输精管结扎术%%%%008%%20050301%%%%0%%%%%%%%人次%%%%%%0%%' +
                'SJGJZS%%LOTXRS%%0%%%%%%%%%%%%%%138199%%2%%f33120300900%%输精管粘堵术%%%%008%%20050301%%%%0%%%%%%%%人次' +
                '%%%%%%0%%SJGNDS%%LOTOFS%%0%%%%%%%%%%%%%%138200%%2%%f33120301000%%输精管角性结节切除术%%%%008%%20050301' +
                '%%%%0%%%%%%%%人次%%%%%%0%%SJGJXJJQCS%%LOTQNXAFBS%%0%%%%%%%%%%%%%%138203%%2%%f33120301200%%输尿管间嵴切除术' +
                '%%%%008%%20050301%%%%0%%%%%%%%次%%%%%%0%%SNGJJQCS%%LNTYMFBS%%0%%%%%%%%%%%%~364398%%f33120300300%%2%%' +
                '10%%1%%0%%364399%%f33120300400%%2%%10%%1%%0%%364400%%f33120300500%%2%%10%%1%%0%%364401%%f33120300600%%2' +
                '%%10%%1%%0%%364402%%f33120300601%%2%%10%%1%%0%%364403%%f33120300700%%2%%10%%1%%0%%364404%%f33120300800%%2' +
                '%%10%%1%%0%%364405%%f33120300900%%2%%10%%1%%0%%364406%%f33120301000%%2%%10%%1%%0%%364409%%f33120301200%%2' +
                '%%10%%1%%0$$'

})

//定点医疗结构下载
T75 = function T75(para) {
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    if (para != ""){
        //卡类型
        let cardType= util.isContain(para[0],['0','1','2'])
        if(cardType && para[4]!= "")
            return backData['department']
        else{
            return "传参有误，请检查输入参数"
        }
    }
    else {
        return "参数不能为空！"
    }
}

//中心字典下载
T77 = function T77(para){
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    //卡类型
    let cardType= util.isContain(para[0],['0','1','2'])
    //费用类别
    var isClassify = util.isContain(para[4],['1','2'])
    console.log("是否包含："+cardType+" "+isClassify)
    if (para != ""){
        if(cardType && isClassify){
            switch (para[4]) {
                case '1':
                    return backData['dictionary_classType'];
                case '2':
                    return backData['dictionary_feeType'];
            }
        }
        else {
            return "传参错误，请检查传入数据！"
        }
    }
    else{
        return "入参不能为空！"
    }
}

//疾病下载
T78 = function T78(para){
    para = util.ParaToArry(para)
    console.log("转化后的入参为："+para)
    let cardType= util.isContain(para[0],['0','1','2'])
    if (para != ""){
        if(cardType && para[4]!= ""){
            if(para[4] == '0'){
                return backData['disease_default']
            }
            else {
                return backData['disease_other']
            }
        }
        else{
            return "传参错误，请检查传入数据！"
        }
    }
    else{
        return "参数不能为空！"
    }
}

//药品诊疗目录下载
T54 = function T54(para){
    para = util.ParaToArry(para)
    console.log("转化后的参数为："+para)
    let cardType= util.isContain(para[0],['0','1','2'])
    //药品诊疗类别
    var type = util.isContain(para[4],['0','1','2'])
    if(para != ""){
        if(cardType && type && para[5]!= ""){
            switch(para[4]){
                default:
                    return backData['diagnoseType_other'];
                    break;
                case '0':
                    return backData['diagnoseType_all'];
                case '1':
                    return backData['diagnoseType_medicine'];
                case '2':
                    return backData['diagnoseType_diagnose'];
            }
        }
        else {
            return "传参错误，请检查传入数据！"
        }
    }
    else{
        return "参数不能为空！"
    }
}

module.exports = {
    T75,
    T77,
    T78,
    T54
}