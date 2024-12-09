import { Button, CircularProgress, Grid2, TextField } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import { IMessageFormat } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMessagesThunk, postMessageThunk } from '../../Features/AllMessages/messagesThunk';
import { selectPostLoading } from '../../Features/AllMessages/messagesSlice';

const initialState = {
  author: '',
  message: '',
};

const MessagesFormat = () => {
  const dispatch = useAppDispatch();
  const postMessageLoading = useAppSelector(selectPostLoading);
  const [messageForm, setMessageForm] = useState<IMessageFormat>(initialState);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postMessageThunk(messageForm));
    await dispatch(fetchMessagesThunk());
    setMessageForm(initialState);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (messageForm) {
      setMessageForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <Grid2 onSubmit={onSubmit} container spacing={2} component="form">
      <TextField
        onChange={onChange}
        required
        name="author"
        id="author"
        value={messageForm.author}
        fullWidth
        label="Author"
        variant="filled"
      />

      <TextField
        onChange={onChange}
        required
        name="message"
        id="message"
        value={messageForm.message}
        fullWidth
        label="Message"
        variant="filled"
      />

      <Button
        disabled={postMessageLoading}
        variant="contained"
        color="primary"
        type="submit"
        sx={{ marginLeft: 'auto' }}
      >
        Send Message {postMessageLoading && <CircularProgress />}
      </Button>
    </Grid2>
  );
};

export default MessagesFormat;
