import express from 'express';
import fileDb from '../fileDB';

const messagesRouter = express.Router();
messagesRouter.get('/', async (req: express.Request, res: express.Response) => {
  const messages = await fileDb.getData();
  if (req.query.datetime !== undefined) {
    const datetime = req.query.datetime as string;
    const date = new Date(datetime);
    if (isNaN(date.getDate())) {
      res.status(400).send({ error: 'Invalid datetime' });
    } else {
      res.status(200).send(
        messages.filter((item) => {
          return item.datetime > datetime;
        }),
      );
    }
  } else {
    res.status(200).send(messages.slice(messages.length - 30, messages.length));
  }
});

messagesRouter.post('/', async (req: express.Request, res: express.Response) => {
  if (!req.body.message || !req.body.author) {
    res.status(400).send({ error: 'Author and Message must be presented in the request' });
  }

  const newMessage = {
    message: req.body.message,
    author: req.body.author,
  };

  const saveMessage = await fileDb.addMessage(newMessage);
  res.send(saveMessage);
});

export default messagesRouter;
