import cors from "cors";
import messagesRouter from './Routers/Messages';

const path = "./messages"

const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use("/messages", messagesRouter);



const run = async()=>{
  fs.existsSync(path) ? "" : fs.mkdirSync(path);
  app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
  })
}


run().catch(err => console.log(err));
