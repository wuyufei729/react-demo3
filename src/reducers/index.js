import {combineReducers} from "redux";
import list from "./list";
import userList from './userlist';
import rightZtreeData from './rightZtreeData';

let reducer = combineReducers({
   list,
   userList,
   rightZtreeData
});
export default reducer;