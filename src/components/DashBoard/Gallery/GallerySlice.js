import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GalleryApi from '../../../api/GalleryApi';

export const getAll = createAsyncThunk('gallery/getAll', async (params) => {
  const galleryList = await GalleryApi.getAll(params);
  return galleryList;
})
export const add = createAsyncThunk('gallery/add', async (data) => {
  const gallery = await GalleryApi.add(data);
  return gallery;
})

export const update = createAsyncThunk('gallery/update', async (data) => {
  const gallery = await GalleryApi.update(data);
  return gallery;
})

export const deleteEntity = createAsyncThunk('gallery/delete', async (id) => {
  await GalleryApi.delete(id);
  return id;
})

const initialPhotos = {
  list: [],
  status: 'idle',
  error: null,
};

const gallery = createSlice({
  name: 'galleries',
  initialState: initialPhotos,
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.status = 'idle';
    }
  },
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
        const index = state.list.findIndex(x => x.id === action.payload);
        state.list.splice(index, 1);
    },
  }
});

const { reducer, actions } = gallery;
export const { resetState } = actions;
export default reducer;