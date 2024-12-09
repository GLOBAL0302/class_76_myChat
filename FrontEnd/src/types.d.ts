export interface IMessage{
  message:string,
  author:string,
  id:string,
  datetime:string
}

export type IMessageFormat = Omit<IMessage, 'id' | "datetime">;