import { Box, Grid2, Typography } from '@mui/material';
import { IMessage } from '../../types';
import dayjs from 'dayjs';

interface Props {
  oneMessage: IMessage;
}

const OneMessages: React.FC<Props> = ({ oneMessage }) => {
  let correctDate = '';
  const currentDate = new Date();
  const test = new Date(oneMessage.datetime);
  const yesterday = currentDate.getDate() - 1 === test.getDate();
  const monthCheck = currentDate.getMonth() !== test.getMonth();
  const yearCheck = currentDate.getFullYear() !== test.getFullYear();
  if (yesterday) {
    correctDate += ' Yesterday';
  }
  if (!yesterday && monthCheck) {
    correctDate += dayjs(oneMessage.datetime).format('MM-DD');
  }
  if (!yesterday && !monthCheck && yearCheck) {
    correctDate += dayjs(oneMessage.datetime).format('YYYY');
  }
  if (!yesterday && !monthCheck && !yearCheck) {
    correctDate += `Today ${dayjs(oneMessage.datetime).format('HH:mm:ss')}`;
  }

  return (
    <Box
      sx={{
        margin: '5px',
        border: '1px solid black',
        padding: '2px',
      }}
      component="div"
    >
      <Grid2 sx={{ paddingX: '10px' }} container justifyContent={'space-between'}>
        <Grid2>
          <Typography variant="body2" component="span">
            <strong>Author:</strong> {oneMessage.author}
          </Typography>
          <br />
          <Typography variant="body2" component="span">
            <strong>Message:</strong> {oneMessage.message}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography variant="body2" component="span">
            <strong>Date:</strong> {correctDate}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OneMessages;
