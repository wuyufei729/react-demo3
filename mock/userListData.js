var userListData = [];

for (var i = 1; i < 20; i++) {
	userListData.push({
		key: 'aaaaaa' + i,
		userId: 'uuuuuuuu' + i,
		userName: '张三' + i,
		deptId: '110' + i,
		deptName: '北京市公安局' + i
	});
}

const dataColumns = [
	{
		title: '账号',
		key: 'Account'
	},
	{
		title: '用户名',
		key: 'Name'
	},
	{
		title: '所属部门',
		key: 'Organizations'
	},
	{
		title: '创建时间',
		key: 'CreateTime'
	},
	{
		title: 'ID',
		key: 'Id'
	}
];



var listData = {
	"code": 200,
	"msg": "加载成功",
	"count": 6,
	"data": [{
		"Id": "49df1602-f5f3-4d52-afb7-3802da619558",
		"Account": "admin",
		"Name": "admin",
		"Sex": 1,
		"Status": 0,
		"Type": 0,
		"CreateTime": "2017-12-11 16:18:54",
		"CreateUser": "",
		"Organizations": "研发小组,研发部",
		"OrganizationIds": "08f41bf6-4388-4b1e-bd3e-2ff538b44b1b,990cb229-cc18-41f3-8e2b-13f0f0110798"
	}, {
		"Id": "6ba79766-faa0-4259-8139-a4a6d35784e0",
		"Account": "test",
		"Name": "test",
		"Sex": 1,
		"Status": 0,
		"Type": 0,
		"CreateTime": "2017-12-11 16:19:00",
		"CreateUser": "",
		"Organizations": "研发小组,研发部",
		"OrganizationIds": "08f41bf6-4388-4b1e-bd3e-2ff538b44b1b,990cb229-cc18-41f3-8e2b-13f0f0110798"
	}, {
		"Id": "de8be521-f1ec-4483-b124-0be342890507",
		"Account": "test2",
		"Name": "test2",
		"Sex": 1,
		"Status": 1,
		"Type": 0,
		"CreateTime": "2017-12-11 16:19:06",
		"CreateUser": "",
		"Organizations": "研发小组",
		"OrganizationIds": "08f41bf6-4388-4b1e-bd3e-2ff538b44b1b"
	}, {
		"Id": "229f3a49-ab27-49ce-b383-9f10ca23a9d5",
		"Account": "test3",
		"Name": "test3",
		"Sex": 1,
		"Status": 1,
		"Type": 0,
		"CreateTime": "2017-12-12 14:07:05",
		"CreateUser": "",
		"Organizations": "汇丰软件部",
		"OrganizationIds": "86449128-d5ac-44bf-b999-f7735b7458fd"
	}, {
		"Id": "1df68dfd-3b6d-4491-872f-00a0fc6c5a64",
		"Account": "test4",
		"Name": "test4",
		"Sex": 1,
		"Status": 1,
		"Type": 0,
		"CreateTime": "2017-12-12 14:07:11",
		"CreateUser": "",
		"Organizations": "汇丰软件部",
		"OrganizationIds": "86449128-d5ac-44bf-b999-f7735b7458fd"
	}, {
		"Id": "0ceff0f8-f848-440c-bc26-d8605ac858cd",
		"Account": "test5",
		"Name": "test5",
		"Sex": 1,
		"Status": 1,
		"Type": 0,
		"CreateTime": "2018-03-15 09:19:05",
		"CreateUser": "",
		"Organizations": "汇丰软件部",
		"OrganizationIds": "86449128-d5ac-44bf-b999-f7735b7458fd"
	}]
}



module.exports = listData;
