


function userList(state={
    data:[],
    loading: true
},action) {
    switch (action.type){
        case "LIST_UPDATA":
            return {
                loading: true,
                data: state.data
            };
			break;
        case "LIST_UPDATA_SUCC":
            return {
                loading: false,
                data: action.data
            };
			break;
        case "LIST_UPDATA_REEOR":
            return {
                loading: false,
                data: []
            };
			break;
		case "LIST_FILTER":
			return {
				loading: false,
				data: action.data
			};
			break;
		case "LIST_DELETE":
		
			return {
				loading: false,
				data: [...action.data]
			};
			break;
        default:
            return state;
    }
}
export default userList;


