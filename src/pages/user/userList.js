import React,{Component} from 'react';
import {Table, Divider, Tag, Tree,Col,Row,Popconfirm,message,Spin} from 'antd';
import axios from 'axios';

class UserList extends Component{
	constructor(arg){
		super(arg);
		this.state = {
			page: 1,
			total: 0,
			columns:[				
				{
					title: '账号',
					key: 'Account',
					dataIndex: 'Account'
				},
				{
					title: '创建时间',
					key: 'CreateTime',
					dataIndex: 'CreateTime'
				},
				{
					title: 'ID',
					key: 'Id',
					dataIndex: 'Id'
				},
				{
					title: '用户名',
					key: 'Name',
					dataIndex: 'Name'
				},
				{
					title: '所属部门',
					key: 'Organizations',
					dataIndex: 'Organizations'
				}
				
				
				
			],
			pageSize: 3,
			data:[]
		}
		this.getUserDataByDeptId = this.getUserDataByDeptId.bind(this);
	}
	
	getUserDataByDeptId(deptId){
		var _this = this;
		//var url = "/UserManager/Load?page=1&limit=10&orgId="+deptId;
		var url = "/api/getUserList";
		axios.get(url).then(function(response){
			var res = _this.packageUserListAddKey(response.data.data);
			var ress = [];
			if(deptId == null || deptId == "" || deptId == "null"){
				ress = res;
			}else{
				ress = res.filter(p=>p.OrganizationIds.indexOf(deptId) != -1);
			}
			
			_this.setState({
				
				data: ress,
				total: ress.length
			});
		}).catch(function(response){
			message.error('根据deptId获取案件列表数据失败！');
		});
		
		
	}
	
	packageUserListAddKey(list){
		list.forEach(item=>{
			item['key'] = item.Id;
		})
		return list;
	}
	
	
	componentDidMount(){
		var _this = this;
		//var url = "/UserManager/Load?page=1&limit=10&orgId=";
		var url = "/api/getUserList";
		axios.get(url).then(function(response){
			var res = _this.packageUserListAddKey(response.data.data);
			_this.setState({
				data: res,
				total: res.length
			});
		}).catch(function(response){
			message.error('获取案件列表数据失败！');
		});
		
		_this._packageColumns(this.state.columns);
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
			if(item.key == 'Name'){
				obj.render = text=> (<a href='javascript:;'>{text}</a>);
			}else if(item.key == 'operate'){
				obj.render = function (text,record){
					return (
					<div>
						<a href='javascript:;'>详情</a>
						<Divider type="vertical" />
						<a href='javascript:;'>编辑</a>
						<Divider type="vertical" />
						<Popconfirm title="确定删除？">
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
	
	render(){
		//if(this.state.data == null) return ;
		let columns = this.state.columns;
		let data = this.state.data;
		if(data && data.length>0){
			let pagination = {
				current: this.state.page,
				pageSize: this.state.pageSize,
				total: data.length,//分页暂时先用数据的总数
				onChange: (current)=>{
					this.setState({
						page: current
					})
				}
			}
			
			return (
				<Table 
					columns={columns}
					dataSource={data}	
					pagination = {pagination}
				
					/>
			);
		}else{
			return (
				<h1>暂无数据</h1>
			);
		}
		
		
	}
	
}

export default UserList;