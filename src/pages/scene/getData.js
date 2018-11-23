
import axios from 'axios';


export function getSceneListData(){
	axios.get('/api/todos').then(function(response){
		debugger;
		console.log(response);//请求正确时执行的代码
	}).catch(function (response){
		debugger;
		console.log(response);//发生错误时执行的代码
	});
	
	
	
}

