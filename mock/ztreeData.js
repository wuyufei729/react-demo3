const treeData = [
{
    title: '案件现场',
    key: 'N01E',
    children: [
	{
        title: '编辑案件',
        key: 'N01E01E',
        children: [{
            title: '编辑案件列表',
            key: 'N01E01E01E'
        },
        {
            title: '编辑案件图片',
            key: 'N01E01E02E'
        },
        {
            title: '编辑案件详情',
            key: 'N01E01E03E'
        },
        ],
    },
    {
        title: '删除案件',
        key: 'N01E02E',
        children: [{
            title: '删除案件列表',
            key: 'N01E02E01E'
        },
        {
            title: '删除案件图片',
            key: 'N01E02E02E'
        },
        {
            title: '删除案件详情',
            key: 'N01E02E03E'
        },
        ],
    },
    {
        title: '新建案件',
        key: 'N01E03E',
    },
	],
},
{
    title: '嫌疑人',
    key: 'N02E',
    children: [{
        title: '编辑嫌疑人',
        key: 'N02E01E'
    },
    {
        title: '删除嫌疑人',
        key: 'N02E02E'
    },
    {
        title: '新建嫌疑人',
        key: 'N02E03E'
    },
    ],
},
{
    title: '鞋样',
    key: 'N03E',
}];


module.exports = treeData;