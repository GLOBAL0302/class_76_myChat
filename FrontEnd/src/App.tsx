import './App.css';
import MessagesFormat from './Components/MessageFormat/MessagesFormat';
import { Container } from '@mui/material';
import AllMessages from './Features/AllMessages/AllMessages';

const App = () => {
  return (
    <>
      <Container>
        <AllMessages />
        <MessagesFormat />
      </Container>
    </>
  );
};

export default App;
