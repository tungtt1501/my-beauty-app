import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
import addBookService from './addBookService'
import servicesBook from './servicesBook'
import itemEditing from './itemEditing'
import auth from './auth'
const appReducers = combineReducers({
    blogs,
    services,
    addBookService,
    servicesBook,
    itemEditing,
    auth
});

export default appReducers;