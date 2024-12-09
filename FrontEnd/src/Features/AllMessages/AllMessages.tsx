import { Box, CircularProgress, Grid2 } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMessagesThunk } from './messagesThunk';
import { selectAllMessages, selectFetchLoading } from './messagesSlice';
import OneMessages from './oneMessages';

const AllMessages = () => {
  const dispatch = useAppDispatch();
  const allMessages = useAppSelector(selectAllMessages);
  const messagesLoading = useAppSelector(selectFetchLoading);

  const fetchAllMessages = useCallback(async () => {
    await dispatch(fetchMessagesThunk());
  }, []);

  useEffect(() => {
    void fetchAllMessages();
  }, [dispatch, fetchAllMessages]);


  return (
    <Box
      sx={{
        marginBottom: '40px',
        border: "10px solid silver",
      }}
      component="div">
      <Grid2 sx={{
        height: '500px',
        overflowY: 'auto',
      }}>
        <>
          {messagesLoading ?
            <Grid2 container justifyContent="center" alignItems="center" component="div">
              <CircularProgress />
            </Grid2> : <>
              {allMessages.length === 0 ? "No Messages" : <>{allMessages.map((message) => (
                <OneMessages key={message.id} oneMessage={message} />
              ))}</>}
            </>}
        </>

      </Grid2>
    </Box>
  );
};

export default AllMessages;