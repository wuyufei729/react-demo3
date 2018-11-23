import React from 'react';
import { Table, Divider, Tag, Tree,Col,Row,Popconfirm } from 'antd';
import {connect} from 'react-redux';
import {dataColumns} from './data';
import MyTree from './mytree';
import axios from 'axios';






class Index extends React.Component{
	
	constructor(arg) {
	    super(arg);
			this.state = {
				origin: [],
				currentRights: [],
				page: 1,
				selectedRowIndex: 0,
				columns: []
			}
			this.filterData = this.filterData.bind(this);
			this.rowClick = this.rowClick.bind(this);
			this.getRowClassName = this.getRowClassName.bind(this);
			
			
			/* axios.get('/api/todos').then(function(response){
				debugger;
				console.log(response);//请求正确时执行的代码
			}).catch(function (response){
				debugger;
				console.log(response);//发生错误时执行的代码
			}); */
	
			
			
			
	}
	
	componentDidMount(){		
		this.getData();
		/* let columns = this.getColumns();
		this.setState({
			origin: [...this.props.data],
			columns: [...columns]
		}); */
		
	}
	
	
	getData(){
		var _this = this;
		this.props.dispatch((dispatch)=>{
			fetch('/api/todos')
			  .then(res => res.json())
			  .then(res => {
					dispatch({
						type: "LIST_UPDATA_SUCC",
						data: res.data
					});
					
					let comumns = this.getColumns(res.columns);
					
					_this.setState({
						origin: res.data,
						columns: comumns
					});
			  })
			
			
		});
		
	}
	
	
	
	getColumns(originColumn){
		let columns = [];
		var _this = this;
		
		originColumn.forEach(item=>{
			let obj = {
				title: item.title,
				dataIndex: item.key,
				key: item.key
			};
			if(item.key == 'name'){
				obj.render = text=> (<a href='javascript:;'>{text}</a>);
			}else if(item.key == 'tags'){
				obj.render = tags=> (<span>{tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}</span>)
			}else if(item.key == 'operate'){
				obj.render = function (text,record){
					return (
					<div>
						<a href="javascript:;">Invate {record.name}</a>
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
	
	
	deleteRowItem(key){
		
		var dataSource = this.state.origin.filter(item=>item.key != key);
		this.setState({
			origin: dataSource
		});
		
		this.props.dispatch((dispatch)=>{
			
			dispatch({
				type: "LIST_DELETE",
				data: [...dataSource]
			})
		
		});
		
	}
	
	filterData(e){
		let showList = [];
		if(e.target.value == null || e.target.value == ''){
			showList = this.state.origin;
		}else{
			showList = [...this.state.origin.filter(item=>item.name.indexOf(e.target.value) > -1)];
		}
		
		this.props.dispatch((dispatch)=>{
			 dispatch({
				 type:"LIST_FILTER",
				 data: showList
			 });
			}
		);
		
		
	}
	
	
	rowClick(record,rowkey){
		let userRights = record.right;
		
		this.setState({
			currentRights: [...userRights]
		});		
		
		//this.refs.changeConfig.onChangeConfig(userRights);
		//var chid = this.refs.child.getWrappedInstance();
		
		this.childd.wrappedInstance.onChangeConfig(userRights);
		
		
		this.setState({
			selectedRowIndex: rowkey
		});
		
		
	}

	

	
	getRowClassName(record, index){
		if(index == this.state.selectedRowIndex){
			return "table-row-selected";
		}
		return "";
	}
			
			
	componentWillMount(){
		//dataColumns
		
		
	}
	

	
	render(){
		
		var test = this.props;
		
		let pagination = {
				current: this.state.page,
				pageSize: 3,
				total: test.data.length,
				onChange:((current)=>{
						this.setState({
								page: current
						});
				})
		};
		
		return (
		<div>
			<Row className="wrap">
				<Col md={16}>
					<input type='text' onChange={this.filterData.bind(this)} />
					<Table 
							columns={this.state.columns} 
							dataSource={test.data} 
							rowClassName={this.getRowClassName}
							onRow={(record,rowkey)=>{
				                return{
				                    onClick : this.rowClick.bind(this,record,rowkey) 
				                }
							}}
							pagination = {pagination}
							
							
						/>
				</Col>
				
				<Col md={8}>
					<MyTree ref={(childd)=>{this.childd = childd;}} myConfig={this.state.currentRights} />
					
				</Col>
				
				
			</Row>
			
		</div>
		);
		
	}
	
}

export default connect(state=>(state.userList))(Index);
//export default Index;
