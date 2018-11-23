var data = [
	{
		key: '122222',
		name: '周杰伦',
		right: ['N01E01E', 'N02E02E', 'N03E'],
		age: 32,
		address: '北京市海淀区',
		tags: ['nice', 'developer'],
	},
	{
		key: '122292',
		name: '周杰',
		right: ['N01E03E', 'N02E02E', 'N03E'],
		age: 32,
		address: '北京市海淀区',
		tags: ['nice', 'developer'],
	},
	{
		key: '2666666',
		name: '吴克群',
		right: ['N01E01E02E', 'N01E02E', 'N03E'],
		age: 42,
		address: '大连市甘井子区',
		tags: ['loser'],
	},
	{
		key: '38887878',
		name: '叫你露露',
		right: [],
		age: 32,
		address: '纽约皇后区',
		tags: ['cool', 'teacher'],
	},
	{
		key: '26667756',
		name: '希必地',
		right: ['N01E01E02E', 'N01E02E', 'N03E'],
		age: 42,
		address: '大连市甘井子区',
		tags: ['loser'],
	},
	{
		key: '2666776',
		name: '达克斯',
		right: ['N01E01E02E', 'N01E02E', 'N03E'],
		age: 42,
		address: '大连市甘井子区',
		tags: ['loser'],
	},
	{
		key: '2666656',
		name: '无浮云',
		right: ['N01E01E02E', 'N01E02E', 'N03E'],
		age: 42,
		address: '大连市甘井子区',
		tags: ['loser'],
	}
];

const dataColumns = [
	{
		title: '名字',
		key: 'name'
	},
	{
		title: '年龄',
		key: 'age'
	},
	{
		title: '权限',
		key: 'right'
	},
	{
		title: '地址',
		key: 'address'
	},
	{
		title: '标签',
		key: 'tags'
	},
	{
		title: '操作',
		key: 'operate'
	}
	
];

module.exports = {
	columns: dataColumns,
	data: data
	
};
