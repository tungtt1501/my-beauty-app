import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from './../components/DashBoard/Gallery/GallerySlice'
import serviceCategoryReducer from './../components/DashBoard/Services/ServiceCategorySlice'
import serviceItemReducer from './../components/DashBoard/Services/ServiceItemsSlice'
import userReducer from './../components/DashBoard/User/UserSlice'
import orderReducer from './../components/DashBoard/Orders/OrderSlice'

const rootReducer = {
  photos: galleryReducer,
  serviceCategory: serviceCategoryReducer,
  serviceItem: serviceItemReducer,
  users: userReducer,
  orders: orderReducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;