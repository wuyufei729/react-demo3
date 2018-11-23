import React,{Component} from 'react';
import {Table,Divider,message, Button,Tag,Popconfirm,Modal,Input} from 'antd';
import axios from 'axios';
import {getSceneListData} from './getData';
import EditDialog from './editDialog';
//import Filter from './filter';
//import DetailDialog from '../../component/detail';
import DetailDialog from 'everspry-detail-dialog';
import 'everspry-top-nav/src/font/iconfont.css';
import 'everspry-top-nav/src/font/iconfont.eot';
//import 'everspry-top-nav/src/font/iconfont.js';
//import 'everspry-top-nav/src/font/iconfont.svg';
import 'everspry-top-nav/src/font/iconfont.ttf';
import 'everspry-top-nav/src/font/iconfont.woff';
import {Alert,Confirm} from 'everspry-top-nav';



class Scene extends Component{
	constructor(arg){
		super(arg);
		this.state = {
			listData:{
				columns: [],
				data: []				
			},
			pageData:{
				pageSize: 0,
				total: 0,
				currentPage: 0,
				totalPage: 0
			},			
			selectedRowIndex: 0
		}
		this.rowClick = this.rowClick.bind(this);
		this.getRowClassName = this.getRowClassName.bind(this);	
		this.showEditDialog = this.showEditDialog.bind(this);
		this.handleEditOk = this.handleEditOk.bind(this);
		this.handleEditCancel = this.handleEditCancel.bind(this);
	}
	
	//
	componentDidMount(){
		var _this = this;
		//1.请求列表数据 2.请求筛选器数据 3.请求分页数据
		axios.get('/api/getSceneListData').then(function(response){
			var res = response.data;
			var columns = _this._packageColumns(res.columns);			
			_this.setState({
				listData: {
					columns: columns,
					data: res.data
				}
			});
			
					
		}).catch(function (response){
			//发生错误时执行的代码
			message.error('获取案件列表数据失败！');
		});
		
	}
	
	//对表头包装
	_packageColumns(originColumn){
		let columns = [];
		var _this = this;	
		originColumn.forEach(item=>{
			let obj = {
				title: item.title,
				dataIndex: item.key,
				key: item.key
			};
			if(item.key == 'uSceneId'){
				obj.render = text=> (<a href='javascript:;'>{text}</a>);
			}else if(item.key == 'operate'){
				obj.render = function (text,record){
					return (
					<div>
						<a href='javascript:;' onClick={_this.showDetailDialog.bind(_this,record.key)}>详情</a>
						<Divider type="vertical" />
						<a href='javascript:;' onClick={_this.showEditDialog.bind(_this,record.key)}>编辑</a>
						<Divider type="vertical" />
						<Popconfirm title="确定删除？" onConfirm={_this.deleteRowItem.bind(_this,record.key)}>
							<a href='javascript:;'>删除</a>
						</Popconfirm>
					</div>
					)
				}				
			}
			
			columns.push(obj);
			
		});
		
		return columns;
		
	}
	
	//删除某一项
	deleteRowItem(key){		
		let arr = [...this.state.listData.data];
		arr.splice(arr.findIndex(v => v.key === key), 1);
		this.setState({
			listData: {...this.state.listData,...{data: arr}}
		});
		message.success("删除成功！");
	}
	
	//获取行数据的class样式
	getRowClassName(record,index){
		if(index == this.state.selectedRowIndex){
			return "table-row-selected";
		}
		return  "";
	}
	
	//行点击事件
	rowClick(record,rowkey){
		this.setState({
			selectedRowIndex: rowkey
		});
	}
	
	//显示详情
	showDetailDialog(rowkey){
		
		var item = this.state.listData.data.filter(p=>p.key==rowkey)[0];
		
		var targetData = {
			columns: this.state.listData.columns,
			data: {...item}
		}
	
		this.detailForm.showDialog(targetData);
	}
	
	
	
	//显示编辑框
	showEditDialog(rowkey){
		var item = this.state.listData.data.filter(p=>p.key==rowkey)[0];
		this.editForm.showDialog({...item});				
	}
	
	//编辑保存
	handleEditOk(resultItemData){
		message.warn("你点击了保存编辑");
		const newEditModel = resultItemData;
		//构造新的数组列表
		let suchData = [...this.state.listData.data];
		for(var i=0;i<suchData.length;i++){
			var item = suchData[i];
			if(item.key == newEditModel.key){
				suchData[i] = {...newEditModel};
				break;
			}
		}
			
		//axios.get('./api/updateSceneDataById',{sceneId: '99999'})
				
		//前端更新
		this.setState({
			listData:{...this.state.listData,...{data: suchData}}
		});
		setTimeout(() => {		  
		  this.editForm.closeDialog();		  
		}, 500);
	}
	//取消编辑弹出框
	handleEditCancel(){
		this.editForm.closeDialog();
	}
	
	//执行查询
	/* doQuery(filterObj){
		if(filterObj == null) return;
		let filtedData = [...this.state.listData.data.filter];
		
		filtedData = filtedData.filter(data=>data{
			for(var attr in filterObj){
				var filterItem = filterObj[attr];
				//判断是否是数组
				if(Array.prototype.isPrototypeOf(filterItem)){
					var isValide = false;
					filterItem.map(filter=>{
						if(filter.code == data[attr]){
						}
					})
				}else{
				}
				if()filterObj[attr]
			}
		});				
		
	} */
	
	
	render(){
		
		let pagination = {
			current: this.state.pageData.currentPage,
			pageSize: this.state.pageData.pageSize,
			total: this.state.listData.data.length,//分页暂时先用数据的总数
			onChange: (current)=>{
				this.setState({
					pageData: {...this.state.pageData,...{page: current}}
				})
			}
		}
						
		return (
			<div>
				<h2><i className="icon iconfont icon-icon-test158"></i>案件列表</h2>
				<Alert/>
				<Confirm />
				
				
				<Table
					columns={this.state.listData.columns}
					dataSource={this.state.listData.data}
					
					rowClassName = {this.getRowClassName}
					onRow = {(record,rowkey)=>{
						return {
							onClick: this.rowClick.bind(this,record,rowkey)
						}
					}}
				>
				</Table>
				
								
				<EditDialog ref={(editForm)=>{this.editForm = editForm}} handleEditOk = {this.handleEditOk.bind(this)} />
											
				<DetailDialog ref={(detailForm)=>{this.detailForm = detailForm}} />
				
			</div>
		);
	}
	
}

export default Scene;