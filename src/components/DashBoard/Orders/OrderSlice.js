import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import OrderApi from './../../../api/OrderApi'

export const getAll = createAsyncThunk('orders/getAll', async (params) => {
    const orderList = await OrderApi.getAll(params);
    return orderList;
})

export const add = createAsyncThunk('serviceItem/add', async (data) => {
    const serviceItem = await OrderApi.add(data);
    return serviceItem;
})

export const update = createAsyncThunk('orders/update', async (data) => {
    const order = await OrderApi.update(data);
    return order;
})

const initialEntity = {
    list: [],
    status: 'idle',
    error: null
};

const order = createSlice({
    name: 'orders',
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
            const entityIndex = state.list.findIndex(entity => entity.id === newEntity.id);

            if (entityIndex >= 0) {
                state.list[entityIndex] = newEntity;
            }
        },
    }
});

const { reducer, actions } = order;
export default reducer;