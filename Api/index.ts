import cors from 'cors';
import express from 'express';
import messagesRouter from './Routers/messages';
import { existsSync } from 'node:fs';
import fileDb from './fileDB';

const path = './db.json';
const app = express();
const port = 8000;

const fs = require('fs');

app.use(express.json());
app.use(cors());
app.use('/messages', messagesRouter);

const run = async () => {
  if (existsSync(path)) {
    await fileDb.init();
  } else {
    fs.writeFileSync('./db.json', JSON.stringify([]));
  }

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

run().catch((err) => console.log(err));
