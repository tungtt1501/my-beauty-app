import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
const appReducers = combineReducers({
    blogs,
    services
});

export default appReducers;