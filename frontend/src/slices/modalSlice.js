/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  item: null,
  isOpened: false,
  modalChannelId: '',
  modalChannelName: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.type = action.payload.type;
      state.item = action.payload.item;
      state.isOpened = true;
      state.modalChannelId = action.payload.id;
      state.modalChannelName = action.payload.name;
    },
    closeModal: (state) => {
      state.type = null;
      state.item = null;
      state.isOpened = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
