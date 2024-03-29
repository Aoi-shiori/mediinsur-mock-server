///参考用示例代码

let Mock = require('mockjs');

let db=Mock.mock({
    'data|50-100':[{
        id:'@id',
        name:'@cname',
        'age|18-100':1,
        create_time:'@datetime',
        avatar:function() {
            return Mock.Random.image('100x100',Mock.Random.color(),Mock.Random.string('upper', 3))
        },
        address:'@county(true)',
        email:'@email',
        love_color:'@color',
        'description':'@csentence(20, 40)'
    }]
});



module.exports = function (app) {

    //获取列表数据
    app.get('/api/users', function (req, res) {
        console.log('接收到請求')
        let str ='';
        for (let i in db.data){
            str += i+'|'+db.data[i].name

        }
        console.log('能否取值',str)
        let pagesize = req.headers && req.headers.pagesize;
        let current = req.headers && req.headers.current;
        console.log(pagesize)
        res.status(200).json(current)

    });

    //获取单个详情
    app.get('/api/users/:id', function (req, res) {

        let id = req.params.id;
        let info = {
            data: {}
        };
        db.data.map(item => {
            if (item.id == id) {
                info.data = item
            }
        })

        res.status(200).json(info);

    });

    //新增一条数据post
    app.post('/api/users', function (req, res) {

        let user = req.body;
        user.id = Mock.mock('@id');
        db.data.push(user);

        res.status(200).json(user);

    });

    //修改一条数据put
    app.put('/api/users/:id', function (req, res) {

        let id = req.params.id;
        let user = req.body;
        user.id = id;
        db.data.map((item, index) => {
            if (item.id == id) {
                db.data[index] = user;
            }
        })

        res.status(200).json(user);

    });

    //删除一条数据delete
    app.delete('/api/users/:id', function (req, res) {

        let id = req.params.id;
        db.data.map((item, index) => {
            if (item.id == id) {
                db.data.splice(index, 1);
            }
        })

        res.status(200).json({id: id});

    });
}