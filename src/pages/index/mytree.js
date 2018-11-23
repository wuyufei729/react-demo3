import React, {Component} from 'react';
import {treeData} from './data';
import {Tree} from 'antd';
import {connect} from 'react-redux';

const TreeNode = Tree.TreeNode;


class MyTree extends Component {

	constructor(props) {
		super(props);

		this.state = {
			expandedKeys: ['N01E', 'N01E01E'],
			autoExpandParent: true,
			checkedKeys: ['N01E02E'],
			selectedKeys: []

		}
		
	}

	onChangeConfig = (shouldCheckItemCode) => {
		//let config = this.props.myConfig; 
		this.setState({
			checkedKeys: shouldCheckItemCode
		});

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

	onCheck = (checkedKeys) => {
		console.log('onCheck', checkedKeys);
		this.setState({
			checkedKeys
		});
	}

	onSelect = (selectedKeys, info) => {
		console.log('onSelect', info);
		this.setState({
			selectedKeys
		});
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

	render() {
		return (
		 <Tree checkable 
			onExpand = {
				this.onExpand
			}
			expandedKeys = {
				this.state.expandedKeys
			}
			autoExpandParent = {
				this.state.autoExpandParent
			}
			onCheck = {
				this.onCheck
			}
			checkedKeys = {
				this.state.checkedKeys
			}
			onSelect = {
				this.onSelect
			}
			selectedKeys = {
				this.state.selectedKeys
			} > {
				this.renderTreeNodes(treeData)
			} 
			</Tree>
		);
	}

}

export default connect(state=>state.rightZtreeData,null,null,{withRef: true})(MyTree);
//export default MyTree;
