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
    clearErr: (state) => {
      state.error = null;
      state.url = null
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
  }
});

const { reducer, actions } = gallery;
export const { clearErr } = actions;
export default reducer;