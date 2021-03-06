var deptList = [];

for (var i = 1; i < 10; i++) {
	var childrenList = [];
	for (var j = 1; j < 4; j++) {
		childrenList.push({
			title: '北京市公安局' + i + "-" + j,
			key: '110' + i + "-" + j,
			deptId: '110' + i + "-" + j,
			deptName: '北京市公安局' + i + "-" + j,
			children: []
		});
	}
	deptList.push({
		title: '北京市公安局' + i,
		key: '110' + i,
		deptId: '110' + i,
		deptName: '北京市公安局' + i,
		children: childrenList
	});
};

var list = [{
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": false,
	"IconName": "",
	"Status": 0,
	"BizCode": "0",
	"CustomCode": "",
	"CreateTime": "2016-10-14 11:40:31",
	"CreateId": 0,
	"SortNo": 1,
	"TypeName": null,
	"TypeId": null,
	"ParentId": "990cb229-cc18-41f3-8e2b-13f0f0110798",
	"ParentName": "研发部",
	"CascadeId": ".0.1.3.1.",
	"Name": "研发小组",
	"Id": "08f41bf6-4388-4b1e-bd3e-2ff538b44b1b"
}, {
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": false,
	"IconName": "",
	"Status": 0,
	"BizCode": "",
	"CustomCode": "",
	"CreateTime": "2018-11-20 15:48:48",
	"CreateId": 0,
	"SortNo": 1,
	"TypeName": "",
	"TypeId": "",
	"ParentId": "990cb229-cc18-41f3-8e2b-13f0f0110798",
	"ParentName": "研发部",
	"CascadeId": ".0.1.3.2.",
	"Name": "123",
	"Id": "4b07cc0d-bc32-46b7-b635-35b27076ad57"
}, {
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": false,
	"IconName": "",
	"Status": 0,
	"BizCode": "0",
	"CustomCode": "",
	"CreateTime": "2016-10-14 11:37:13",
	"CreateId": 0,
	"SortNo": 0,
	"TypeName": null,
	"TypeId": null,
	"ParentId": null,
	"ParentName": "根节点",
	"CascadeId": ".0.1.",
	"Name": "集团总部",
	"Id": "543a9fcf-4770-4fd9-865f-030e562be238"
}, {
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": false,
	"IconName": "",
	"Status": 0,
	"BizCode": "0",
	"CustomCode": "",
	"CreateTime": "2016-05-26 15:11:03",
	"CreateId": 0,
	"SortNo": 1,
	"TypeName": null,
	"TypeId": null,
	"ParentId": "c36e43df-3a99-45da-80d9-3ac5d24f4014",
	"ParentName": "汇丰",
	"CascadeId": ".0.2.1.",
	"Name": "汇丰软件部",
	"Id": "86449128-d5ac-44bf-b999-f7735b7458fd"
}, {
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": true,
	"IconName": "",
	"Status": 0,
	"BizCode": "0",
	"CustomCode": "",
	"CreateTime": "2016-04-16 13:03:41",
	"CreateId": 0,
	"SortNo": 0,
	"TypeName": null,
	"TypeId": null,
	"ParentId": "543a9fcf-4770-4fd9-865f-030e562be238",
	"ParentName": "集团总部",
	"CascadeId": ".0.1.3.",
	"Name": "研发部",
	"Id": "990cb229-cc18-41f3-8e2b-13f0f0110798"
}, {
	"HotKey": "",
	"IsLeaf": false,
	"IsAutoExpand": false,
	"IconName": "",
	"Status": 0,
	"BizCode": "0",
	"CustomCode": "",
	"CreateTime": "2016-05-26 15:10:40",
	"CreateId": 0,
	"SortNo": 1,
	"TypeName": null,
	"TypeId": null,
	"ParentId": null,
	"ParentName": "根节点",
	"CascadeId": ".0.2.",
	"Name": "汇丰",
	"Id": "c36e43df-3a99-45da-80d9-3ac5d24f4014"
}];


module.exports = list;
