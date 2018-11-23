

function rightZtreeData(state={
	data: []
}, action){
	switch(action.type){
		case 'RIGHT_TREE_UPDATE':
			
			return {
				data: action.data.data
			}
		
		default: 
			return state;
		
	}
}


export default rightZtreeData;