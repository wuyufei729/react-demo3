import React from 'react';
import { TreeSelect } from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
{
  title: 'Node1',
  value: 'N01E',
  key: 'N01E',
  children: [{
    title: 'Child Node1',
    value: 'N01E01E',
    key: 'N01E01E',
  }],
}, 
{
  title: 'Node2',
  value: 'N02E',
  key: 'N02E',
  children: [{
    title: 'Child Node3',
    value: 'N02E01E',
    key: 'N02E01E',
  }, {
    title: 'Child Node4',
    value: 'N02E02E',
    key: 'N02E02E',
  }, {
    title: 'Child Node5',
    value: 'N02E03E',
    key: 'N02E03E',
  }],
}];


class About extends React.Component{

	state = {
		value: ['N02E02E'],
	}
	

	onChange = (value) => {
	  console.log('onChange ', value);
	  this.setState({ value });
	}
	
	
	/* componentWillMount () {
		alert("componentWillMount");
	}
	componentDidMount () {
		alert("componentDidMount");
	}
	componentWillReceiveProps (nextProps) {
		alert("componentWillReceiveProps");
	}
	shouldComponentUpdate (nextProps,nextState) {
		alert("shouldComponentUpdate");
	}
	componentWillUpdate (nextProps,nextState) {
		alert("componentWillUpdate");
	}
	componentDidUpdate (prevProps,prevState) {
		alert("componentDidUpdate");
	}
	componentWillUnmount(){
		alert("componentWillUnmount");
	}
 */
	
	render(){
		const tProps = {
		  treeData,
		  value: this.state.value,
		  onChange: this.onChange,
		  treeCheckable: true,
		  showCheckedStrategy: TreeSelect.SHOW_ALL,
		  searchPlaceholder: 'Please select',
		  style: {
			width: 300,
		  }
		};
		
		return (
			<TreeSelect {...tProps} />
		);
	}
	
}

export default About;
