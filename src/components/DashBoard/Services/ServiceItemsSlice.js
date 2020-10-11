import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ServiceItemApi from '../../../api/ServiceItemApi';

export const getAll = createAsyncThunk('serviceItem/getAll', async (params) => {
    const categoryList = await ServiceItemApi.getAll(params);
    return categoryList;
  })

const initialServiceItem = {
    list: [],
    status: 'idle',
    error: null
};

const serviceItem = createSlice({
    name: 'serviceItem',
    initialState: initialServiceItem,
    reducers: {
        addServiceItem: (state, action) => {
            state.push(action.payload);
        },
        removeServiceItem: (state, action) => {
            console.log(action.payload);
            const removeServiceItemId = action.payload;
            return state.filter(category => category.serviceItemId !== removeServiceItemId);
        },
        updateServiceItem: (state, action) => {
            const newServiceItem = action.payload;
            const serviceItemIndex = state.findIndex(item => item.newServiceItem === newServiceItem.newServiceItem);

            if (serviceItemIndex >= 0) {
                state[serviceItemIndex] = newServiceItem;
            }
        }
    },
    extraReducers: {
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
    }
});

const { reducer, actions } = serviceItem;
export const { addServiceItem, removeServiceItem, updateServiceItem } = actions;
export default reducer;