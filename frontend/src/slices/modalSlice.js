import { createSlice } from '@reduxjs/toolkit';

const initialState = {
//   token: localStorage.getItem('token') ?? null,
type: null,
item: null,
isOpened: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState, 
  reducers: {
    showModal: (state, { payload }) => {
        // console.log(payload, 'from modal slice') // {type: 'adding', item: null}
        state.type = payload.type;
        state.item = payload.item;
        state.isOpened = true;
      },
      closeModal: (state) => {
        state.type = null;
        state.item = null;
      },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
