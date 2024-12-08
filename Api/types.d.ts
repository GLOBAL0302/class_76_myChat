export interface IMessage {
  id: string;
  message: string;
  author: string;
  datetime: string;
}

export type IMessageParams = Omit<IMessage, 'id' | 'datetime'>;
