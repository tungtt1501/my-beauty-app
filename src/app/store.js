import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from './../components/DashBoard/Gallery/GallerySlice'
import serviceCategoryReducer from './../components/DashBoard/Services/ServiceCategorySlice'
import serviceItemReducer from './../components/DashBoard/Services/ServiceItemsSlice'
import userReducer from './../components/DashBoard/User/UserSlice'
import orderReducer from './../components/DashBoard/Orders/OrderSlice'
import authReducer from './../components/Login/AuthSlice'
import uploadReducer from './../components/DashBoard/Gallery/UploadSlice'

const rootReducer = {
  photos: galleryReducer,
  serviceCategory: serviceCategoryReducer,
  serviceItem: serviceItemReducer,
  users: userReducer,
  orders: orderReducer,
  auth: authReducer,
  upload: uploadReducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;