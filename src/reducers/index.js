import { combineReducers } from 'redux';
import blogs from './blogs';
import services from './services'
import addBookService from './addBookService'
import servicesBook from './servicesBook'
import itemEditing from './itemEditing'
import auth from './auth'
import serviceItems from './serviceItems'
import serviceEditItem from './serviceEditItem'
import serviceDetailEditItem from './serviceDetailEditItem'
import users from './users'
const appReducers = combineReducers({
    blogs,
    services,
    addBookService,
    servicesBook,
    itemEditing,
    auth,
    serviceItems,
    serviceEditItem,
    serviceDetailEditItem,
    users
});

export default appReducers;