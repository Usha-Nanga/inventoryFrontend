import {combineReducers} from 'redux'
import loginreducer from './loginreducer';
const rootreducer = combineReducers({
    user: loginreducer
});
export default rootreducer