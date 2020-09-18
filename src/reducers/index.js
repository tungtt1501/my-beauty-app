import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
import addBookService from './addBookService'
const appReducers = combineReducers({
    blogs,
    services,
    addBookService
});

export default appReducers;