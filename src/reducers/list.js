function list(state={
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
		
        default:
            return state;
    }
}
export default list;