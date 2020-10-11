import { createSlice } from '@reduxjs/toolkit';

const initialServiceCategory = [
  {
    "categoryId": 1,
    "categoryName": "BEAUTÉ DES MAINS"
  },
  {
    "categoryId": 2,
    "categoryName": "BEAUTÉ DES PIEDS"
  },
  {
    "categoryId": 3,
    "categoryName": "ÉPILATION À LA CIRE"
  },
  {
    "categoryId": 4,
    "categoryName": "* * * FORFAIT"
  },
  {
    "categoryId": "5",
    "categoryName": "BEAUTÉ DES MAINS1"
  },
];

const serviceCategory = createSlice({
  name: 'serviceCategory',
  initialState: initialServiceCategory,
  reducers: {
    addServiceCategory: (state, action) => {
      state.push(action.payload);
    },
    removeServiceCategory: (state, action) => {
      console.log(action.payload);
      const removeServiceCategoryId = action.payload;
      return state.filter(category => category.categoryId !== removeServiceCategoryId);
    },
    updateServiceCategory: (state, action) => {
      const newServiceCategory = action.payload;
      const serviceCategoryIndex = state.findIndex(category => category.categoryId === newServiceCategory.categoryId);

      if (serviceCategoryIndex >= 0) {
        state[serviceCategoryIndex] = newServiceCategory;
      }
    }
  }
});

const { reducer, actions } = serviceCategory;
export const { addServiceCategory, removeServiceCategory, updateServiceCategory } = actions;
export default reducer;