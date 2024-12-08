import { promises as fs } from 'fs';
import crypto from 'crypto';
import { IMessage, IMessageParams } from './types';

const fileName = './db.json';
let data: IMessage[] = [];

const fileDb = {
  async init() {
    try {
      const fileContent = await fs.readFile(fileName);
      data = await JSON.parse(fileContent.toString());
    } catch (error) {
      console.error(error);
    }
  },
  async getData() {
    return data;
  },

  async addMessage(item: IMessageParams) {
    const id = crypto.randomUUID();
    const datetime = new Date().toISOString();
    const newMessage = {
      ...item,
      id,
      datetime,
    };
    data.push(newMessage);

    await this.save();
    return newMessage;
  },
  async save() {
    return await fs.writeFile(fileName, JSON.stringify(data));
  },
};

export default fileDb;
