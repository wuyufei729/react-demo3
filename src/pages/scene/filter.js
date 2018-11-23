import React,{Component} from 'react';
import {Checkbox,DatePicker,Button} from 'antd';
import moment from 'moment';

export default class Filter extends Component{
	constructor(arg){
		super(arg);
		this.state = {
			originFilter:{
				caseType: [
					{
						code: "N01E02E",
						name: "侵犯财产",
						isCheck: false
					},
					{
						code: "N01E03E",
						name: "危害公共安全",
						isCheck: true
					}
				],
				means: [
					{
						code: "N08E02E",
						name: "破窗而入",
						isCheck: false
					},
					{
						code: "N08E03E",
						name: "破门而入",
						isCheck: false
					}
				],
				caseStatus: [
					{
						code: "N09E01E",
						name: "未立案",
						isCheck: false
					},
					{
						code: "N09E02E",
						name: "已结案",
						isCheck: false
					}
				],
				caseTimeStart: "2018/07/12",
				caseTimeEnd: "2018/07/15",
			}
		}
		
		this.handleQuery = this.handleQuery.bind(this);
		this.changeArrayTypeItem = this.changeArrayTypeItem.bind(this);
	}

	/**
	 * 修改案件类型、作案手段等
	 * @param {object} caseTypeItem 
	 * @param {object} e
	 */
	changeArrayTypeItem(type,item, e){
		let currentObj = this.state.originFilter[type].find(p=>p.code == item.code);
		
		if(e.target.checked == currentObj.isCheck) return;
		let itemList = [...this.state.originFilter[type]];
		let targetObj = itemList.find(p=>p.code == item.code);
		if(e.target.checked){
			targetObj.isCheck = true;
		}else{
			targetObj.isCheck = false;
		}

		this.setState({
			originFilter: {...this.state.originFilter,...{[type]: itemList}}
		});

		

	}
	
	
	handleQuery(){
		let queryFilter = this.state.originFilter;
		this.props.doQuery(queryFilter);
		
	}
	
	
	
	render(){
		let filter = this.state.originFilter;
		var _this = this;
		const { RangePicker } = DatePicker;
		const dateFormat = 'YYYY/MM/DD';
		const monthFormat = 'YYYY/MM';

		return (
			<div className="clearfix">
				<div className="filter-item">
					<label>案件类别：</label>
					{
						filter.caseType.map(item=>{
							return (
								<Checkbox key={item.code} checked={item.isCheck} 
								onChange={_this.changeArrayTypeItem.bind(_this,'caseType',item)}>{item.name}</Checkbox>
							);
						})
					}
				</div>
				<div className="filter-item">
					<label>作案手段：</label>
					{
						filter.means.map(item=>{
							return (
								<Checkbox key={item.code} checked={item.isCheck} 
								onChange={_this.changeArrayTypeItem.bind(_this,'means',item)}>{item.name}</Checkbox>
							);
						})
					}
				</div>
				<div className="filter-item">
					<label>案件状态：</label>
					{
						filter.caseStatus.map(item=>{
							return (
								<Checkbox key={item.code} checked={item.isCheck} 
								onChange={_this.changeArrayTypeItem.bind(_this,'caseStatus',item)}>{item.name}</Checkbox>
							);
						})
					}
				</div>
				<div className="filter-item">
					<label>案发时间：</label>				
					<RangePicker
					defaultValue={[
						moment(_this.state.originFilter.caseTimeStart, dateFormat),
						moment(_this.state.originFilter.caseTimeEnd, dateFormat)
					]}
					format={dateFormat}
					/>
				</div>
				<div className="filter-item">
					<Button type="primary" icon="search" onClick={this.queryAll}>Search</Button>
				</div>
				
			</div>
		);
		
	}
	
}