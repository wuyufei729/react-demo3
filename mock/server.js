var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/',function(ctx,next){
	console.log('say');
	ctx.body = 'hello koa!';
});

//加前缀
router.prefix('/api');

//模拟json数据
var todo = require('./todo.js');
router.get('/todos',function(ctx,next){
	console.log('--todo--');
	ctx.body = todo;
})


var ztree = require('./ztreeData.js');
router.get('/getZtreeData',function(ctx,next){
	console.log('获取ztree数据入口');
	ctx.body = todo;
})

var sceneData = require('./sceneListData.js');
router.get('/getSceneListData',function(ctx,next){
	console.log("连接后台获取案件列表数据");
	ctx.body = sceneData;
})
//****************************测试数据开始**************************************

var userData = require('./userListData.js');
router.get('/getUserList',function(ctx,next){
	console.log("获取用户列表信息");
	ctx.body = userData;
});

var deptData = require('./deptListData.js');
router.get('/getDeptList',function(ctx,next){
	console.log("获取单位列表信息");
	ctx.body = deptData;
});


//开始服务并生成路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(4000);