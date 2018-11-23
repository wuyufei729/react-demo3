import React,{Component} from 'react';
import DeptZtree from './deptZtree';
import UserList from './userList';
import {Row,Col} from 'antd';

class User extends Component{
	constructor(arg){
		super(arg);
		this.state = {
			deptData: [],
			userData: [],
			userColumns: [],
			
		}
	}
	
	
	handSelectDept(deptId){
		//通知用户列表获取单位为deptId的用户
		this.userTag.getUserDataByDeptId(deptId);
	}
	
	
	render(){
		return (
			<div>
				<Row className="wrap">
					<Col md={4}>
						<DeptZtree 
							ref={(deptTag)=>{this.deptTag = deptTag;}} 
							handleSelectDept = {this.handSelectDept.bind(this)} />					
					</Col>
					<Col md={20}>
						<UserList ref={(userTag)=>{this.userTag = userTag;}} />
						
					</Col>
				</Row>
				
			</div>
		);
		
	}
}

export default User;