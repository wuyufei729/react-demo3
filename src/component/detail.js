import React,{Component} from 'react';
import {Modal,Input} from 'antd';

export default class DetailDialog extends Component{
	
	constructor(arg){
		super(arg);		
		this.state = {
			title: "",
			data: {},
			columns: [],
			dialogData: {
				visible: false,
				confirmLoading: false
			}
		}
		this.showDialog = this.showDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		
	}
	//显示弹出框
	showDialog(data){
		this.setState({
			columns: [...data.columns],
			data: Object.assign({},data.data),
			dialogData: Object.assign({},{visible: true})
		});
	}
	//关闭弹出框
	closeDialog(){
		this.setState({
			dialogData: Object.assign(this.state.dialogData,{visible: false})
		})
	}
	
		
	render(){
		const{visible,confirmLoading} = this.state.dialogData;
		let _this = this;
		
		return (
			<Modal title={_this.state.title}
				visible={visible}
				onOk = {_this.closeDialog}
				onCancel = {_this.closeDialog}
			>
			
			{
				this.state.columns.map(item=>{
					let showData = _this.state.data[item.key];
					return (
						<div className="input-item" key={item.key}>
							<label>{item.title}</label>
							<Input defaultValue={showData} disabled={true} />
						</div>
					)									
				})
				
			}
				
				
			</Modal>
		
		);
		
	}
	
}