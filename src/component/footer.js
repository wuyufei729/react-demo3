import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MyFooter extends React.Component{
	
	render(){
		return (
			<Footer style={{ textAlign: 'center' }}>
			  Ant Design ©2018 Created by Ant UED
			</Footer>
			
			
		);
		
	}
	
}

export default MyFooter;