import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../../api/UserApi';

export const getAll = createAsyncThunk('user/getAll', async (params) => {
    const userList = await UserApi.getAll(params);
    return userList;
})
export const add = createAsyncThunk('user/add', async (data) => {
    const user = await UserApi.add(data);
    return user;
})

export const update = createAsyncThunk('user/update', async (data) => {
    const user = await UserApi.update(data);
    return user;
})

export const deleteEntity = createAsyncThunk('user/delete', async (id) => {
    await UserApi.delete(id);
    return id;
})

const initialEntity = {
    list: [],
    status: 'idle',
    error: null
};

const user = createSlice({
    name: 'users',
    initialState: initialEntity,
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
            const entityIndex = state.list.findIndex(entity => entity.userId === newEntity.userId);

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
            return state.filter(entity => entity.userId != removeId);
        },
    }
});

const { reducer, actions } = user;
export default reducer;