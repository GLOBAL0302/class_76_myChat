import { IMessage } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMessagesThunk, postMessageThunk } from './messagesThunk';

interface IMessageSlice {
  messages: IMessage[],
  fetchMessagesLoading: boolean,
  postMessageLoading: boolean
}

const initialState: IMessageSlice = {
  messages: [],
  fetchMessagesLoading: false,
  postMessageLoading: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesThunk.pending, state => {
        state.fetchMessagesLoading = true;
      })
      .addCase(fetchMessagesThunk.fulfilled, (state, { payload }) => {
        state.fetchMessagesLoading = false;
        state.messages = payload;
      })
      .addCase(fetchMessagesThunk.rejected, state => {
        state.fetchMessagesLoading = false;
      });
    builder
      .addCase(postMessageThunk.pending, state => {
        state.postMessageLoading = true;
      })
      .addCase(postMessageThunk.fulfilled, (state) => {
        state.postMessageLoading = false;
      })
      .addCase(postMessageThunk.rejected, state => {
        state.postMessageLoading = false;
      });
  },
  selectors: {
    selectAllMessages: (state => state.messages),
    selectFetchLoading: (state => state.fetchMessagesLoading),
    selectPostLoading: (state => state.postMessageLoading),
  },
});


export const messageReducer = messagesSlice.reducer;
export const {} = messagesSlice.actions;
export const {
  selectAllMessages
  , selectPostLoading
  , selectFetchLoading,
} = messagesSlice.selectors;