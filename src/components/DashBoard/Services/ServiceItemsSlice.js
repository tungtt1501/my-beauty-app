import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ServiceItemApi from '../../../api/ServiceItemApi';

export const getAll = createAsyncThunk('serviceItem/getAll', async (params) => {
  const categoryList = await ServiceItemApi.getAll(params);
  return categoryList;
})

export const add = createAsyncThunk('serviceItem/add', async (data) => {
  const serviceItem = await ServiceItemApi.add(data);
  return serviceItem;
})

export const update = createAsyncThunk('serviceItem/update', async (data) => {
  const serviceItem = await ServiceItemApi.update(data);
  return serviceItem;
})

export const deleteEntity = createAsyncThunk('serviceItem/delete', async (id) => {
  await ServiceItemApi.delete(id);
  return id;
})

const initialServiceItem = {
  list: [],
  status: 'idle',
  error: null
};

const serviceItem = createSlice({
  name: 'serviceItem',
  initialState: initialServiceItem,
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state) => {
      state.status = 'loading'
    },
    [getAll.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [getAll.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.list = action.payload
    },
    // Add
    [add.pending]: (state) => {
      state.status = 'loading'
    },
    [add.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [add.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.list.push(action.payload);
    },
    // Update
    [update.pending]: (state) => {
      state.status = 'loading'
    },
    [update.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [update.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const newEntity = action.payload;
      const entityIndex = state.list.findIndex(entity => entity.serviceItemId === newEntity.serviceItemId);

      if (entityIndex >= 0) {
        state.list[entityIndex] = newEntity;
      }
    },
    // Delete entity
    [deleteEntity.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteEntity.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [deleteEntity.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const removeId = action.payload;
      return state.filter(entity => entity.serviceItemId != removeId);
    },
  }
});

const { reducer, actions } = serviceItem;
export default reducer;