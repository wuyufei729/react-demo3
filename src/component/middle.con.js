import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Table, Divider, Tag } from 'antd';
import RouterIndex from '../router/index';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





class MyMiddleCon extends React.Component{
	
	render(){
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<RouterIndex />
			</Content>
		);
		
	}
	
}

export default MyMiddleCon;