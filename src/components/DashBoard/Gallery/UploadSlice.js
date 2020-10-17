import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GalleryApi from '../../../api/GalleryApi';

export const uploadAct = createAsyncThunk('gallery/upload', async (file) => {
    const gallery = await GalleryApi.upload(file);
    return gallery;
})

const initialPhotos = {
    url: '',
    status: 'idle',
    error: null,
};

const upload = createSlice({
    name: 'upload',
    initialState: initialPhotos,
    reducers: {
        resetUploadFile: (state) => {
            state.error = null;
            state.url = null;
            state.status= 'idle';
        }
    },
    extraReducers: {
        [uploadAct.pending]: (state) => {
            state.status = 'loading'
        },
        [uploadAct.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [uploadAct.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            if (!action.payload.data.error) {
                state.url = action.payload.data.url;
                state.error = null;
            } else {
                state.url = null;
                state.error = action.payload.data.error;
            }
        },
    }
});

const { reducer, actions } = upload;
export const { resetUploadFile } = actions;
export default reducer;