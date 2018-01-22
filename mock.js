window.global = {
    '/login': function (user) {
        if ("admin" == user.name && "123456" == user.password) {
            return user;
        } else {
            return null;
        }
    },
    '/listTreeData': function () {
        var data = [{
            label: '一级 1',
            children: [{
                label: '二级 1-1',
                children: [{
                    label: '三级 1-1-1'
                }]
            }]
        }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                    label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                    label: '三级 2-2-1'
                }]
            }]
        }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                    label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                    label: '三级 3-2-1'
                }]
            }]
        }];
        return data;

    },
    '/listTableData': function () {
        var data = [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }];
        return data;

    },
    '/list': ['a', 'b', 'c'],
    mockStatus: true
};