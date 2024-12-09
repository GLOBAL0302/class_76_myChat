import { Box, Grid2, Typography } from '@mui/material';
import { IMessage } from '../../types';
import dayjs from 'dayjs';

interface Props{
  oneMessage:IMessage
}

const OneMessages:React.FC<Props> = ({oneMessage}) => {
  const correctDate = dayjs(oneMessage.datetime).format('YYYY-MM-DD HH:mm:ss');

  return (
    <Box
      sx={{
        margin: '5px',
        border: "1px solid black",
        padding:"2px"
      }}
      component="div">
      <Grid2
        sx={{paddingX:"10px"}}
        container justifyContent={"space-between"}>
        <Grid2>
          <Typography  variant="body2" component="span">
            <strong>Author:</strong> {oneMessage.author}
          </Typography>
          <br/>
          <Typography variant="body2"  component="span">
            <strong>Author:</strong> {oneMessage.message}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography variant="body2"  component="span">
            <strong>Date:</strong> <span style={{textDecoration:"underline"}}>{correctDate}</span>
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OneMessages;