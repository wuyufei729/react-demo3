import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import MyHeader from './component/header.js';
import MyFooter from './component/footer.js';
import MyMiddle from './component/middle.js';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
				<MyHeader />
				<MyMiddle />
				<MyFooter />
			</Layout>
    );
  }
}

export default App;
