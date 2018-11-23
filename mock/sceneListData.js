 var sceneListData = [];

for(var i = 1;i< 40;i++){
	sceneListData.push({
		key: 'asdccadfsdf'+i,
		uSceneId: 'K999996'+i,
		caseType: 'N6E0'+i+'E',
		caseTypeName: '侵犯财产案'+i,
		means: 'N7E0'+i+'E',
		meansName: '窃取手段'+i,
		caseStatus: 'N8E0'+i+'E',
		caseStatusName: '未立案'+i,
		inputTime: '2018-11-'+i
		
	});
}


const dataColumns = [
	{
		title: '案件编号',
		key: 'key'
	},
	{
		title: '现勘编号',
		key: 'uSceneId'
	},
	{
		title: '案件类别编号',
		key: 'caseType'
	},
	{
		title: '案件类别名称',
		key: 'caseTypeName'
	},
	{
		title: '作案手段编号',
		key: 'means'
	},
	{
		title: '作案手段名称',
		key: 'meansName'
	},
	{
		title: '案件状态编号',
		key: 'caseStatus'
	},
	{
		title: '案件状态名称',
		key: 'caseStatusName'
	},
	{
		title: '录入时间',
		key: 'inputTime'
	},
	{
		title: '操作',
		key: 'operate'
	}
	
];



module.exports = {
	columns: dataColumns,
	data: sceneListData
};