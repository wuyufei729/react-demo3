import React,{Component} from 'react';
import {Tree,message,Spin} from 'antd';
import axios from 'axios';

const TreeNode = Tree.TreeNode;

class DeptZtree extends Component{
	constructor(arg){
		super(arg);
		this.state = {
			expandedKeys: [],
			autoExpandParent: true,
			defaultExpandAll: true,
			selectedKeys: [],
			data: []
		}
	}
	
	componentDidMount(){
		var _this = this;
		//var url = "/UserSession/GetOrgs";
		var url = "/api/getDeptList";
		axios.get(url).then(function(response){
			var res = _this.packageTreeData(response.data);
			_this.setState({
				data: res
			});
		}).catch(function(response){
			message.error('获取部门数据失败！');
		});
		
	}
	
	//对于树型结构数据进行封装
	packageTreeData(list){
		
		var top = {
			Id: null,
			Name: "单位"
		};		
		
		var consotructChildren=function(parent,depts){
			parent['title'] = parent.Name;
			parent['key'] = parent.Id;
			parent["children"]=depts.filter(d=>d.ParentId==parent.Id);
			if(parent.children&&parent.children.length>0){
				parent.children.forEach(c=>consotructChildren(c,depts));
			}
		};
		consotructChildren(top,list);
		return [top];
	}
	
	
	


	onExpand = (expandedKeys) => {
		console.log('onExpand', expandedKeys);
		// if not set autoExpandParent to false, if children expanded, parent can not collapse.
		// or, you can remove all expanded children keys.
		this.setState({
			expandedKeys,
			autoExpandParent: false,
		});
	}

	

	onSelect = (selectedKeys, info) => {
		console.log('onSelect', info);
		this.setState({
			selectedKeys
		});
		this.props.handleSelectDept(selectedKeys[0]);
	}

	renderTreeNodes = (data) => {
		return data.map((item) => {
			if (item.children) {
				return ( 
				<TreeNode 
					title = {item.title}
					key = {item.key}
					dataRef = {item} > 
					
					{
						this.renderTreeNodes(item.children)
					} 
					</TreeNode>
				);
			}
			return <TreeNode { ...item
			}
			/>;
		});
	}
	
	componentWillReceiveProps(nextProps){
	}
	
	render(){
		if(this.state.data&& this.state.data.length>0){
			return (
				<Tree checkable 
					checkable = {false}
					defaultExpandAll = {true}
					onExpand = {
						this.onExpand
					}
					
					onSelect = {
						this.onSelect
					}
					
					selectedKeys = {
						this.state.selectedKeys
					} > {
						this.renderTreeNodes(this.state.data)
					} 
				</Tree>
			);
		}else{
			return(
				<h1>暂无数据</h1>
			);
		}
		
	}
	
}

export default DeptZtree;