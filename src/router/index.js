import React from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import Index from '../pages/index/index';
import About from '../pages/about/index';
import Scene from '../pages/scene/index';
import User from '../pages/user/index';


class RouterIndex extends React.Component{
	
	render(){
		return (
			<CacheSwitch>
				<CacheRoute when="always" path="/index" component={Index} />
				<CacheRoute when="always" path="/about" component={About} />
				<CacheRoute when="always" path="/user" component={User} />
				<CacheRoute when="always" path="/scene" component={Scene} />
			</CacheSwitch>
			
		);
	}
	
}

export default RouterIndex;