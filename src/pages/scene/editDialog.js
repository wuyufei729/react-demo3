import React from 'react';
import {Modal,Input} from 'antd';


class EditDialog extends React.Component{
	
	constructor(arg){
		super(arg);
		
		this.state = {
			originData: {},
			resultData: {},
			dialogData: {
				ModelText: '编辑的内容',
				visible: false,
				confirmLoading: false
			}
		}
		
		this.handleEditOk = this.handleEditOk.bind(this);
		this.handleEditCancel = this.handleEditCancel.bind(this);
	}
	
	//打开编辑框
	showDialog(originData){
		this.setState({
			originData: {...originData},
			dialogData: {...this.state.dialogData,...{visible: true}}
		});
	}
	//关闭编辑框
	closeDialog(){
		this.setState({
			dialogData: {...this.state.dialogData,...{visible: false}}
		});
	}
	
	//保存编辑结果
	handleEditOk(){
		//var _this = this;
		/* axios.get('/api/editscene',{sceneModel: _this.state.originData}).then(res=>{
			
		}).then(res=>{
			
		})
		 */
		/* this.setState({
			resultData: {...this.state.originData}
		}); */
		this.props.handleEditOk(this.state.originData);
	}
	//取消编辑结果，类似于关闭编辑框
	handleEditCancel(){
		this.closeDialog();
	}
	
	
	
	render(){
		const {visible,confirmLoading,ModelText} = this.state.dialogData;
		
		return (
		
			<Modal title='编辑案件'
				visible={visible}
				onOk = {this.handleEditOk}
				confirmLoading={confirmLoading}
				onCancel={this.handleEditCancel}
			>
				<input type="hidden" value={this.state.originData.key}/>
				<div className="input-item">
					<label>现勘编号</label>
					<Input defaultValue={this.state.originData.uSceneId}
						onChange={(e)=>{this.setState({originData: {...this.state.originData,...{uSceneId: e.target.value}}})}} />
				</div>
				
				<div className="input-item">
					<label>案件类别</label>
					<Input defaultValue={this.state.originData.caseTypeName} 
					onChange={(e)=>{this.setState({originData:{...this.state.originData,...{caseTypeName: e.target.value}}})}} />
				</div>
				
				<div className="input-item">
					<label>作案手段</label>
					<Input defaultValue={this.state.originData.meansName} 
					onChange={(e)=>{this.setState({originData:{...this.state.originData, ...{meansName: e.target.value}}})}} />
				</div>
			
			</Modal>
		
		
		);
		
		
	}
	
	
}

export default EditDialog;