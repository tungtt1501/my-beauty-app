import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from './../components/DashBoard/Gallery/GallerySlice'
import serviceCategoryReducer from './../components/DashBoard/Services/ServiceCategorySlice'
import serviceItemReducer from './../components/DashBoard/Services/ServiceItemsSlice'

const rootReducer = {
  photos: galleryReducer,
  serviceCategory: serviceCategoryReducer,
  serviceItem: serviceItemReducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;