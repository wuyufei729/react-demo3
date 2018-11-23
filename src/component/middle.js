import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyMiddleMenu from './middle.menu';
import MyMiddleCon from './middle.con';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MyMiddle extends React.Component{
	
	render(){
		return (
			<Content style={{ padding: '0 50px' }}>
			  <Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			  </Breadcrumb>
			  <Layout style={{ padding: '24px 0', background: '#fff' }}>
				<MyMiddleMenu />
				<MyMiddleCon />
			  </Layout>
			</Content>
			
		);
		
	}
	
}

export default MyMiddle;