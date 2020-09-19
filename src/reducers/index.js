import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
import addBookService from './addBookService'
import servicesBook from './servicesBook'
import itemEditing from './itemEditing'
const appReducers = combineReducers({
    blogs,
    services,
    addBookService,
    servicesBook,
    itemEditing
});

export default appReducers;