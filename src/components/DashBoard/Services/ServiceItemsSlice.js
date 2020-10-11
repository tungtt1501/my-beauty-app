import { createSlice } from '@reduxjs/toolkit';

const initialServiceItem = [
    {
        "serviceItemId": 1,
        "categoryId": 1,
        "serviceItemName": "Pose gel nouveaux ongles",
        "serviceItemTime": 40,
        "serviceItemPrice": 90
    },
    {
        "serviceItemId": 2,
        "categoryId": 1,
        "serviceItemName": "Pose acrylique nouveaux ongles ",
        "serviceItemTime": 30,
        "serviceItemPrice": 90
    },
    {
        "serviceItemId": 3,
        "categoryId": 1,
        "serviceItemName": "Remplissage gel",
        "serviceItemTime": 60,
        "serviceItemPrice": 70
    },
    {
        "serviceItemId": 4,
        "categoryId": 1,
        "serviceItemName": "Remplissage acrylique",
        "serviceItemTime": 30,
        "serviceItemPrice": 65
    },
];

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
    }
});

const { reducer, actions } = serviceItem;
export const { addServiceItem, removeServiceItem, updateServiceItem } = actions;
export default reducer;