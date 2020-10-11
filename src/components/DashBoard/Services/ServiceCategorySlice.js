import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ServiceCategoryApi from '../../../api/ServiceCategoryApi';

export const getAll = createAsyncThunk('serviceCategory/getAll', async (params) => {
  const categoryList = await ServiceCategoryApi.getAll(params);
  return categoryList;
})

export const add = createAsyncThunk('serviceCategory/add', async (data) => {
  const category = await ServiceCategoryApi.add(data);
  return category;
})

export const update = createAsyncThunk('serviceCategory/update', async (data) => {
  const category = await ServiceCategoryApi.update(data);
  return category;
})

const initialServiceCategory = {
  list: [],
  status: 'idle',
  error: null
}

const serviceCategorySlice = createSlice({
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
  },
  extraReducers: {
    // Get all
    [getAll.pending] : (state) => {
      state.status = 'loading'
    },
    [getAll.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [getAll.fulfilled] : (state, action) => {
      state.status = 'succeeded'
      state.list = action.payload
    },
    // Add
    [add.pending] : (state) => {
      state.status = 'loading'
    },
    [add.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [add.fulfilled] : (state, action) => {
      state.status = 'succeeded'
      state.list.push(action.payload);
    },
    // Update
    [update.pending] : (state) => {
      state.status = 'loading'
    },
    [update.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [update.fulfilled] : (state, action) => {
      state.status = 'succeeded';
      const newServiceCategory = action.payload;
      const serviceCategoryIndex = state.list.findIndex(category => category.categoryId === newServiceCategory.categoryId);

      if (serviceCategoryIndex >= 0) {
        state.list[serviceCategoryIndex] = newServiceCategory;
      }
    },
  }
});

const { reducer, actions } = serviceCategorySlice;
export const { addServiceCategory, removeServiceCategory, updateServiceCategory } = actions;
export default reducer;