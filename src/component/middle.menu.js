import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MyMiddleMenu extends React.Component{
	
	constructor(arg) {
	    super(arg);
		let _this = this;
		this.state = {
			activeObj:{
				key: 1,
				level: 2,
				link: '/index',
				parentKey: 'sub1',
				txt: '列表',
				childs: [],
			},
			pages: [
				{
					key: 'sub1',
					level: 1,
					parentKey: '',
					txt: '基本信息',
					childs: [
						{
							key: 1,
							level: 2,
							link: '/index',
							parentKey: 'sub1',
							txt: '列表',
							childs: [],
							
						},
						{
							key: 2,
							level: 2,
							link: '/about',
							parentKey: 'sub1',
							txt: '树形结构',
							childs: [],
							
						},
						{
							key: 3,
							level: 3,
							link: '/user',
							parentKey: 'sub1',
							txt: '用户管理',
							childs: [],
							
						},
					]
				},
				{
					key: 'sub2',
					level: 1,
					txt: '未处理',
					childs: [
						{
							key: 3,
							level: 2,
							link: '/scene',
							parentKey: 'sub2',
							txt: '同类案件',
							childs: [],
							
						},
						{
							key: 4,
							level: 2,
							link: '/suspect',
							parentKey: 'sub2',
							txt: '同类嫌疑人',
							childs: [],
							
						}
					]
				}
				
			]
		}	
	}
	
	componentWillMount(){
		
		let url = window.location.pathname;
		let activeObj = {};
		this.state.pages.forEach(item=>{
			item.childs.forEach(p=>{
				if(p.link == url){
					activeObj = {...p};
				}
			})
			
		});
		
		this.setState({
			activeObj: activeObj
		})
		
	}
	

	render(){
	
		let currentKey = this.state.activeObj.key+"";
		let curentOpenKey = this.state.activeObj.parentKey;
		
		return (
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu
					mode="inline"
					defaultSelectedKeys={[currentKey]}
					defaultOpenKeys={[curentOpenKey]}						
					style={{ height: '100%' }}>
					
					{
						this.state.pages.map((item)=>{
							return (
								<SubMenu key={item.key} title={<span>{item.txt}</span>}>
									{
										item.childs.map(p=>{
											return (
												<Menu.Item key={p.key}>
													<Link to={p.link}>{p.txt}</Link>
												</Menu.Item>
											)
										})
									}
								
								</SubMenu>
							)
							
						})
						
					}
				</Menu>
			</Sider>
		);
	}
}

export default MyMiddleMenu;