import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
import addBookService from './addBookService'
import servicesBook from './servicesBook'
import itemEditing from './itemEditing'
import auth from './auth'
import serviceItems from './serviceItems'
import serviceEditItem from './serviceEditItem'
const appReducers = combineReducers({
    blogs,
    services,
    addBookService,
    servicesBook,
    itemEditing,
    auth,
    serviceItems,
    serviceEditItem
});

export default appReducers;