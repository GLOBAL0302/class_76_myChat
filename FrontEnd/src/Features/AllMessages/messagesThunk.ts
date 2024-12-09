import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApi } from '../../axiosApi';
import { IMessage, IMessageFormat } from '../../types';

export const fetchMessagesThunk = createAsyncThunk<IMessage[], void>('messages/fetchMessagesThunk', async () => {
  try {
    const { data } = await axiosApi.get('/messages');
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const postMessageThunk = createAsyncThunk<void, IMessageFormat>(
  'messages/postMessageThunk',
  async (oneMessage) => {
    try {
      await axiosApi.post('/messages', oneMessage);
    } catch (error) {
      console.error(error);
    }
  },
);
